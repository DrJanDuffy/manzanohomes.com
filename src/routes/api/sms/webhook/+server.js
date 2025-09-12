import { FollowUpBossAPI } from '$lib/api/follow-up-boss.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const body = await request.json();

    // Extract SMS data from webhook payload
    const { from, body: messageBody, timestamp, to } = body;

    // Validate required fields
    if (!from || !messageBody) {
      return json({ error: 'Missing required fields' }, { status: 400 });
    }

    const followUpBoss = new FollowUpBossAPI();

    // Check if lead already exists
    const existingLead = await followUpBoss.getLeadByPhone(from);

    if (existingLead) {
      // Update existing lead with new message
      await followUpBoss.addNote(existingLead.id, `SMS: ${messageBody}`);

      // Update lead status to active
      await followUpBoss.updateLead(existingLead.id, {
        status: 'Active Lead',
        lastContact: new Date().toISOString(),
      });

      const _result = { id: existingLead.id, existing: true };
    } else {
      // Create new lead
      const leadData = {
        phone: from,
        message: messageBody,
        source: 'SMS',
        timestamp: timestamp || new Date().toISOString(),
        sms_number: to || process.env.SMS_PHONE_NUMBER,
        lead_type: 'SMS Lead',
        status: 'New Lead',
      };

      const _result = await followUpBoss.createLead(leadData);
    }

    // Send auto-reply if configured
    if (process.env.SMS_AUTO_REPLY_ENABLED === 'true') {
      await followUpBoss.sendSMS(
        from,
        process.env.SMS_AUTO_REPLY_MESSAGE ||
          "Thanks for texting Manzano Homes! We'll get back to you within 15 minutes. Reply STOP to opt out."
      );
    }

    return json({
      success: true,
      lead_id: result.id,
      message: 'Lead created successfully',
    });
  } catch (error) {
    console.error('SMS webhook error:', error);
    return json(
      {
        error: 'Internal server error',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  return json({
    message: 'SMS webhook endpoint is active',
    timestamp: new Date().toISOString(),
  });
}

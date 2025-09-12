import { json } from '@sveltejs/kit';
import { FollowUpBossAPI } from '$lib/api/follow-up-boss.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const followUpBoss = new FollowUpBossAPI();
    
    // Check if lead already exists
    let existingLead = await followUpBoss.getLeadByPhone(formData.phone);
    
    if (existingLead) {
      // Update existing lead
      await followUpBoss.updateLead(existingLead.id, {
        firstName: formData.name.split(' ')[0],
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        email: formData.email,
        status: 'Active Lead',
        lastContact: new Date().toISOString(),
        customFields: {
          ...existingLead.customFields,
          preferredContact: formData.preferredContact,
          propertyInterest: formData.propertyInterest,
          timeframe: formData.timeframe,
          budget: formData.budget,
          subject: formData.subject
        }
      });
      
      // Add form submission as note
      await followUpBoss.addNote(existingLead.id, 
        `Website Form Submission:\nSubject: ${formData.subject}\nMessage: ${formData.message}\nPreferred Contact: ${formData.preferredContact}\nProperty Interest: ${formData.propertyInterest}\nTimeframe: ${formData.timeframe}\nBudget: ${formData.budget}`
      );
      
      var result = { id: existingLead.id, existing: true };
    } else {
      // Create new lead
      const leadData = {
        firstName: formData.name.split(' ')[0],
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        email: formData.email,
        phone: formData.phone,
        source: 'Website Form',
        leadType: 'Website Lead',
        status: 'New Lead',
        notes: `Website Form Submission:\nSubject: ${formData.subject}\nMessage: ${formData.message}\nPreferred Contact: ${formData.preferredContact}\nProperty Interest: ${formData.propertyInterest}\nTimeframe: ${formData.timeframe}\nBudget: ${formData.budget}`,
        tags: ['Website', 'Form Submission', 'Manzano Homes'],
        customFields: {
          preferredContact: formData.preferredContact,
          propertyInterest: formData.propertyInterest,
          timeframe: formData.timeframe,
          budget: formData.budget,
          subject: formData.subject,
          formMessage: formData.message
        }
      };
      
      const result = await followUpBoss.createLead(leadData);
    }
    
    // Send SMS if preferred contact method is SMS
    if (formData.preferredContact === 'sms') {
      await followUpBoss.sendSMS(formData.phone, 
        `Hi ${formData.name.split(' ')[0]}! Thanks for contacting Manzano Homes. We received your message about ${formData.subject} and will get back to you within 15 minutes. - The Manzano Homes Team`
      );
    }
    
    return json({ 
      success: true, 
      lead_id: result.id,
      message: 'Lead created/updated successfully' 
    });
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    return json({ 
      error: 'Internal server error',
      details: error.message 
    }, { status: 500 });
  }
}

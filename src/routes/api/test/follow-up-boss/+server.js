import { json } from '@sveltejs/kit';
import { FollowUpBossAPI } from '$lib/api/follow-up-boss.js';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  try {
    const followUpBoss = new FollowUpBossAPI();
    
    // Test 1: Check API connection and authentication
    console.log('Testing Follow Up Boss API connection...');
    
    // Test 2: Search for existing test lead
    const testPhone = '+17025001942';
    console.log(`Searching for existing lead with phone: ${testPhone}`);
    
    let existingLead = await followUpBoss.getLeadByPhone(testPhone);
    
    if (existingLead) {
      console.log('Found existing lead:', existingLead);
      return json({
        success: true,
        test: 'API Connection',
        status: 'Connected',
        existingLead: {
          id: existingLead.id,
          name: `${existingLead.firstName} ${existingLead.lastName}`,
          email: existingLead.email,
          phone: existingLead.phone,
          status: existingLead.status,
          source: existingLead.source
        },
        message: 'Follow Up Boss API is working correctly. Found existing lead.'
      });
    } else {
      // Test 3: Create a test lead
      console.log('No existing lead found. Creating test lead...');
      
      const testLeadData = {
        firstName: 'Test',
        lastName: 'Lead',
        email: 'test@manzanohomes.com',
        phone: testPhone,
        source: 'API Test',
        leadType: 'Test Lead',
        status: 'New Lead',
        notes: 'This is a test lead created by the API integration test.',
        tags: ['Test', 'API', 'Manzano Homes'],
        customFields: {
          testField: 'API Test Value',
          testTimestamp: new Date().toISOString()
        }
      };
      
      const newLead = await followUpBoss.createLead(testLeadData);
      console.log('Test lead created:', newLead);
      
      return json({
        success: true,
        test: 'API Connection',
        status: 'Connected',
        newLead: {
          id: newLead.id,
          name: `${newLead.firstName} ${newLead.lastName}`,
          email: newLead.email,
          phone: newLead.phone,
          status: newLead.status,
          source: newLead.source
        },
        message: 'Follow Up Boss API is working correctly. Created test lead.'
      });
    }
    
  } catch (error) {
    console.error('Follow Up Boss API test failed:', error);
    
    return json({
      success: false,
      test: 'API Connection',
      status: 'Failed',
      error: error.message,
      details: {
        message: 'Follow Up Boss API test failed',
        possibleCauses: [
          'Invalid API key',
          'Incorrect base URL',
          'Network connectivity issues',
          'Follow Up Boss API service unavailable'
        ],
        environmentVariables: {
          apiKey: process.env.FOLLOW_UP_BOSS_API_KEY ? 'Set' : 'Missing',
          baseUrl: process.env.FOLLOW_UP_BOSS_BASE_URL || 'Using default',
          agentId: process.env.FOLLOW_UP_BOSS_AGENT_ID || 'Missing'
        }
      }
    }, { status: 500 });
  }
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const { testType, phoneNumber } = await request.json();
    
    const followUpBoss = new FollowUpBossAPI();
    
    switch (testType) {
      case 'createLead':
        const leadData = {
          firstName: 'Test',
          lastName: 'Lead',
          email: 'test@manzanohomes.com',
          phone: phoneNumber || '+17025001942',
          source: 'API Test',
          leadType: 'Test Lead',
          status: 'New Lead',
          notes: 'Test lead created via API test endpoint',
          tags: ['Test', 'API', 'Manzano Homes']
        };
        
        const result = await followUpBoss.createLead(leadData);
        return json({ success: true, lead: result });
        
      case 'sendSMS':
        const smsResult = await followUpBoss.sendSMS(
          phoneNumber || '+17025001942',
          'Test SMS from Manzano Homes API integration. This is a test message.'
        );
        return json({ success: true, sms: smsResult });
        
      case 'searchLead':
        const searchResult = await followUpBoss.getLeadByPhone(phoneNumber || '+17025001942');
        return json({ success: true, lead: searchResult });
        
      default:
        return json({ error: 'Invalid test type' }, { status: 400 });
    }
    
  } catch (error) {
    console.error('Follow Up Boss API test error:', error);
    return json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

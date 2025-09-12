/**
 * Follow Up Boss API Client
 * Handles lead creation, SMS sending, and CRM integration
 */

export class FollowUpBossAPI {
  constructor() {
    this.apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
    this.baseUrl = process.env.FOLLOW_UP_BOSS_BASE_URL || 'https://api.followupboss.com/v1';
    this.agentId = process.env.FOLLOW_UP_BOSS_AGENT_ID;
  }

  /**
   * Create a new lead in Follow Up Boss
   * @param {Object} leadData - Lead information
   * @returns {Promise<Object>} Created lead data
   */
  async createLead(leadData) {
    try {
      const response = await fetch(`${this.baseUrl}/people`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          person: {
            firstName: leadData.firstName || 'SMS',
            lastName: leadData.lastName || 'Lead',
            email: leadData.email || `${leadData.phone}@sms.lead`,
            phone: leadData.phone,
            source: leadData.source || 'SMS',
            leadType: leadData.lead_type || 'SMS Lead',
            status: leadData.status || 'New Lead',
            notes: leadData.message || 'SMS inquiry',
            tags: ['SMS', 'Website', 'Manzano Homes'],
            customFields: {
              smsMessage: leadData.message,
              smsTimestamp: leadData.timestamp,
              smsNumber: leadData.sms_number,
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Follow Up Boss API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Lead created in Follow Up Boss:', result);
      return result;
    } catch (error) {
      console.error('Error creating lead in Follow Up Boss:', error);
      throw error;
    }
  }

  /**
   * Send SMS message through Follow Up Boss
   * @param {string} phoneNumber - Recipient phone number
   * @param {string} message - Message content
   * @returns {Promise<Object>} SMS send result
   */
  async sendSMS(phoneNumber, message) {
    try {
      const response = await fetch(`${this.baseUrl}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          message: {
            type: 'sms',
            to: phoneNumber,
            body: message,
            agentId: this.agentId,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`SMS send error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('SMS sent via Follow Up Boss:', result);
      return result;
    } catch (error) {
      console.error('Error sending SMS:', error);
      throw error;
    }
  }

  /**
   * Update lead information
   * @param {string} leadId - Lead ID
   * @param {Object} updateData - Data to update
   * @returns {Promise<Object>} Updated lead data
   */
  async updateLead(leadId, updateData) {
    try {
      const response = await fetch(`${this.baseUrl}/people/${leadId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          person: updateData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Lead update error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Lead updated in Follow Up Boss:', result);
      return result;
    } catch (error) {
      console.error('Error updating lead:', error);
      throw error;
    }
  }

  /**
   * Get lead by phone number
   * @param {string} phoneNumber - Phone number to search
   * @returns {Promise<Object|null>} Lead data or null
   */
  async getLeadByPhone(phoneNumber) {
    try {
      const response = await fetch(
        `${this.baseUrl}/people?phone=${encodeURIComponent(phoneNumber)}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Lead search error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      return result.people && result.people.length > 0 ? result.people[0] : null;
    } catch (error) {
      console.error('Error searching lead:', error);
      return null;
    }
  }

  /**
   * Add note to lead
   * @param {string} leadId - Lead ID
   * @param {string} note - Note content
   * @returns {Promise<Object>} Note creation result
   */
  async addNote(leadId, note) {
    try {
      const response = await fetch(`${this.baseUrl}/people/${leadId}/notes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          note: {
            body: note,
            type: 'note',
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Note creation error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Note added to lead:', result);
      return result;
    } catch (error) {
      console.error('Error adding note:', error);
      throw error;
    }
  }
}

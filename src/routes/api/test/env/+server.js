import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  return json({
    environment: {
      FOLLOW_UP_BOSS_API_KEY: process.env.FOLLOW_UP_BOSS_API_KEY
        ? `Set (length: ${process.env.FOLLOW_UP_BOSS_API_KEY.length})`
        : 'Missing',
      FOLLOW_UP_BOSS_BASE_URL: process.env.FOLLOW_UP_BOSS_BASE_URL || 'Missing',
      FOLLOW_UP_BOSS_AGENT_ID: process.env.FOLLOW_UP_BOSS_AGENT_ID || 'Missing',
      SMS_PHONE_NUMBER: process.env.SMS_PHONE_NUMBER || 'Missing',
      SMS_AUTO_REPLY_ENABLED: process.env.SMS_AUTO_REPLY_ENABLED || 'Missing',
      SMS_AUTO_REPLY_MESSAGE: process.env.SMS_AUTO_REPLY_MESSAGE
        ? `Set (length: ${process.env.SMS_AUTO_REPLY_MESSAGE.length})`
        : 'Missing',
    },
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    timestamp: new Date().toISOString(),
  });
}

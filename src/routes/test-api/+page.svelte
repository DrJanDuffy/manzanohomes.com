<script>
import { onMount } from 'svelte';

let _testResults = $state(null);
let _isLoading = $state(false);
let testPhone = $state('+17025001942');

async function runAPITest() {
  _isLoading = true;
  _testResults = null;

  try {
    const response = await fetch('/api/test/follow-up-boss');
    const data = await response.json();
    _testResults = data;
  } catch (error) {
    _testResults = {
      success: false,
      error: error.message,
      message: 'Failed to connect to test endpoint',
    };
  } finally {
    _isLoading = false;
  }
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
async function runCustomTest(testType) {
  _isLoading = true;

  try {
    const response = await fetch('/api/test/follow-up-boss', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        testType,
        phoneNumber: testPhone,
      }),
    });

    const data = await response.json();
    _testResults = data;
  } catch (error) {
    _testResults = {
      success: false,
      error: error.message,
      message: `Failed to run ${testType} test`,
    };
  } finally {
    _isLoading = false;
  }
}

onMount(() => {
  // Auto-run test on page load
  runAPITest();
});
</script>

<svelte:head>
  <title>Follow Up Boss API Test - Manzano Homes</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Follow Up Boss API Test</h1>
      
      <!-- Test Controls -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-4 mb-4">
          <button
            onclick={runAPITest}
            disabled={_isLoading}
            class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {_isLoading ? 'Testing...' : 'Test API Connection'}
          </button>

          <button
            onclick={() => runCustomTest('createLead')}
            disabled={_isLoading}
            class="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Test Create Lead
          </button>

          <button
            onclick={() => runCustomTest('searchLead')}
            disabled={_isLoading}
            class="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Test Search Lead
          </button>

          <button
            onclick={() => runCustomTest('sendSMS')}
            disabled={_isLoading}
            class="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Test Send SMS
          </button>
        </div>
        
        <div class="flex items-center gap-4">
          <label for="testPhone" class="text-sm font-medium text-gray-700">Test Phone Number:</label>
          <input
            id="testPhone"
            type="tel"
            bind:value={testPhone}
            class="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+17025001942"
          />
        </div>
      </div>
      
      <!-- Test Results -->
      {#if _testResults}
        <div class="border-t pt-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Test Results</h2>

          {#if _testResults.success}
            <div class="bg-green-50 border border-green-200 rounded-lg p-6">
              <div class="flex items-center mb-4">
                <svg class="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="text-lg font-medium text-green-900">✅ Test Passed</h3>
              </div>

              <p class="text-green-700 mb-4">{_testResults.message}</p>

              {#if _testResults.existingLead}
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-medium text-gray-900 mb-2">Existing Lead Found:</h4>
                  <pre class="text-sm text-gray-600 overflow-auto">{JSON.stringify(_testResults.existingLead, null, 2)}</pre>
                </div>
              {/if}

              {#if _testResults.newLead}
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-medium text-gray-900 mb-2">New Lead Created:</h4>
                  <pre class="text-sm text-gray-600 overflow-auto">{JSON.stringify(_testResults.newLead, null, 2)}</pre>
                </div>
              {/if}

              {#if _testResults.lead}
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-medium text-gray-900 mb-2">Lead Data:</h4>
                  <pre class="text-sm text-gray-600 overflow-auto">{JSON.stringify(_testResults.lead, null, 2)}</pre>
                </div>
              {/if}

              {#if _testResults.sms}
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-medium text-gray-900 mb-2">SMS Result:</h4>
                  <pre class="text-sm text-gray-600 overflow-auto">{JSON.stringify(_testResults.sms, null, 2)}</pre>
                </div>
              {/if}
            </div>
          {:else}
            <div class="bg-red-50 border border-red-200 rounded-lg p-6">
              <div class="flex items-center mb-4">
                <svg class="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <h3 class="text-lg font-medium text-red-900">❌ Test Failed</h3>
              </div>

              <p class="text-red-700 mb-4">{_testResults.message || _testResults.error}</p>

              {#if _testResults.details}
                <div class="bg-white rounded-lg p-4">
                  <h4 class="font-medium text-gray-900 mb-2">Error Details:</h4>
                  <pre class="text-sm text-gray-600 overflow-auto">{JSON.stringify(_testResults.details, null, 2)}</pre>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/if}
      
      <!-- Environment Variables Status -->
      <div class="border-t pt-8 mt-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Environment Variables Status</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="font-medium text-gray-900 mb-2">Follow Up Boss</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>API Key: {process.env.FOLLOW_UP_BOSS_API_KEY ? '✅ Set' : '❌ Missing'}</li>
              <li>Base URL: {process.env.FOLLOW_UP_BOSS_BASE_URL || 'Using default'}</li>
              <li>Agent ID: {process.env.FOLLOW_UP_BOSS_AGENT_ID || '❌ Missing'}</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <h3 class="font-medium text-gray-900 mb-2">SMS Configuration</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Phone Number: {process.env.SMS_PHONE_NUMBER || '❌ Missing'}</li>
              <li>Auto Reply: {process.env.SMS_AUTO_REPLY_ENABLED || '❌ Missing'}</li>
              <li>Message: {process.env.SMS_AUTO_REPLY_MESSAGE ? '✅ Set' : '❌ Missing'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

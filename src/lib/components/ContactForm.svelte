<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

// Form state - using let for proper Svelte binding
let formData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  propertyInterest: '',
  timeframe: '',
  budget: '',
  preferredContact: 'email', // email, phone, sms
};

let errors = /** @type {Record<string, string>} */ ({});
let _isSubmitting = false;
let _submitted = false;

// Form validation
function validateForm() {
  errors = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  }

  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return Object.keys(errors).length === 0;
}

// Handle form submission
// biome-ignore lint/correctness/noUnusedVariables: Used in template
async function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  _isSubmitting = true;

  try {
    // Submit to Follow Up Boss API
    const response = await fetch('/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const result = await response.json();
    console.log('Lead created in Follow Up Boss:', result);

    // Dispatch success event
    dispatch('submit', formData);

    // Reset form
    formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      propertyInterest: '',
      timeframe: '',
      budget: '',
      preferredContact: 'email',
    };

    _submitted = true;

    // Hide success message after 5 seconds
    setTimeout(() => {
      _submitted = false;
    }, 5000);
  } catch (error) {
    console.error('Form submission error:', error);
    errors.submit = 'There was an error submitting your message. Please try again.';
  } finally {
    _isSubmitting = false;
  }
}

// Clear error when user starts typing
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function clearError(/** @type {string} */ field) {
  if (errors[field]) {
    const newErrors = { ...errors };
    delete newErrors[field];
    errors = newErrors;
  }
}
</script>

<div class="max-w-2xl mx-auto">
  {#if submitted}
    <div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
      <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
      <p class="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
    </div>
  {:else}
    <form onsubmit={(e) => { e.preventDefault(); handleSubmit(e); }} class="space-y-6">
      <!-- Personal Information -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            bind:value={formData.name}
            oninput={() => clearError('name')}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.name ? 'border-red-500' : ''}"
            placeholder="Enter your full name"
            required
          />
          {#if errors.name}
            <p class="mt-1 text-sm text-red-600">{errors.name}</p>
          {/if}
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            bind:value={formData.email}
            oninput={() => clearError('email')}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.email ? 'border-red-500' : ''}"
            placeholder="your@email.com"
            required
          />
          {#if errors.email}
            <p class="mt-1 text-sm text-red-600">{errors.email}</p>
          {/if}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            bind:value={formData.phone}
            oninput={() => clearError('phone')}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.phone ? 'border-red-500' : ''}"
            placeholder="(702) 500-1942"
            required
          />
          {#if errors.phone}
            <p class="mt-1 text-sm text-red-600">{errors.phone}</p>
          {/if}
        </div>

        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            bind:value={formData.subject}
            onchange={() => clearError('subject')}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.subject ? 'border-red-500' : ''}"
            required
          >
            <option value="">Select a subject</option>
            <option value="buying">I'm interested in buying a home</option>
            <option value="selling">I want to sell my home</option>
            <option value="valuation">I need a home valuation</option>
            <option value="neighborhood">I have questions about the neighborhood</option>
            <option value="general">General inquiry</option>
            <option value="other">Other</option>
          </select>
          {#if errors.subject}
            <p class="mt-1 text-sm text-red-600">{errors.subject}</p>
          {/if}
        </div>
      </div>

      <!-- Property Interest (optional) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="propertyInterest" class="block text-sm font-medium text-gray-700 mb-2">
            Property Type Interest
          </label>
          <select
            id="propertyInterest"
            bind:value={formData.propertyInterest}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select property type</option>
            <option value="single-family">Single Family Home</option>
            <option value="condo">Condominium</option>
            <option value="townhouse">Townhouse</option>
            <option value="luxury">Luxury Home</option>
            <option value="investment">Investment Property</option>
          </select>
        </div>

        <div>
          <label for="timeframe" class="block text-sm font-medium text-gray-700 mb-2">
            Timeframe
          </label>
          <select
            id="timeframe"
            bind:value={formData.timeframe}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select timeframe</option>
            <option value="immediately">Immediately</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="1-year-plus">1+ years</option>
            <option value="just-looking">Just looking</option>
          </select>
        </div>
      </div>

      <!-- Budget Range (optional) -->
      <div>
        <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          bind:value={formData.budget}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">Select budget range</option>
          <option value="under-300k">Under $300,000</option>
          <option value="300k-500k">$300,000 - $500,000</option>
          <option value="500k-750k">$500,000 - $750,000</option>
          <option value="750k-1m">$750,000 - $1,000,000</option>
          <option value="1m-plus">$1,000,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <!-- Preferred Contact Method -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">
          How would you like us to contact you? *
        </label>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 {formData.preferredContact === 'email' ? 'border-primary-500 bg-primary-50' : ''}">
            <input
              type="radio"
              bind:group={formData.preferredContact}
              value="email"
              class="mr-3 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <div class="font-medium text-gray-900">Email</div>
              <div class="text-sm text-gray-500">Detailed responses</div>
            </div>
          </label>
          
          <label class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 {formData.preferredContact === 'phone' ? 'border-primary-500 bg-primary-50' : ''}">
            <input
              type="radio"
              bind:group={formData.preferredContact}
              value="phone"
              class="mr-3 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <div class="font-medium text-gray-900">Phone Call</div>
              <div class="text-sm text-gray-500">Personal consultation</div>
            </div>
          </label>
          
          <label class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 {formData.preferredContact === 'sms' ? 'border-primary-500 bg-primary-50' : ''}">
            <input
              type="radio"
              bind:group={formData.preferredContact}
              value="sms"
              class="mr-3 text-primary-600 focus:ring-primary-500"
            />
            <div>
              <div class="font-medium text-gray-900">Text Message</div>
              <div class="text-sm text-gray-500">Quick updates</div>
            </div>
          </label>
        </div>
      </div>

      <!-- SMS Quick Contact -->
      {#if formData.preferredContact === 'sms'}
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <div>
              <p class="text-sm font-medium text-blue-900">Prefer texting?</p>
              <p class="text-sm text-blue-700">You can also text us directly at <a href="sms:+17025001942" class="font-medium underline">(702) 500-1942</a></p>
            </div>
          </div>
        </div>
      {/if}

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          bind:value={formData.message}
          oninput={() => clearError('message')}
          rows="5"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.message ? 'border-red-500' : ''}"
          placeholder="Tell us more about your real estate needs..."
          required
        ></textarea>
        {#if errors.message}
          <p class="mt-1 text-sm text-red-600">{errors.message}</p>
        {/if}
        <p class="mt-1 text-sm text-gray-500">
          {formData.message.length}/500 characters
        </p>
      </div>

      <!-- Submit Error -->
      {#if errors.submit}
        <div class="bg-red-50 border border-red-200 rounded-md p-4">
          <p class="text-sm text-red-600">{errors.submit}</p>
        </div>
      {/if}

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          class="px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {#if isSubmitting}
            <div class="flex items-center space-x-2">
              <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Sending...</span>
            </div>
          {:else}
            Send Message
          {/if}
        </button>
      </div>
    </form>
  {/if}
</div>

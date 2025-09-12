/**
 * Accessibility utilities for real estate website
 * Provides comprehensive accessibility features and helpers
 */

/**
 * Focus management utilities
 */
export class FocusManager {
  /** @type {HTMLElement[]} */
  focusHistory;

  /** @type {Array<{container: HTMLElement, handleKeyDown: (e: KeyboardEvent) => void}>} */
  trapStack;

  constructor() {
    this.focusHistory = [];
    this.trapStack = [];
  }

  /**
   * Save current focus for later restoration
   */
  saveFocus() {
    const activeElement = document.activeElement;
    if (activeElement && activeElement !== document.body && activeElement instanceof HTMLElement) {
      this.focusHistory.push(activeElement);
    }
  }

  /**
   * Restore previously saved focus
   */
  restoreFocus() {
    const element = this.focusHistory.pop();
    if (element?.focus) {
      element.focus();
    }
  }

  /**
   * Focus first focusable element in container
   * @param {HTMLElement} container - Container to search within
   * @returns {boolean} Whether focus was set
   */
  focusFirst(container) {
    const focusable = this.getFocusableElements(container);
    if (focusable.length > 0) {
      focusable[0].focus();
      return true;
    }
    return false;
  }

  /**
   * Focus last focusable element in container
   * @param {HTMLElement} container - Container to search within
   * @returns {boolean} Whether focus was set
   */
  focusLast(container) {
    const focusable = this.getFocusableElements(container);
    if (focusable.length > 0) {
      focusable[focusable.length - 1].focus();
      return true;
    }
    return false;
  }

  /**
   * Get all focusable elements in container
   * @param {HTMLElement} container - Container to search within
   * @returns {HTMLElement[]} Array of focusable elements
   */
  getFocusableElements(container) {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ];

    return Array.from(container.querySelectorAll(focusableSelectors.join(', ')));
  }

  /**
   * Trap focus within a container
   * @param {HTMLElement} container - Container to trap focus within
   */
  trapFocus(container) {
    const focusable = this.getFocusableElements(container);
    if (focusable.length === 0) return;

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    const handleKeyDown = (/** @type {KeyboardEvent} */ e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    this.trapStack.push({ container, handleKeyDown });

    // Focus first element
    firstElement.focus();
  }

  /**
   * Remove focus trap
   * @param {HTMLElement} container - Container to remove trap from
   */
  removeFocusTrap(container) {
    const trap = this.trapStack.find((t) => t.container === container);
    if (trap) {
      container.removeEventListener('keydown', trap.handleKeyDown);
      this.trapStack = this.trapStack.filter((t) => t.container !== container);
    }
  }

  /**
   * Remove all focus traps
   */
  removeAllFocusTraps() {
    this.trapStack.forEach((trap) => {
      trap.container.removeEventListener('keydown', trap.handleKeyDown);
    });
    this.trapStack = [];
  }
}

// Create singleton instance
export const focusManager = new FocusManager();

/**
 * ARIA utilities
 */
export const ARIA = {
  /**
   * Set ARIA label for element
   * @param {HTMLElement} element - Element to label
   * @param {string} label - Label text
   */
  setLabel(element, label) {
    element.setAttribute('aria-label', label);
  },

  /**
   * Set ARIA described by for element
   * @param {HTMLElement} element - Element to describe
   * @param {string} description - Description text
   */
  setDescribedBy(element, description) {
    const id = `desc-${Math.random().toString(36).substr(2, 9)}`;
    const descElement = document.createElement('div');
    descElement.id = id;
    descElement.className = 'sr-only';
    descElement.textContent = description;
    if (element.parentNode) {
      element.parentNode.insertBefore(descElement, element.nextSibling);
    }
    element.setAttribute('aria-describedby', id);
  },

  /**
   * Set ARIA expanded state
   * @param {HTMLElement} element - Element to set state for
   * @param {boolean} expanded - Whether element is expanded
   */
  setExpanded(element, expanded) {
    element.setAttribute('aria-expanded', expanded.toString());
  },

  /**
   * Set ARIA selected state
   * @param {HTMLElement} element - Element to set state for
   * @param {boolean} selected - Whether element is selected
   */
  setSelected(element, selected) {
    element.setAttribute('aria-selected', selected.toString());
  },

  /**
   * Set ARIA hidden state
   * @param {HTMLElement} element - Element to set state for
   * @param {boolean} hidden - Whether element is hidden
   */
  setHidden(element, hidden) {
    element.setAttribute('aria-hidden', hidden.toString());
  },

  /**
   * Set ARIA live region
   * @param {HTMLElement} element - Element to set as live region
   * @param {string} politeness - Politeness level (polite, assertive, off)
   */
  setLiveRegion(element, politeness = 'polite') {
    element.setAttribute('aria-live', politeness);
    element.setAttribute('aria-atomic', 'true');
  },

  /**
   * Announce message to screen readers
   * @param {string} message - Message to announce
   * @param {string} politeness - Politeness level
   */
  announce(message, politeness = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', politeness);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
};

/**
 * Keyboard navigation utilities
 */
export const Keyboard = {
  /**
   * Handle escape key
   * @param {KeyboardEvent} event - Keyboard event
   * @param {Function} callback - Callback to execute on escape
   */
  handleEscape(event, callback) {
    if (event.key === 'Escape') {
      callback();
    }
  },

  /**
   * Handle enter key
   * @param {KeyboardEvent} event - Keyboard event
   * @param {Function} callback - Callback to execute on enter
   */
  handleEnter(event, callback) {
    if (event.key === 'Enter') {
      callback();
    }
  },

  /**
   * Handle space key
   * @param {KeyboardEvent} event - Keyboard event
   * @param {Function} callback - Callback to execute on space
   */
  handleSpace(event, callback) {
    if (event.key === ' ') {
      event.preventDefault();
      callback();
    }
  },

  /**
   * Handle arrow keys
   * @param {KeyboardEvent} event - Keyboard event
   * @param {{up?: () => void, down?: () => void, left?: () => void, right?: () => void}} callbacks - Callbacks for each direction
   */
  handleArrows(event, callbacks) {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        callbacks.up?.();
        break;
      case 'ArrowDown':
        event.preventDefault();
        callbacks.down?.();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        callbacks.left?.();
        break;
      case 'ArrowRight':
        event.preventDefault();
        callbacks.right?.();
        break;
    }
  },
};

/**
 * Form accessibility utilities
 */
export const FormAccessibility = {
  /**
   * Add error message to form field
   * @param {HTMLElement} field - Form field element
   * @param {string} message - Error message
   */
  addError(field, message) {
    const errorId = `error-${Math.random().toString(36).substr(2, 9)}`;
    const errorElement = document.createElement('div');
    errorElement.id = errorId;
    errorElement.className = 'text-red-600 text-sm mt-1';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');

    if (field.parentNode) {
      field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errorId);
  },

  /**
   * Remove error message from form field
   * @param {HTMLElement} field - Form field element
   */
  removeError(field) {
    const errorId = field.getAttribute('aria-describedby');
    if (errorId) {
      const errorElement = document.getElementById(errorId);
      if (errorElement) {
        errorElement.remove();
      }
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
    }
  },

  /**
   * Validate form field
   * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} field - Form field element
   * @param {Function} validator - Validation function
   * @returns {boolean} Whether field is valid
   */
  validateField(field, validator) {
    const isValid = validator(field.value);

    if (isValid) {
      this.removeError(field);
    } else {
      this.addError(field, 'This field is required');
    }

    return isValid;
  },
};

/**
 * Real estate specific accessibility utilities
 */
export const RealEstateAccessibility = {
  /**
   * Announce property search results
   * @param {number} count - Number of results
   */
  announceSearchResults(count) {
    const message =
      count === 0
        ? 'No properties found matching your criteria'
        : `Found ${count} propert${count === 1 ? 'y' : 'ies'} matching your criteria`;

    ARIA.announce(message, 'polite');
  },

  /**
   * Announce property details loaded
   * @param {string} propertyName - Name of the property
   */
  announcePropertyDetails(propertyName) {
    ARIA.announce(`Property details loaded for ${propertyName}`, 'polite');
  },

  /**
   * Announce form submission
   * @param {boolean} success - Whether submission was successful
   */
  announceFormSubmission(success) {
    const message = success
      ? 'Form submitted successfully'
      : 'Form submission failed. Please check your inputs and try again';

    ARIA.announce(message, success ? 'polite' : 'assertive');
  },

  /**
   * Announce price change
   * @param {string} oldPrice - Previous price
   * @param {string} newPrice - New price
   */
  announcePriceChange(oldPrice, newPrice) {
    ARIA.announce(`Price updated from ${oldPrice} to ${newPrice}`, 'polite');
  },

  /**
   * Announce filter change
   * @param {string} filterName - Name of the filter
   * @param {string} filterValue - New filter value
   */
  announceFilterChange(filterName, filterValue) {
    ARIA.announce(`${filterName} filter set to ${filterValue}`, 'polite');
  },
};

/**
 * Initialize accessibility features
 */
export function initAccessibility() {
  // Add keyboard navigation to all interactive elements
  document.addEventListener('keydown', (event) => {
    // Handle skip links
    if (event.key === 'Tab' && event.shiftKey === false) {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (
        skipLink &&
        document.activeElement === skipLink &&
        skipLink instanceof HTMLAnchorElement
      ) {
        skipLink.click();
      }
    }
  });

  // Add focus indicators
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });

  // Add reduced motion support
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--animation-iteration-count', '1');
  }
}

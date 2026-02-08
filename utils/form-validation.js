// Form validation script with enhanced feedback and success handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const container = document.querySelector('.container');

    // Validation rules
    const validators = {
        name: (value) => value.trim().length >= 2 ? '' : 'Name must be at least 2 characters long.',
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.',
        age: (value) => {
            const age = parseInt(value);
            return age >= 1 && age <= 120 ? '' : 'Age must be between 1 and 120.';
        },
        mobile: (value) => /^\d{10}$/.test(value.replace(/\D/g, '')) ? '' : 'Please enter a valid 10-digit mobile number.',
        gender: (value) => value ? '' : 'Please select your gender.'
    };

    // Validate individual field
    function validateField(input) {
        const value = input.value.trim();
        const errorMessage = validators[input.name] ? validators[input.name](value) : '';
        const errorElement = input.parentNode.querySelector('.error-message');

        if (errorMessage) {
            input.classList.add('error');
            if (!errorElement) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = errorMessage;
                input.parentNode.appendChild(errorDiv);
            }
            return false;
        } else {
            input.classList.remove('error');
            if (errorElement) {
                errorElement.remove();
            }
            return true;
        }
    }

    // Validate all fields
    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], input[name="gender"]:checked');

        // Handle radio buttons separately
        const genderRadios = form.querySelectorAll('input[name="gender"]');
        const genderSelected = Array.from(genderRadios).some(radio => radio.checked);
        if (!genderSelected) {
            isValid = false;
            const genderFieldset = form.querySelector('fieldset:has(input[name="gender"])');
            if (!genderFieldset.querySelector('.error-message')) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = 'Please select your gender.';
                genderFieldset.appendChild(errorDiv);
            }
        } else {
            const existingError = form.querySelector('fieldset:has(input[name="gender"]) .error-message');
            if (existingError) existingError.remove();
        }

        inputs.forEach(input => {
            if (input.type !== 'radio' || input.checked) {
                if (!validateField(input)) {
                    isValid = false;
                }
            }
        });

        return isValid;
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission success
            container.innerHTML = `
                <div class="success-message">
                    <h2>Thank you for your submission!</h2>
                    <p>Your survey has been successfully submitted. We appreciate your feedback.</p>
                    <button onclick="location.reload()">Submit Another Response</button>
                </div>
            `;
        }
    });

    // Real-time validation
    form.addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT') {
            validateField(e.target);
        }
    });

    // Handle radio button changes
    form.addEventListener('change', function(e) {
        if (e.target.name === 'gender') {
            const genderFieldset = e.target.closest('fieldset');
            const errorElement = genderFieldset.querySelector('.error-message');
            if (errorElement) errorElement.remove();
        }
    });
});

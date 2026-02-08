# Hospital Survey Form

A modern web application for collecting hospital survey data with comprehensive form validation and user-friendly interface.

## 📋 Overview

This project is a comprehensive hospital survey form that collects patient information including personal details, contact information, and medical data. The application features a clean, professional design with robust form validation and a fixed-width layout.

## ✨ Features

- **Form Validation**: Comprehensive validation for name, email, age, mobile number, and required fields
- **Real-time Feedback**: Instant error messages for invalid inputs
- **Success Confirmation**: Confirmation message upon successful form submission
- **Modern UI**: Gradient backgrounds, smooth animations, and professional styling
- **Accessibility**: Proper semantic HTML, labels, and keyboard navigation
- **Cross-browser Compatibility**: Works across modern web browsers

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern features (Flexbox, Animations)
- **Validation**: Vanilla JavaScript with regex patterns

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository** (if applicable) or download the project files
2. **Navigate to the project directory**
3. **Open `index.html` in your web browser**

## 📱 Usage

1. Open the application in a web browser
2. Fill in all required fields:
   - Name (minimum 2 characters)
   - Email (valid email format)
   - Age (between 1 and 120)
   - Mobile Number (10-digit number)
   - Gender (select one option)
   - Blood Group (select applicable groups)
3. Receive real-time validation feedback
4. Submit the form to see success confirmation
5. Use the "Submit Another Response" button to reset the form

## 📁 Project Structure

```
hospital-survey-form/
│
├── index.html                 # Main entry point
├── README.md                  # Project documentation
├── TODO.md                    # Development tasks and progress
│
├── pages/
│   └── index.html            # Alternative page structure
│
├── styles/
│   └── styles.css            # Main stylesheet
│
├── utils/
│   └── form-validation.js    # Form validation logic
│
└── assets/                   # Static assets (if any)
```

## 🔧 Key Components

### Form Fields
- **Name**: Text input with minimum length validation
- **Email**: Email input with format validation
- **Age**: Number input with range validation (1-120)
- **Mobile Number**: Telephone input with 10-digit validation
- **Gender**: Radio button selection (Male, Female, Other)
- **Blood Group**: Checkbox selection (A, B, AB, O)

### Validation Rules
- Name: Minimum 2 characters
- Email: Valid email format (user@domain.com)
- Age: Between 1 and 120 years
- Mobile: 10-digit number (removes non-numeric characters)
- Gender: At least one option selected

## 🎯 Development

### File Structure
- `index.html`: Main HTML structure
- `styles/styles.css`: All styling and layout
- `utils/form-validation.js`: Form validation logic

### Customization
- Modify `styles/styles.css` to change appearance
- Update validation rules in `utils/form-validation.js`
- Add new fields by editing `index.html` and corresponding files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or feedback, please open an issue in the repository.

---

**Note**: This is a static web application that can be hosted on any web server or opened directly in a browser.

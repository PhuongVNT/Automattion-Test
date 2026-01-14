# Playwright Automation Testing 🚀

This repository demonstrates my hands-on experience in **UI and API automation testing**
using **Playwright with JavaScript**, following real-world testing practices.

---

## 🧰 Tech Stack

- **Playwright**
- **JavaScript (ES6+)**
- **Page Object Model (POM)**
- **API Testing**
- **GitHub Actions (CI/CD)**
- **HTML Test Reports**

---

## 🧪 Test Coverage

### ✅ UI Automation
- Login functionality
- Data-driven tests
- Page Object Model structure
- Assertions using Playwright `expect`

### ✅ API Automation
- GET API tests
- Status code validation
- Response body validation

### ✅ Test Strategy
- Focus on stable and maintainable tests
- UI tests for user flows
- API tests for backend validation

---

## 📁 Project Structure

├── pages/ # Page Object Models
├── tests/
│ ├── ui/ # UI test cases
│ ├── api/ # API test cases
│ └── data/ # Test data
├── playwright.config.js
├── .github/workflows/ # CI configuration
└── README.md


---

## ▶️ How to Run Tests Locally

### 1️⃣ Install dependencies
```bash
npm install

2️⃣ Run all tests
npx playwright test

3️⃣ Open HTML report
npx playwright show-report

🔁 CI/CD with GitHub Actions

Tests run automatically on every push

Playwright generates:

📊 HTML reports

📸 Screenshots on failure

📼 Videos on failure

Test artifacts are available in the Actions tab

🎯 Purpose of This Project

This project is built as a professional automation testing portfolio to demonstrate:

Automation testing fundamentals

Playwright framework usage

CI/CD integration

Testing mindset aligned with ISTQB principles

👤 Author

Phuong
Automation Tester / SDET (Junior)

📎 Notes

Public demo APIs are used for learning purposes

Some public APIs may block automation due to security protections
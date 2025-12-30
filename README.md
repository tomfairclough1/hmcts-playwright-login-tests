# HMCTS – Login Test Automation Framework (Playwright + TypeScript)

## Overview

This repository contains a simple and scalable **test automation framework** built using **Playwright with TypeScript**.  
The framework automates the **login functionality** of a web application and demonstrates best practices in:

- Test automation design
- Web application testing
- Page Object Model
- Logging and reporting
- Version control and maintainability

The solution is intentionally lightweight while remaining extensible for larger test suites.

---

## Technology Stack

- **Language:** TypeScript  
- **Test Framework:** Playwright Test  
- **Browser:** Chromium  
- **Design Pattern:** Page Object Model (POM)  
- **Reporting:** Playwright HTML Report  

---

## Application Under Test

The tests target the login functionality of the following public test application:

https://www.saucedemo.com/

This application was chosen because it provides a stable login flow suitable for demonstrating both positive and negative test scenarios.

---

## Project Structure
```
hmcts-playwright-login-tests/
├── tests/              # Test specifications
├── pages/              # Page Object classes
├── utils/              # Test data and shared utilities
├── playwright.config.ts # Playwright configuration
├── package.json        # Project dependencies and scripts
└── README.md
```
---

## Test Coverage

The framework includes automated tests for:

- Successful login with valid credentials  
- Unsuccessful login with invalid credentials  

Assertions validate:
- Navigation behaviour after login
- Error messages displayed on failure

---

## Prerequisites

Ensure the following are installed locally:

- Node.js (v18 or later recommended)
- npm

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone <repository-url>
cd hmcts-playwright-login-tests
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

## Running the Tests

### Run all tests in headless mode
```bash
npm test
```

### Run tests in headed mode
```bash
npm run test:headed
```

### View the HTML test report
```bash
npm run test:report
```


## Design Decisions

- Playwright: Reliability, built-in waits, and modern web testing capabilities.

- Page Object Model: Separate test logic from UI interactions, improving maintainability.

- Centralised test data allows easy extension of test scenarios.

- Minimal dependencies reduce maintenance overhead.

- Built-in reporting, screenshots, and tracing assist with debugging.

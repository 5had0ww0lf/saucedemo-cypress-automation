# 🚀 Saucedemo E2E Automation Framework

[![Cypress E2E Tests](https://github.com/5had0ww0lf/saucedemo-cypress-automation/actions/workflows/cypress.yml/badge.svg)](https://github.com/5had0ww0lf/saucedemo-cypress-automation/actions/workflows/cypress.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)
![Cypress](https://img.shields.io/badge/Cypress-v13+-green.svg)

Automated End-to-End (E2E) test suite developed for the **Saucedemo** application, built with **Cypress** and **TypeScript**. This project serves as a modern portfolio piece demonstrating robust quality engineering practices, static typing, and scalable test architecture.

## 🛠️ Tech Stack & Tools

* **Automation Tool:** [Cypress](https://www.cypress.io/)
* **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
* **Design Pattern:** Page Object Model (POM)
* **CI/CD Pipeline:** GitHub Actions
* **Test Management / Data:** JSON Fixtures & Typed Interfaces

## 📂 Project Structure

```text
saucedemo-cypress-automation/
├── .github/
│   └── workflows/
│       └── cypress.yml      # CI/CD Pipeline configuration (GitHub Actions)
├── cypress/
│   ├── e2e/
│   │   ├── cart.cy.ts       # Cart state management and item removal specs
│   │   ├── checkout.cy.ts   # Checkout form validations and math calculations
│   │   ├── inventory.cy.ts  # Inventory display, sorting and badge validation
│   │   ├── login.cy.ts      # Authentication, negative flows and logout specs
│   │   └── purchase.cy.ts   # E2E shopping happy path specs
│   ├── pages/
│   │   ├── cartPage.ts      # Cart Page Object
│   │   ├── checkoutPage.ts  # Checkout Page Object (with partial types support)
│   │   ├── inventoryPage.ts # Inventory Page Object
│   │   └── loginPage.ts     # Login Page Object
│   └── support/
│       ├── commands.ts      # Custom Cypress commands & global definitions
│       ├── e2e.ts           # Global configuration and imports
│       ├── types.ts         # TypeScript interfaces and global type definitions
│       └── users.ts         # Centralized test data payloads and user credentials
├── cypress.config.ts        # Cypress configuration file
├── tsconfig.json            # TypeScript compiler configuration
└── package.json             # Project dependencies and scripts
```

## 🎯 Architecture & Best Practices Highlights
* **Static Typing**: Full TypeScript integration providing strict typing for test data, credentials, and custom commands.

* **Page Object Model (POM)**: Separation of test logic from page locators and actions, ensuring high maintainability.

* **Encapsulation**: Private locators inside Page classes to protect UI modifications from breaking test implementation.

*  **Modular Spec Design**: Separation of concerns across independent spec files (login, inventory, cart, checkout, and purchase).

* **Automated CI/CD**: Integrated with GitHub Actions to run test suites automatically on every push or pull request using Node.js v22.

## ⚙️ Getting Started (Local Setup)

##### Prerequisites
Make sure you have Node.js (v22+ recommended) and npm installed on your machine.

### Installation
1. Clone the repository:

```bash
git clone https://github.com/5had0ww0lf/saucedemo-cypress-automation.git
cd saucedemo-cypress-automation
```

2. Install dependencies:

```bash
npm install
```

## 🏃‍♂️ Running the Tests

You can run the tests in different modes depending on your needs:

* **Open Cypress Test Runner (Interactive Mode):**

```bash
npx cypress open
```

* **Run Tests Headless (CLI Mode - Chrome):**

```bash
npx cypress run --browser chrome
```

* **Run Tests Headless (CLI Mode - Chrome):**

```bash
npx cypress run 
```

## 🤖 CI/CD Pipeline

The framework uses GitHub Actions to execute automated tests on a clean Ubuntu environment (ubuntu-latest) using Chrome. You can inspect past workflow runs under the Actions tab of this repository.

## 👤 Author
Lucas Nascimento

* [LinkedIn](https://www.linkedin.com/in/lucas-nasc/)
* [GitHub](https://github.com/5had0ww0lf/)

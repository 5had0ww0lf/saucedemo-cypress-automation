# SauceDemo Cypress Automation

Small automation project built using Cypress and Page Object Model (POM) for the SauceDemo application.

## Automated Scenarios

- Successful login
- Invalid login validation
- Locked user validation
- Add product to cart
- Remove product from cart
- Complete checkout flow

## Tech Stack

- Cypress
- JavaScript
- Page Object Model (POM)

## Setup

Clone the repository:

```bash
git clone https://github.com/5had0ww0lf/saucedemo-cypress-automation.git
```

Install dependencies:

```bash
npm install
```

Run Cypress UI:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

## Notes

- The project was kept simple and focused on readability and maintainability.
- POM structure was used to improve organization and reusability.
- Test data is centralized in fixture files.
- The focus was covering the main user flows instead of creating extensive test coverage.
- Assertions were added to keep tests stable and easy to understand.
# Playwright Automation Test Project

## Description
This project demonstrates automation testing using **Playwright with JavaScript**.
It follows **Page Object Model (POM)** and **Data-driven testing** approach.

## Tech Stack
- Playwright
- JavaScript (Node.js)
- HTML Reporter

## Project Structure
    pages/ # Page Objects
    tests/ # Test cases
    tests/data/ # Test data


## Test Scenarios
- Login successfully
- Login with wrong password
- Login with wrong username

## How to Run Tests
```bash
npm install
npx playwright test

## Tests Report
npx playwright show-report

- HTML report includes:
- Test results (PASS / FAIL)
- Screenshot on failure
- Video recording on failure
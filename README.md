# 🧪 Playwright TypeScript Automation Project

This project is built using **Playwright** with **TypeScript** for end-to-end testing, and uses **ExcelJS** for handling Excel files.

---

## 🚀 Setup Project

### 1. Initialize Playwright

Run the following command:

```bash
npm init playwright@latest
```

Follow the setup instructions:

* Choose **TypeScript**
* Select browsers (Chromium, Firefox, WebKit)
* Install dependencies

---

### 2. Install additional package

```bash
npm install exceljs
```

---

## 📁 Project Structure

```
.
├── tests/              # Test files
├── playwright.config.ts
├── package.json
└── README.md
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run in headed mode (see browser)

```bash
npx playwright test --headed
```

### Run specific test file

```bash
npx playwright test tests/example.spec.ts
```

---

## 📊 Using ExcelJS

Example usage:

```ts
import ExcelJS from 'exceljs';

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('data.xlsx');

const sheet = workbook.getWorksheet(1);
sheet.eachRow((row, rowNumber) => {
  console.log(rowNumber, row.values);
});
```

---

## 🧰 Useful Commands

```bash
# Open Playwright UI mode
npx playwright test --ui

# Show report
npx playwright show-report
```

---

## 📌 Notes

* Make sure Node.js is installed
* Recommended Node version: >= 18
* Install browsers if not already:

```bash
npx playwright install
```

---

## 👨‍💻 Author

Your Name

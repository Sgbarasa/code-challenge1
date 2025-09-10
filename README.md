# JavaScript Code Challenge — Student Grade Generator (Challenge 1)

## Description
I implemented `studentGrade(marks)` to validate a numeric mark (0–100) and return the correct letter grade. I used `number` for strict input validation.

## How I approached & solved it (step-by-step)

### 1. The Problem: Map Numeric Marks to Grades

The core task was to map a given numerical score to its corresponding letter grade based on the following scale:
* **A:** > 79
* **B:** 60–79
* **C:** 50–59
* **D:** 40–49
* **E:** < 40

---

### 2. Input Validation (First Priority)

Before any grading logic, the function first checks if the input is a valid number and within the appropriate range (0-100).

The validation check is:
`typeof marks !== "number" || marks < 0 || marks > 100`

If the input fails this check, the function returns the following error message:
`Invalid input. Please enter a valid grade between 0 and 100`

**Rationale:** This strict validation ensures the function only processes numeric inputs, as required by the challenge, and rejects string inputs like `"80"`.

---

### 3. Grading Logic

An `if / else if` ladder was used to determine the correct grade. The checks proceed from the highest grade to the lowest to ensure correctness.

1.  **marks > 79** → `"Grade: A"`
2.  **marks >= 60** → `"Grade: B"`
3.  **marks >= 50** → `"Grade: C"`
4.  **marks >= 40** → `"Grade: D"`
5.  **else** → `"Grade: E"`

---

### 4. Return Values

The function returns the exact strings for either the calculated grade or the invalid input message, ensuring the output matches the project's requirements.

---

### 5. Variables Used

* **`marks`**: The single numeric input. This variable is used for both validation and determining the correct grade bracket. No other variables were required.

---

### 6. Edge Cases & Expected Outputs

The primary edge case handled is invalid input:
* **Non-number or out-of-range input**: The function returns the specific error message `Invalid input. Please enter a valid grade between 0 and 100`.

``` javascript

Invalid samples
studentGrade(110)      // "Invalid input. Please enter a valid grade between 0 and 100"
studentGrade("John")   // "Invalid input. Please enter a valid grade between 0 and 100"

Valid samples:

studentGrade(93)  // "Grade: A"
studentGrade(37)  // "Grade: E"

```
---

# Challenge 2: Speed Detector

## Description
I implemented `speedDetector(speed)` to check if a driver is within the legal speed limit and, if not, calculate demerit points. If the points exceed 12, the license is suspended.

---

## How I approached & solved it

* **Problem — check if speed ≤ 70:**
    * If yes → `"Ok"`
    * Else → calculate points for every 5 km/h over 70.
    * If points > 12 → `"License suspended"`

* **Input validation (first) — ensure speed is a valid number:**
    * Convert input with `Number(speed)`.
    * If `isNaN(speed)` or `speed < 0` → return `"Invalid input. Please enter a valid speed."`

* **Calculation:**
    * Use `Math.floor((speed - 70) / 5)` to count whole points only.
    * Use a ternary operator to decide between `"License suspended"` or `"Points: X"`.

* **Variables used:**
    * `speed` — input, converted to a number.
    * `speedLimit = 70` — legal speed limit.
    * `kmPerDemerit = 5` — interval for each demerit point.
    * `points` — computed demerit points after flooring.

---

## Edge cases & exact expected outputs

```javascript
speedDetector(65)      // "Ok"
speedDetector(80)      // "Points: 2"
speedDetector(135)     // "License suspended"
speedDetector("90")    // "Points: 4"
speedDetector(-5)      // "Invalid input. Please enter a valid speed." 

```
---

# Challenge 3: Net Salary Calculator

## Description
I implemented `netSalaryCalculator(basicSalary, benefits)` to compute an individual’s **gross salary**, **PAYE (tax)**, **SHIF**, **NSSF**, and **net salary** based on KRA tax bands and statutory rates.

---

## How I approached & solved it

* **Problem — compute:**
    * Gross salary = `basic + benefits`
    * PAYE using KRA tax bands + apply personal relief (KES 2400)
    * SHIF = `2.75% of gross salary` (minimum 300)
    * NSSF = `6% Tier 1 + Tier 2` up to 72,000
    * Net salary = `gross - (PAYE + SHIF + NSSF)`

* **Input validation (first) — convert inputs with `Number(...)` and check:**
    * `isNaN(basicSalary)` / `isNaN(benefits)` or negative values → `"Invalid input. Enter non-negative numbers."`

* **Calculation:**
    * Used `if / else if` ladder for PAYE brackets.
    * Applied `Math.max(0, paye - personalRelief)` so PAYE never goes below 0.
    * Used `Math.min(...)` to cap NSSF Tier 2 at 72,000.
    * Rounded all amounts with `Math.round()` before returning.

* **Variables used (very brief):**
    * `basicSalary`, `benefits` — inputs.
    * `grossSalary` — sum of basic + benefits.
    * `paye` — PAYE tax after applying relief.
    * `shif` — health levy (min 300).
    * `nssf` — pension deduction (tiered).
    * `netSalary` — final take-home pay.

---

## Edge cases & exact expected output

```javascript
netSalaryCalculator(50000, 5000)
/* returns:
{
  basicSalary: 50000,
  benefits: 5000,
  grossSalary: 55000,
  paye: 8883,
  shif: 1513,
  nssf: 3300,
  netSalary: 41304
}
*/

netSalaryCalculator(-1000, 2000)
// "Invalid input. Enter non-negative numbers."

```

# Author & License

* Author: Stanley Barasa Gitau

* License: MIT
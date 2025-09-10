# JavaScript Code Challenge — Student Grade Generator (Challenge 1)

## Description
I implemented `studentGrade(marks)` to validate a numeric mark (0–100) and return the correct letter grade. Strict input validation is enforced (must be a `number`).

## How I approached & solved it (step-by-step)
Problem — map numeric marks to grades:

A: > 79

B: 60–79

C: 50–59

D: 40–49

E: < 40

- Input validation (first) — check that marks is a number and within range:

typeof marks !== "number" || marks < 0 || marks > 100 → return
Invalid input. Please enter a valid grade between 0 and 100

- Rationale: the challenge expects strict numeric input (no "80" strings).

Grading logic — used an if / else if ladder from highest to lowest:

marks > 79 → "Grade: A"

marks >= 60 → "Grade: B"

marks >= 50 → "Grade: C"

marks >= 40 → "Grade: D"

else → "Grade: E"

Return values — function returns the exact strings used for grading or the exact invalid-input message.

Variables used (very brief)
marks — the single input (number). Used for validation and to pick the grade bracket. No other variables required.

Edge cases & exact expected outputs

Non-number or out-of-range:

studentGrade(110)      // "Invalid input. Please enter a valid grade between 0 and 100"
studentGrade("John")   // "Invalid input. Please enter a valid grade between 0 and 100"
Valid samples:

studentGrade(93)  // "Grade: A"
studentGrade(37)  // "Grade: E"

(Challenge 2)

## Description
I implemented `speedDetector(speed)` to check if a driver is within the legal speed limit and, if not, calculate demerit points. If points exceed 12, the license is suspended.  


## How I approached & solved it

Problem — check if speed ≤ 70:

If yes → "Ok"

Else → calculate points for every 5 km/h over 70

If points > 12 → "License suspended"

Input validation (first) — ensure speed is a valid number:

Convert input with Number(speed)

If isNaN(speed) or speed < 0 → return
"Invalid input. Please enter a valid speed."

Calculation

Use Math.floor((speed - 70) / 5) to count whole points only

Use ternary operator to decide between "License suspended" or "Points: X"

Variables used (very brief)
speed — input, converted to number

speedLimit = 70 — legal speed limit

kmPerDemerit = 5 — interval for each demerit point

points — computed demerit points after flooring

Edge cases & exact expected outputs
js
Copy code
speedDetector(65)    // "Ok"
speedDetector(80)    // "Points: 2"
speedDetector(135)   // "License suspended"
speedDetector("90")  // "Points: 4"
speedDetector(-5)    // "Invalid input. Please enter a valid speed."

# JavaScript Code Challenge — Net Salary Calculator (Challenge 3)

## Description
I implemented `netSalaryCalculator(basicSalary, benefits)` to compute an individual’s **gross salary**, **PAYE (tax)**, **SHIF**, **NSSF**, and **net salary** based on KRA tax bands and statutory rates.

## How I approached & solved it
Problem — compute:

Gross salary = basic + benefits

PAYE using KRA tax bands + apply personal relief (KES 2400)

SHIF = 2.75% of gross salary (minimum 300)

NSSF = 6% Tier 1 + Tier 2 up to 72,000

Net salary = gross - (PAYE + SHIF + NSSF)

Input validation (first) — convert inputs with Number(...) and check:

isNaN(basicSalary) / isNaN(benefits) or negative values →
"Invalid input. Enter non-negative numbers."

Calculation

Used if / else if ladder for PAYE brackets

Applied Math.max(0, paye - personalRelief) so PAYE never goes below 0

Used Math.min(...) to cap NSSF Tier 2 at 72,000

Rounded all amounts with Math.round before returning

Variables used (very brief)
basicSalary, benefits — inputs

grossSalary — sum of basic + benefits

paye — PAYE tax after applying relief

shif — health levy (min 300)

nssf — pension deduction (tiered)

netSalary — final take-home pay

Edge cases & exact expected output
js
Copy code
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


Author & License

Author: Stanley Barasa Gitau

License: MIT
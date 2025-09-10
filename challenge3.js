function netSalaryCalculator(basicSalary, benefits) {
  basicSalary = Number(basicSalary);
  benefits = Number(benefits);

  if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    return "Invalid input. Enter non-negative numbers."; //input validation
  }

  const grossSalary = basicSalary + benefits;

  // ===== 1. PAYE Calculation =====
  let taxable = grossSalary;
  let paye = 0;

  if (taxable <= 24000) {
    paye = taxable * 0.10;
  } else if (taxable <= 32333) {
    paye = (24000 * 0.10) + (taxable - 24000) * 0.25;
  } else if (taxable <= 500000) {
    paye = (24000 * 0.10) + (8333 * 0.25) + (taxable - 32333) * 0.30;
  } else if (taxable <= 800000) {
    paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (taxable - 500000) * 0.325;
  } else {
    paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + (taxable - 800000) * 0.35;
  }

  // Applying personal relief
  const personalRelief = 2400;
  paye = Math.max(0, paye - personalRelief);

  // ===== 2. SHIF Calculation =====
  const shif = Math.max(300, grossSalary * 0.0275);

  // ===== 3. NSSF Calculation =====
  let nssf = 0;
  const tier1Limit = 8000;
  const tier2Limit = 72000;
  
  if (grossSalary <= tier1Limit) {
    nssf = grossSalary * 0.06;
  } else {
    const tier2able = Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit);
    nssf = (tier1Limit * 0.06) + (tier2able * 0.06);
  }

  // ===== 4. Net Salary =====
  const netSalary = grossSalary - paye - shif - nssf;

  return {
    basicSalary,
    benefits,
    grossSalary,
    paye: Math.round(paye),
    shif: Math.round(shif),
    nssf: Math.round(nssf),
    netSalary: Math.round(netSalary)
  };
}

// Example usage:
console.log(netSalaryCalculator(50000, 5000));

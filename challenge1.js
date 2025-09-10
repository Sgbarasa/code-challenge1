function studentGrade(marks) {
  if (typeof marks !== "number"  || marks < 0 || marks > 100) {
    return "Invalid input. Please enter a valid grade between 0 and 100"; //input validation
  } else if (marks > 79) {
    return "Grade: A";
  } else if (marks >= 60) {
    return "Grade: B";
  } else if (marks >= 50) {
    return "Grade: C";
  } else if (marks >= 40) {
    return "Grade: D";
  } else {
    return "Grade: E";
  }
}

// Example usage
console.log(studentGrade(93));  // Grade : A
console.log(studentGrade(37));  // Grade: E
console.log(studentGrade(110)); // Invalid input
console.log(studentGrade("John")); //Invalid input
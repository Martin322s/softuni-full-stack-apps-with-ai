interface StudentInfo {
  name: string;
  grades: number[];
}

interface GradeAnalysisReport {
  studentName: string;
  averageGrade: number;
  highestGrade: number;
  passed: boolean;
  summary: string;
}

function analyzeGrades(
  student: StudentInfo,
  minPassingGrade: number,
): GradeAnalysisReport {
  if (!student) {
    throw new Error("Student info is missing!");
  }

  if (!student.name) {
    throw new Error("Student name is missing!");
  }

  if (!student.grades || student.grades.length === 0) {
    throw new Error("Grades array cannot be empty!");
  }

  for (const grade of student.grades) {
    if (grade < 2 || grade > 6) {
      throw new Error(
        `Invalid grade: ${grade}. Grades must be between 2 and 6.`,
      );
    }
  }

  const sum = student.grades.reduce((total, grade) => total + grade, 0);
  const averageGrade = sum / student.grades.length;
  const highestGrade = Math.max(...student.grades);
  const passed = averageGrade >= minPassingGrade;

  let summary = `${student.name}'s average grade is ${averageGrade.toFixed(2)}. `;

  if (passed) {
    summary += `Excellent! The student passed with a highest grade of ${highestGrade}.`;
  } else {
    summary += `Unfortunately, the student did not meet the minimum grade of ${minPassingGrade}.`;
  }

  return {
    studentName: student.name,
    averageGrade,
    highestGrade,
    passed,
    summary,
  };
}

let peter: StudentInfo = { name: "Alice", grades: [5, 5, 5, 6] };
console.log(analyzeGrades(peter, 4));

console.log(analyzeGrades({ name: "Eve", grades: [2] }, 3));

try {
  console.log(analyzeGrades({ name: "Frank", grades: [5, 1, 5, 4] }, 4));
} catch (error: any) {
  console.log(error.message);
}

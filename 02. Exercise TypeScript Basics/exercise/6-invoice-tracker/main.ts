import {
  Client,
  Company,
  Invoice,
  InvoiceItem,
  Product,
} from "./data-types";

const companyProfile: Company = {
  name: "My Tech Company",
  id: "12345",
  taxId: "BG12345",
  address: "Sofia, Bulgaria",
  manager: "Martin Sofroniev",
  iban: "BG00XXXX1234567890",
};

const products: Product[] = [
  { name: "Laptop", price: 1500, currency: "BGN", unit: "pcs" },
  { name: "Mouse", price: 40, currency: "BGN", unit: "pcs" },
];

const clients: Client[] = [
  {
    name: "Client Company Ltd",
    id: "C001",
    taxId: "BG999999",
    address: "Plovdiv, Bulgaria",
    manager: "Ivan Petrov",
    iban: "BG11AAAA22223333444455",
  },
  {
    name: "Georgi Ivanov",
    id: "P001",
    address: "Varna, Bulgaria",
  },
];

const invoices: Invoice[] = [];

function calculateInvoiceTotals(items: InvoiceItem[]) {
  const amountSubtotal = items.reduce(
    (sum, item) => sum + item.valueWithoutVAT,
    0,
  );

  const vat = items.reduce((sum, item) => {
    return sum + (item.valueWithoutVAT * item.vatRate) / 100;
  }, 0);

  const totalAmount = amountSubtotal + vat;

  return { amountSubtotal, vat, totalAmount };
}

type GalacticCreature = {
  name: string;
  energyLevels: number[];
  avgEnergy?: number;
};

function calculateCreatureEnergy(creature: GalacticCreature): GalacticCreature {
  const total = creature.energyLevels.reduce((sum, value) => sum + value, 0);
  creature.avgEnergy = total / creature.energyLevels.length;

  console.log(`Creature: ${creature.name}`);
  console.log(`Energy Levels: [${creature.energyLevels.join(", ")}]`);
  console.log(`Average Energy Level: ${creature.avgEnergy.toFixed(2)}`);

  return creature;
}

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

  const averageGrade =
    student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
  const highestGrade = Math.max(...student.grades);
  const passed = averageGrade >= minPassingGrade;

  const summary = passed
    ? `${student.name}'s average grade is ${averageGrade.toFixed(2)}. Excellent! The student passed with a highest grade of ${highestGrade}.`
    : `${student.name}'s average grade is ${averageGrade.toFixed(2)}. Unfortunately, the student did not meet the minimum grade of ${minPassingGrade}.`;

  return {
    studentName: student.name,
    averageGrade,
    highestGrade,
    passed,
    summary,
  };
}

type HealingPotion = {
  type: "healing";
  name: string;
  healingAmount: number;
};

type EnhancementPotion = {
  type: "enhancement";
  name: string;
  enhancementAmount: number;
};

type Potion = HealingPotion | EnhancementPotion;

function calculatePotionEffect(potion: Potion): string {
  switch (potion.type) {
    case "healing":
      return `${potion.name} restores ${potion.healingAmount} health points.`;
    case "enhancement":
      return `${potion.name} enhances abilities by ${potion.enhancementAmount} points.`;
  }
}

// Tests
const zorblax: GalacticCreature = {
  name: "Zorblax",
  energyLevels: [35, 42, 50, 29],
};

const lumivex: GalacticCreature = {
  name: "Lumivex",
  energyLevels: [75, 80, 90],
};

calculateCreatureEnergy(zorblax);
calculateCreatureEnergy(lumivex);

console.log(analyzeGrades({ name: "Alice", grades: [5, 5, 5, 6] }, 4));
console.log(analyzeGrades({ name: "Eve", grades: [2] }, 3));

try {
  console.log(analyzeGrades({ name: "Frank", grades: [5, 1, 5, 4] }, 4));
} catch (error: any) {
  console.log(error.message);
}

const healingPotion: HealingPotion = {
  type: "healing",
  name: "Elixir of Life",
  healingAmount: 50,
};

const enhancementPotion: EnhancementPotion = {
  type: "enhancement",
  name: "Strength Brew",
  enhancementAmount: 25,
};

console.log(calculatePotionEffect(healingPotion));
console.log(calculatePotionEffect(enhancementPotion));

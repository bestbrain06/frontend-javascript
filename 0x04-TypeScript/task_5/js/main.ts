// task_5/js/main.ts

// Interfaces for Major and Minor credits with unique brands
export interface MajorCredits {
  credits: number;
  brand: "major"; // unique brand to distinguish MajorCredits
}

export interface MinorCredits {
  credits: number;
  brand: "minor"; // unique brand to distinguish MinorCredits
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}

// Example usage
const math: MajorCredits = { credits: 10, brand: "major" };
const physics: MajorCredits = { credits: 5, brand: "major" };
console.log("Sum of Major Credit")

/**
 *  •	Only works for object-like shapes
 *  •	Supports inheritance (extends)
 *  •	Allows declaration merging
 *  •	Great for defining class contracts
 */
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

// ====================================================

/**
 * Extending Interfaces
 */
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Alice",
  employeeId: 123
};

// ====================================================

/**
 * Extending multiple interfaces
 */
interface Auditable {
  createdAt: Date;
  updatedAt: Date;
}

interface Admin extends Person, Auditable {
  adminLevel: number;
}

const admin: Admin = {
  name: "Bob",
  createdAt: new Date(),
  updatedAt: new Date(),
  adminLevel: 1
};

// ====================================================

/**
 * Implementing interfaces
 */
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

// ====================================================

/**
 * Declaration merging
 */
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const cat: Animal = {
  name: "Whiskers",
  age: 3
};


import Database from "../Database/index.js";

export function findAllAssignments() {
  return Database.courses;
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.courses = [...Database.courses, newAssignment];
  return newAssignment;
}

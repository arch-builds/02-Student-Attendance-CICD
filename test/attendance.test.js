const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateAttendance } = require("../script.js");

test("40 total and 36 attended returns 90% and Eligible", () => {
  const result = calculateAttendance(40, 36);
  assert.equal(result.valid, true);
  assert.equal(result.percentage, 90);
  assert.equal(result.status, "Eligible");
});

test("40 total and 30 attended returns 75% and Eligible", () => {
  const result = calculateAttendance(40, 30);
  assert.equal(result.valid, true);
  assert.equal(result.percentage, 75);
  assert.equal(result.status, "Eligible");
});

test("40 total and 28 attended returns 70% and Not Eligible", () => {
  const result = calculateAttendance(40, 28);
  assert.equal(result.valid, true);
  assert.equal(result.percentage, 70);
  assert.equal(result.status, "Not Eligible");
});

test("attended classes greater than total classes is invalid", () => {
  const result = calculateAttendance(40, 45);
  assert.equal(result.valid, false);
  assert.equal(result.message, "Invalid attendance data");
});

test("zero total classes is invalid", () => {
  const result = calculateAttendance(0, 0);
  assert.equal(result.valid, false);
  assert.equal(result.message, "Invalid attendance data");
});

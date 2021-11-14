// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const { TestWatcher } = require('@jest/core');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("Check for a valid phone number", () => {
    expect(functions.isPhoneNumber("323-459-9023")).toBe(true);
});

test("Check for a valid email", () => {
    expect(functions.isEmail("kjl001@ucsd.edu")).toBe(true);
});

test("Check for a weak password", () => {
    expect(functions.isStrongPassword("a")).toBe(false);
});

test("Check for an invalid hex color", () => {
    expect(functions.isHexColor("djkasda")).toBe(false);
})
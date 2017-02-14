import calculator from "../js/calculator";

describe("add method", () => {
    let calc = new calculator();

    it("adds 2 and 2", () => expect(calc.add(2, 2)).toBe(4) );
    it("adds 3 and 3", () => expect(calc.add(3, 3)).toBe(6) );
    it("adds 7 and 5", () => expect(calc.add(7, 5)).toBe(12) );
});

describe("subtract method", () => {
    let calc = new calculator();

    it("subtracts 2 and 2", () => expect(calc.subtract(2, 2)).toBe(0) );
    it("subtracts 2 and 1", () => expect(calc.subtract(2, 1)).toBe(1) );
});
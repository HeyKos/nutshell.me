import sample from "./sample";

test("Sample test passes.", () => {
    const result = sample();
    expect(result).not.toBe(null);
});

import { minutesToMilliseconds } from '../src/js/helpers.js';

describe("Check minutesToMilliseconds function", () => {
    it("should be defined", () => {
        expect(minutesToMilliseconds(1)).toBeDefined();
    });
    xit("should fail if passed without a parameter", () => {
        expect(minutesToMilliseconds()).toThrowError();
    });
    xit("should fail if passed negative parameter", () => {
        expect(minutesToMilliseconds(-1)).toThrowError();
    });
    xit("should fail if passed a non-integer parameter", () => {
        expect(minutesToMilliseconds("a")).toThrowError();
    });
    it("should return 0 if passed value is 0", () => {
        expect(minutesToMilliseconds(0)).toEqual(0);
    });
    xit("should return 60000 if passed value is 1", () => {
        expect(minutesToMilliseconds(1)).toEqual(60000);
    });
    it("should return 300000 if passed value is 5", () => {
        expect(minutesToMilliseconds(5)).toEqual(300000);
    });
    it("should return 0 if passed value is 0", () => {
        expect(minutesToMilliseconds(25)).toEqual(1500000);
    });
});
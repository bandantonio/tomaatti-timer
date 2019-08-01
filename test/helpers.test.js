import { countdown, minutesToMilliseconds, enableTicking, getTickingState, getTimeoutID } from '../src/js/helpers.js';

xdescribe("Check countdown function", () => {
    it("should be defined", () => {
        expect(countdown()).toBeDefined();
    })
});

describe("Check minutesToMilliseconds function", () => {
    it("should be defined", () => {
        expect(minutesToMilliseconds(1)).toBeDefined();
    });
    it("should fail if passed without a parameter", () => {
        expect(() => {
            minutesToMilliseconds();
        }).toThrowError("Please pass a parameter to the function");
    });
    it("should fail if passed a negative parameter", () => {
        expect(() => {
            minutesToMilliseconds(-1);
        }).toThrowError("The passed value cannon be negavive");
    });
    it("should fail if passed a non-integer (string) parameter", () => {
        expect(() => {
            minutesToMilliseconds('test');
        }).toThrowError("The passed value should be a number");
    });
    it("should fail if passed a non-integer (boolean) parameter", () => {
        expect(() => {
            minutesToMilliseconds(true);
        }).toThrowError("The passed value should be a number");
    });
    it("should return 0 if passed value is 0", () => {
        expect(minutesToMilliseconds(0)).toBe(0);
    });
    it("should return 60000 if passed value is 1", () => {
        expect(minutesToMilliseconds(1)).toEqual(60000);
    });
    it("should return 300000 if passed value is 5", () => {
        expect(minutesToMilliseconds(5)).toEqual(300000);
    });
    it("should return 1500000 if passed value is 25", () => {
        expect(minutesToMilliseconds(25)).toEqual(1500000);
    });
});

describe("Check enableTicking function", () => {
    it("should be defined", () => {
        expect(enableTicking(true)).toBeDefined();
    });
    it("should fail if passed without a parameter", () => {
        expect(() => {
            enableTicking();
        }).toThrowError("Please pass a parameter to the function");
    });
    it("should fail if passed a non-boolean (string) parameter", () => {
        expect(() => {
            enableTicking('test');
        }).toThrowError("The passed value is not boolean");
    });
    it("should fail if passed a non-boolean (integer) parameter", () => {
        expect(() => {
            enableTicking(1);
        }).toThrowError("The passed value is not boolean");
    });
    it("should fail if passed a negative parameter", () => {
        expect(() => {
            enableTicking(-1);
        }).toThrowError("The passed value is not boolean");
    });
    it("should return true if passed value is true", () => {
        expect(enableTicking(true)).toBe(true);
    });
    it("should return false if passed value is false", () => {
        expect(enableTicking(false)).toBe(false);
    });
});

xdescribe("Check getTickingState function", () => {
    it("should be defined", () => {
        expect(getTickingState()).toBeDefined();
    });
    it("should ignore additional parameters passed to function", () => {
        let ticking = true;
        expect(getTickingState('test')).toBe(true);
    });
    it("should return true if the global variable was set to true", () => {
        let ticking = true;
        expect(getTickingState()).toBe(true);
    });
});

xdescribe("Check getTimeoutID function", () => {
    it("should be defined", () => {
        expect(getTimeoutID()).toBeDefined();
    });
    it("should ignore additional parameters passed to function", () => {
        let ticking = true;
        expect(getTimeoutID('test')).toBe(true);
    });
    it("should return true if the global variable was set to true", () => {
        let ticking = true;
        expect(getTimeoutID()).toBe(true);
    });
});
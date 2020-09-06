const lib = require('../lib');

describe('absolute', () => {

    it('should return a positive number if input is positive', () => {
        //throw new Error('Something Failed......');
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it('should return a positive number if input is negative', () => {
        //throw new Error('Something Failed......');
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it('should return 0 if input is 0', () => {
        //throw new Error('Something Failed......');
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return a greeting message', () => {
        const result = lib.greet('Jachrix');
        // expect(result).toBe('Welcome Jachrix'); // Test too specific
        expect(result).toMatch(/Jachrix/);
        expect(result).toContain('Jachrix');
    })
});
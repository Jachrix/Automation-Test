const exercise = require('../exercise1');
describe('fizzBuzz', () => {
    it('should throw an error if input is not a number', () => {
        // String
        // ''
        // NaN
        // false
        // Null
        // undefined
        const args = [String, NaN, '', false, null, undefined];
        args.forEach(val => {
            expect(() => { exercise.fizzBuzz(!val); }).toThrow();
        });
    });

    it('should return FizzBuzz if input is divisible by 3 and 5', () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('should return Fizz if input is only divisible by 3', () => {
        const result = exercise.fizzBuzz(9);
        expect(result).toBe('Fizz');
    });

    it('should return Buzz if input is only divisible 5', () => {
        const result = exercise.fizzBuzz(50);
        expect(result).toBe('Buzz');
    });

    it('should return number if input is not divisible by 3 or 5', () => {
        const result = exercise.fizzBuzz(43);
        expect(result).toBe(43);
    });
})
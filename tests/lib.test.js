const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

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

describe('getCurrencies', () => {
    it('should return available currencies', () => {
        const result = lib.getCurrencies();

        // Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        //Too specific 
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);

        //proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

        //ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'AUD', 'USD']));
    })
})

describe('getProduct', () => {
    it('should return a product with the given ID', () => {
        const result = lib.getProduct(1);
        //expect(result).toStrictEqual({ id: 1, price: 10 }); // can use toEqual also
        expect(result).toMatchObject({ id: 1, price: 10 });
        expect(result).toHaveProperty('id', 1);
    });
})

describe('registerUser', () => {
    it('should throw an error if username is falsy', () => {
        // undefined
        // Null
        // ''
        // NaN
        // 0
        // false
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(val => {
            expect(() => { lib.registerUser(val); }).toThrow();
        });
    });

    it('should return a user object if a valid username is passed', () => {
        const result = lib.registerUser('Jachrix');
        expect(result).toMatchObject({ username: 'Jachrix' });
        expect(result.id).toBeGreaterThan(0);
    });
});

describe('applyDiscount', () => {
    it('should return a 10% discount if Customer points is above 10', () => {

        db.getCustomerSync = function(customerId) {
            console.log('Fake reading customer');
            return { id: customerId, points: 20 }
        }

        const order = { customerId: 1, totalPrice: 10 }
        const result = lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    })
});

describe('notifyCustomer', () => {
    db.getCustomerSync = function(customerId) {
        return { email: 'a' };
    }

    let mailSent = false;
    mail.send = function(email, message) {
        mailSent = true;
    }
    it('should send an email to the customer', () => {
        const result = lib.notifyCustomer({ customerId: 1 });
        expect(mailSent).toBe(true);
    });
})
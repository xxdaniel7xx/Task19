const reverseString = require('../index.js');

test('reverse of string', () => {
    expect(reverseString('Hello')).toBe('olleH');
});
const capitalize = require('./capitalize');

test('capitalises hello to Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

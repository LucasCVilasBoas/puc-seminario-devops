const classify_egg = require('./classify_egg');


test('Ovo com menos de 45g é classificado como Descarte', () => {
    throw 'Simulando um erro.'
    expect(classify_egg(30)).toBe('Descarte')
});

test('Ovo com 48g é classificado como Pequeno', () => {
    expect(classify_egg(48)).toBe('Pequeno')
});

test('Ovo com 52g é classificado como Médio', () => {
    expect(classify_egg(52)).toBe('Médio')
});

test('Ovo com 58g é classificado como Grande', () => {
    expect(classify_egg(58)).toBe('Grande')
});

test('Ovo com 62g é classificado como Extra', () => {
    expect(classify_egg(62)).toBe('Extra')
});

test('Ovo com 68g é classificado como Jumbo', () => {
    expect(classify_egg(68)).toBe('Jumbo')
});
const classify_egg = require('./classify_egg');

const size_discard = "Descarte"
const size_small = "Pequeno"
const size_medium = "Médio"
const size_big = "Grande"
const size_extra = "Extra"
const size_jumbo = "Jumbo"

test('Ovo com menos de 45g é classificado como Descarte', () => {
    expect(classify_egg(44)).toBe(size_discard)
});

test('Ovo com (45g <=  massa < 50g) é classificado como Pequeno', () => {
    expect(classify_egg(45)).toBe(size_small)
    expect(classify_egg(46)).toBe(size_small)
    expect(classify_egg(49)).toBe(size_small)
});

test('Ovo com (50g <=  massa < 55g) é classificado como Médio', () => {
    expect(classify_egg(50)).toBe(size_medium)
    expect(classify_egg(52)).toBe(size_medium)
    expect(classify_egg(54)).toBe(size_medium)
});

test('Ovo com (55g <=  massa < 60g) é classificado como Grande', () => {
    expect(classify_egg(55)).toBe(size_big)
    expect(classify_egg(56)).toBe(size_big)
    expect(classify_egg(59)).toBe(size_big)
});

test('Ovo com (60g <=  massa < 65g) é classificado como Extra', () => {
    expect(classify_egg(60)).toBe(size_extra)
    expect(classify_egg(61)).toBe(size_extra)
    expect(classify_egg(64)).toBe(size_extra)
});

test('Ovo com (massa >= 65g) é classificado como JUmbo', () => {
    expect(classify_egg(65)).toBe(size_jumbo)
    expect(classify_egg(66)).toBe(size_jumbo)
});

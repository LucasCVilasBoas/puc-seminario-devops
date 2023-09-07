function classify_egg(egg_mass) {
  if (egg_mass < 45) {
    return 'Descarte';
  } else if (45 <= egg_mass && egg_mass < 50) {
    return 'Pequeno';
  } else if (50 <= egg_mass && egg_mass < 55) {
    return 'Médio';
  } else if (55 <= egg_mass && egg_mass < 60) {
    return 'Grande';
  } else if (60 <= egg_mass && egg_mass < 65) {
    return 'Extra';
  } else {
    return 'Jumbo'
  }
};

module.exports = classify_egg;


/*
let values = [10, 48, 52, 58, 62, 68]


values.forEach(function (e) {
  console.log(classify_egg(e));
});
*/
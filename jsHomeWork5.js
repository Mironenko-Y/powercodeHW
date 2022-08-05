function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  Vlad: 100,

  Alina: 130,

  Roman: 110,

  Alex: 120,
};
alert(sumSalaries(salaries));

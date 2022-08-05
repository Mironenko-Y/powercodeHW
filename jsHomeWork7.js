//Напишіть однорядкове рішення, яке вирахує суму квадратних корнів для
//всіх парних чисел массиву: [1, 4, 3, 0, 4, 5, 4] має повернути 6

console.log(
  [1, 4, 3, 0, 4, 5, 4]
    .filter((Element) => !(Element % 2))
    .reduce((accumulator, element) => accumulator + Math.sqrt(element), 0)
);

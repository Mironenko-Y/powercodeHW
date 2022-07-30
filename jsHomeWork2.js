//1
let a = 0;
while (a <= 99) {
  a;
  a++;
  console.log(a);
}
//2
let b = 0;
while (b <= 100) {
  if (b % 2 === 0) {
    console.log(b);
  }
  b++;
}
//3
let c = 0;
while (c <= 100) {
  if (c % 3 !== 0) continue;{
    console.log(c);
  }
  c++;
}
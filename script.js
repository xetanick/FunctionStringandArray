function calculator(a, b, operation) {
  switch (operation) {
    case "topla":
      return a + b;
    case "cix":
      return a - b;
    case "vur":
      return a * b;
    case "bol":
      return b !== 0 ? a / b : "0-a bölmək olmaz!";
    default:
      return "Yanlış əməliyyat!";
  }
}

console.log("1. Riyazi əməliyyatlar:");
console.log("10 + 5 =", calculator(10, 5, "topla"));
console.log("10 - 5 =", calculator(10, 5, "cix"));
console.log("10 * 5 =", calculator(10, 5, "vur"));
console.log("10 / 5 =", calculator(10, 5, "bol"));

function tekVeCutleriTap(...nums) {
  let tekler = [];
  let cutler = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      cutler.push(num);
    } else {
      tekler.push(num);
    }
  }

  return { tekler, cutler };
}

console.log("\n2. Tək və Cütlərin tapılması:");
console.log(tekVeCutleriTap(14, 20, 35, 40, 57, 60, 100));

function bolunenlerinCemi(arr) {
  let cem = 0;
  for (let num of arr) {
    if (num % 4 === 0 && num % 5 === 0) {
      cem += num;
    }
  }
  return cem;
}

let arr = [14, 20, 35, 40, 57, 60, 100];
console.log("\n3. 4-ə və 5-ə bölünənlərin cəmi:");
console.log(bolunenlerinCemi(arr));

function simvolSay(cumle, simvol) {
  let say = 0;
  for (let ch of cumle) {
    if (ch === simvol) say++;
  }
  return say;
}

console.log("\n4. Cümlədə simvol sayını tapmaq:");
let cumle = "Salam necesen? Men yaxsiyam, sen necesen?";
console.log("Cümlə:", cumle);
console.log("Simvol 'e' sayı:", simvolSay(cumle, "e"));
console.log("Simvol 'a' sayı:", simvolSay(cumle, "a"));

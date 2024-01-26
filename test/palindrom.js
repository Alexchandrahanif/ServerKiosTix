function Palindrom(kata) {
  kata = kata.toLowerCase();
  kata = kata.split(" ").join("");

  let panjang = kata.length;
  for (let i = 0; i < Math.floor(panjang / 2); i++) {
    if (kata[i] !== kata[panjang - 1 - i]) {
      return false;
    }
  }

  return true;
}

const kata1 = "LEVEL";
const kata2 = "ALEX";
const kata3 = "MALAM";
const kata4 = "KIOSTIX";

console.log(`${kata1} adalah palindrom: ${Palindrom(kata1)}`);
console.log(`${kata2} adalah palindrom: ${Palindrom(kata2)}`);
console.log(`${kata3} adalah palindrom: ${Palindrom(kata3)}`);
console.log(`${kata4} adalah palindrom: ${Palindrom(kata4)}`);

const arr = ["1", "5", "8", "0", "90", "7", "4", "3", "2"];

function cariNilaiTertinggiTerendah(arr) {
  let nilaiTertinggi = parseInt(arr[0]);
  let nilaiTerendah = parseInt(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    let nilai = parseInt(arr[i]);
    if (nilai > nilaiTertinggi) {
      nilaiTertinggi = nilai;
    } else if (nilai < nilaiTerendah) {
      nilaiTerendah = nilai;
    }
  }

  return { nilaiTertinggi, nilaiTerendah };
}

const { nilaiTertinggi, nilaiTerendah } = cariNilaiTertinggiTerendah(arr);

console.log(`Nilai tertinggi: ${nilaiTertinggi}`);
console.log(`Nilai terendah: ${nilaiTerendah}`);

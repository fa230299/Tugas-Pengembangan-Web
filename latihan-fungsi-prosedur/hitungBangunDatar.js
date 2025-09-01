// Data tetap
const persegi = { sisi: 8 };
const persegiPanjang = { panjang: 9, lebar: 3 };
const lingkaran = { r: 6 };
const segitiga = { alas: 6, tinggi: 4, sisi: 6 };

// Fungsi menghitung luas & keliling
function hitungPersegi(sisi) {
  return {
    luas: sisi * sisi,
    keliling: 4 * sisi
  };
}

function hitungPersegiPanjang(panjang, lebar) {
  return {
    luas: panjang * lebar,
    keliling: 2 * (panjang + lebar)
  };
}

function hitungLingkaran(r) {
  return {
    luas: Math.PI * r * r,
    keliling: 2 * Math.PI * r
  };
}

function hitungSegitiga(alas, tinggi, sisi) {
  return {
    luas: 0.5 * alas * tinggi,
    keliling: 3 * sisi
  };
}

// Hitung semua
let hasilPersegi = hitungPersegi(persegi.sisi);
let hasilPP = hitungPersegiPanjang(persegiPanjang.panjang, persegiPanjang.lebar);
let hasilLingkaran = hitungLingkaran(lingkaran.r);
let hasilSegitiga = hitungSegitiga(segitiga.alas, segitiga.tinggi, segitiga.sisi);

// Tampilkan hasil
console.log("=== MENGHITUNG LUAS DAN KELILING BANGUN DATAR ====\n");

console.log(">> LUAS BANGUN DATAR <<");
console.log("Luas persegi dengan sisi " + persegi.sisi + " adalah " + hasilPersegi.luas);
console.log("Luas persegi panjang dengan panjang " + persegiPanjang.panjang + " dan lebar " + persegiPanjang.lebar + " adalah " + hasilPP.luas);
console.log("Luas lingkaran dengan jari-jari " + lingkaran.r + " adalah " + hasilLingkaran.luas.toFixed(2));
console.log("Luas segitiga sama sisi dengan alas " + segitiga.alas + ", tinggi " + segitiga.tinggi + ", dan sisi " + segitiga.sisi + " adalah " + hasilSegitiga.luas + "\n");

console.log(">> KELILING BANGUN DATAR <<");
console.log("Keliling persegi dengan sisi " + persegi.sisi + " adalah " + hasilPersegi.keliling);
console.log("Keliling persegi panjang dengan panjang " + persegiPanjang.panjang + " dan lebar " + persegiPanjang.lebar + " adalah " + hasilPP.keliling);
console.log("Keliling lingkaran dengan jari-jari " + lingkaran.r + " adalah " + hasilLingkaran.keliling.toFixed(2));
console.log("Keliling segitiga sama sisi dengan sisi " + segitiga.sisi + " adalah " + hasilSegitiga.keliling);

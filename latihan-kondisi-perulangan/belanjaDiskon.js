// Daftar harga barang elektronik
const barang = {
  headset: 225000,
  mouse: 150000,
  keyboard: 350000
};

// Jumlah pembelian (1 unit masing-masing)
let belanja = {
  headset: 1,
  mouse: 1,
  keyboard: 1
};

// Hitung total harga belanja
let totalBelanja =
  (barang.headset * belanja.headset) +
  (barang.mouse * belanja.mouse) +
  (barang.keyboard * belanja.keyboard);

// Tentukan diskon berdasarkan total belanja
let persentaseDiskon = 0;
if (totalBelanja >= 250000 && totalBelanja <= 499999) {
  persentaseDiskon = 0.05; // 5%
} else if (totalBelanja >= 500000 && totalBelanja <= 799999) {
  persentaseDiskon = 0.10; // 10%
} else if (totalBelanja >= 800000) {
  persentaseDiskon = 0.15; // 15%
}

// Hitung diskon dan total setelah diskon
let diskon = totalBelanja * persentaseDiskon;
let totalSetelahDiskon = totalBelanja - diskon;

// Uang yang dibayarkan (utang)
let bayar = 800000;

// Hitung kembalian
let kembalian = bayar - totalSetelahDiskon;

// Tampilkan hasil
console.log("=== Rincian Pembelian ===");
console.log("Headset: Rp " + barang.headset);
console.log("Mouse  : Rp " + barang.mouse);
console.log("Keyboard: Rp " + barang.keyboard);
console.log("--------------------------");
console.log("Total Belanja       : Rp " + totalBelanja);
console.log("Diskon (" + (persentaseDiskon * 100) + "%) : Rp " + diskon);
console.log("Total Setelah Diskon: Rp " + totalSetelahDiskon);
console.log("Pembayaran (Utang)  : Rp " + bayar);
console.log("Kembalian           : Rp " + kembalian);
console.log("==========================");
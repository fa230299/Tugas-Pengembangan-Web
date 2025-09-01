// Daftar harga menu
const menu = {
  nasiGoreng: 25000,
  mieGoreng: 22000,
  capcay: 32000
};

// Jumlah pesanan (misalnya 1 porsi masing-masing)
let pesanan = {
  nasiGoreng: 1,
  mieGoreng: 1,
  capcay: 1
};

// Hitung total harga sebelum diskon
let totalSebelumDiskon =
  (menu.nasiGoreng * pesanan.nasiGoreng) +
  (menu.mieGoreng * pesanan.mieGoreng) +
  (menu.capcay * pesanan.capcay);

// Hitung total setelah diskon 10%
let diskon = totalSebelumDiskon * 0.10;
let totalSetelahDiskon = totalSebelumDiskon - diskon;

// Uang yang dibayarkan pelanggan
let bayar = 100000;

// Hitung kembalian
let kembalian = bayar - totalSetelahDiskon;

// Tampilkan hasil
console.log("Harga Nasi goreng: Rp ", menu.nasiGoreng);
console.log("Harga Mie Goreng: Rp ", menu.mieGoreng);
console.log("Harga CapCay: Rp ", menu.capcay);
console.log("Harga total: Rp " + totalSebelumDiskon);
console.log("Diskon: Rp " + diskon);
console.log("Harga total setelah diskon: Rp " + totalSetelahDiskon);
console.log("Pembayaran: Rp " + bayar);
console.log("Kembalian: Rp " + kembalian);

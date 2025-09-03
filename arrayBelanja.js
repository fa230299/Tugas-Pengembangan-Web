// Daftar harga barang elektronik
const barang = [{
  no: 1, namaSepatu:"New Balance NB 530", harga: 390000,
  no: 2, namaSepatu: "Nike Vomero 5", harga: 350000,
  no: 3, namaSepatu:"Adidas Samba", harga: 180000,
  no: 4, namaSepatu:"Onitsuka Tiger Mexico", harga: 420000
}];

// Jumlah pembelian (1 unit masing-masing)
let totalHarga = 0;
barang.forEach(item=>{
    totalHarga += item.harga;
});

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
let diskon = totalHarga * persentaseDiskon;
let totalSetelahDiskon = totalBelanja - diskon;

// Uang yang dibayarkan (utang)
let bayar = 800000;

// Hitung kembalian
let kembalian = bayar - totalSetelahDiskon;
 
barang.forEach((item) => {
    console.log(`${item.no}. ${item.namaSepatu} - Rp.  ${item.tinggi}`);
});

console.log("Total belanja = Rp." + totalHarga);
console.log("Total belanja = Rp." + totalHarga);
console.log("Total belanja = Rp." + totalHarga);
console.log("Total belanja = Rp." + totalHarga);
console.log("Total belanja = Rp." + totalHarga);


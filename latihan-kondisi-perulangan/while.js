//Cetak bilangan genap
let ulang= true;

do {
    let i = 1;
    console.log("Menampilkan bilangan genap dari 1 hingga 20:");
    while (i<=20) {
        if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// ubah ulang menjadi false agar tidak mengulang lagi
ulang = false;
} while (ulang);
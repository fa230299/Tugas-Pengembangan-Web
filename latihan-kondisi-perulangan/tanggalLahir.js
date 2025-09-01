// Variabel tanggal lahir
let tanggal = 23;
let bulan = 2;
let tahun = 1999;

let namaTanggal;
let namaBulan;
let namaTahun;

// Switch-case untuk TANGGAL (1–31)

switch (tanggal) {
  case 1: namaTanggal = "1"; break;
  case 2: namaTanggal = "2"; break;
  case 3: namaTanggal = "3"; break;
  case 4: namaTanggal = "4"; break;
  case 5: namaTanggal = "5"; break;
  case 6: namaTanggal = "6"; break;
  case 7: namaTanggal = "7"; break;
  case 8: namaTanggal = "8"; break;
  case 9: namaTanggal = "9"; break;
  case 10: namaTanggal = "10"; break;
  case 11: namaTanggal = "11"; break;
  case 12: namaTanggal = "12"; break;
  case 13: namaTanggal = "13"; break;
  case 14: namaTanggal = "14"; break;
  case 15: namaTanggal = "15"; break;
  case 16: namaTanggal = "16"; break;
  case 17: namaTanggal = "17"; break;
  case 18: namaTanggal = "18"; break;
  case 19: namaTanggal = "19"; break;
  case 20: namaTanggal = "20"; break;
  case 21: namaTanggal = "21"; break;
  case 22: namaTanggal = "22"; break;
  case 23: namaTanggal = "23"; break;
  case 24: namaTanggal = "24"; break;
  case 25: namaTanggal = "25"; break;
  case 26: namaTanggal = "26"; break;
  case 27: namaTanggal = "27"; break;
  case 28: namaTanggal = "28"; break;
  case 29: namaTanggal = "29"; break;
  case 30: namaTanggal = "30"; break;
  case 31: namaTanggal = "31"; break;
  default: namaTanggal = "Tanggal tidak valid"; break;
}

// Switch-case untuk BULAN (1–12)

switch (bulan) {
  case 1: namaBulan = "Januari"; break;
  case 2: namaBulan = "Februari"; break;
  case 3: namaBulan = "Maret"; break;
  case 4: namaBulan = "April"; break;
  case 5: namaBulan = "Mei"; break;
  case 6: namaBulan = "Juni"; break;
  case 7: namaBulan = "Juli"; break;
  case 8: namaBulan = "Agustus"; break;
  case 9: namaBulan = "September"; break;
  case 10: namaBulan = "Oktober"; break;
  case 11: namaBulan = "November"; break;
  case 12: namaBulan = "Desember"; break;
  default: namaBulan = "Bulan tidak valid"; break;
}

// Switch-case untuk TAHUN (contoh 1990–2025)

switch (tahun) {
  case 1990: namaTahun = "1990"; break;
  case 1991: namaTahun = "1991"; break;
  case 1992: namaTahun = "1992"; break;
  case 1993: namaTahun = "1993"; break;
  case 1994: namaTahun = "1994"; break;
  case 1995: namaTahun = "1995"; break;
  case 1996: namaTahun = "1996"; break;
  case 1997: namaTahun = "1997"; break;
  case 1998: namaTahun = "1998"; break;
  case 1999: namaTahun = "1999"; break;
  case 2000: namaTahun = "2000"; break;
  case 2001: namaTahun = "2001"; break;
  case 2002: namaTahun = "2002"; break;
  case 2003: namaTahun = "2003"; break;
  case 2004: namaTahun = "2004"; break;
  case 2005: namaTahun = "2005"; break;
  case 2006: namaTahun = "2006"; break;
  case 2007: namaTahun = "2007"; break;
  case 2008: namaTahun = "2008"; break;
  case 2009: namaTahun = "2009"; break;
  case 2010: namaTahun = "2010"; break;
  case 2011: namaTahun = "2011"; break;
  case 2012: namaTahun = "2012"; break;
  case 2013: namaTahun = "2013"; break;
  case 2014: namaTahun = "2014"; break;
  case 2015: namaTahun = "2015"; break;
  case 2016: namaTahun = "2016"; break;
  case 2017: namaTahun = "2017"; break;
  case 2018: namaTahun = "2018"; break;
  case 2019: namaTahun = "2019"; break;
  case 2020: namaTahun = "2020"; break;
  case 2021: namaTahun = "2021"; break;
  case 2022: namaTahun = "2022"; break;
  case 2023: namaTahun = "2023"; break;
  case 2024: namaTahun = "2024"; break;
  case 2025: namaTahun = "2025"; break;
  default: namaTahun = "Tahun tidak valid"; break;
}

// Gabungkan hasil

let tanggalLahir = namaTanggal + " " + namaBulan + " " + namaTahun;

// Tampilkan
console.log("Tanggal lahir: " + tanggalLahir);
// Output: Tanggal lahir: 23 Februari 1999
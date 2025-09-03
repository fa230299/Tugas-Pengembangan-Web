let dataSiswa = [
    {nama:  "Rose", tinggi: 178},
    {nama:  "Magnolia",tinggi: 153},
    {nama:  "Daisy", tinggi: 165},
    {nama:  "Jasmine",tinggi: 161},
    {nama:  "Violet", tinggi: 159}
];

dataSiswa.forEach((item) => {
    console.log(`${item.nama} memiliki tinggi ${item.tinggi} cm`);
});
//Buatlah fungsi yang menerima 2 input angka
//dan mengembalikan nilai yang terbesar dari angka
//yang dimasukkan

function nilaiTerbesar(angka1, angka2) {
    return angka1 > angka2 ? angka1 : angka2;
}

let hasil = nilaiTerbesar(15, 9);  //panggil fungsi dengan input 15 dan 9
console.log(hasil);
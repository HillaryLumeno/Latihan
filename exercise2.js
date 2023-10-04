 //buatlah fungsi yang menerima input 2 angka 
 //dan mengembalikan nilai yang terbesar dari angka
 //yang dimasukkan
 //buat dalam bentuk IIFE dan Callback function 


  //fungsi untuk mengembalikan nilai terbesar dari dua angka
  function findMax(a, b){
    return a > b ? a : b;
  }

  //implementasi IIFE
  const num1 = 5;
  const num2 = 9;
  const maxNum = findMax(num1,num2);
  console.log('Nilai terbesar antara ${num1} dan $[num2} adalah ${maxNum}');
 

  //implementasi callback function
  function calculate(callback){
    const num1 = 12;
    const num2 = 8;
    const result = callback(num1, num2);
    console.log('Hasil callback: ${result}');
  }

  calculate(findMax); 
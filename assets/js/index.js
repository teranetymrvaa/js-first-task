// // Stringin trim metodu
// function mytrim(word) {
//   let newword = ""; // boş bir string tanımladık
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] !== " ") {
//       newword = newword + word[i];
//     }
//   }
//   return newword.length;
// }
// console.log(mytrim("    Hello  World"));
console.log("####################");

// Stringin trim metodu (task3)

// function mytrim(word) {
//   let firstletter = 0;
//   let lastletter = word.length - 1;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] !== " ") {
//       firstletter = i;
//       break;
//     }
//   }

//   for (let j = word.length - 1; j >= 0; j--) {
//     if (word[j] !== " ") {
//       lastletter = j;
//       break;
//     }
//   }

//   let newword = "";

//   for (let k = firstletter; k <= lastletter; k++) {
//     newword += word[k];
//   }
//   console.log(newword.length);
//   return newword;
// }

// console.log(mytrim("   Terane Teymurova   "));
console.log("####################");

// arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];
// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin
// minimumunun yerini dəyişən proqram tərtib edin. (custom yaz) (task4.1)

// arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];
// let cutarr = [];
// let tekarr = [];
// let max = 0;
// let min = arr[0];
// function customarr() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       cutarr.push(arr[i]);
//     } else {
//       tekarr.push(arr[i]);
//     }
//   }
//   for (let j = 0; j < cutarr.length; j++) {
//     if (cutarr[j] > max) {
//       max = cutarr[j];
//     }
//   }
//   for (let k = 0; k < tekarr.length; k++) {
//     if (tekarr[k] < min) {
//       min = tekarr[k];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === min) {
//       arr[i] = max;
//     } else if (arr[i] === max) {
//       arr[i] = min;
//     }
//   }
//   console.log(arr);

//   console.log(min);

//   console.log(max);

//   console.log(cutarr);
//   console.log(tekarr);
// }
// console.log(customarr(arr));
console.log("####################");

// Verilmis arrayin  daxilinde qiymeti (task4.2)
//  50 den cox olanlari array kimi qaytaran kod yaz

let arr = [
  { urunAdi: "Beyaz Ekmek", fiyat: 6.5, stok: 100, kategori: "Ekmek" },
  { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
  { urunAdi: "Domates", fiyat: 9.0, stok: 80, kategori: "Meyve ve Sebzeler" },
  { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
  {
    urunAdi: "Tavuk Göğsü",
    fiyat: 15.0,
    stok: 30,
    kategori: "Et ve Et Ürünleri",
  },
  { urunAdi: "Muz", fiyat: 56.0, stok: 40, kategori: "Meyve ve Sebzeler" },
  {
    urunAdi: "Ton Balığı",
    fiyat: 10.0,
    stok: 20,
    kategori: "Konserve ve Hazır Yiyecekler",
  },
  {
    urunAdi: "Ton Balığı",
    fiyat: 10.0,
    stok: 20,
    kategori: "Konserve ve Hazır Yiyecekler",
  },
  { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
  { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
  { urunAdi: "Çikolata", fiyat: 88.0, stok: 60, kategori: "Şekerleme" },
];
// let newarr = [];
// function price() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].fiyat > 50) {
//       newarr.push(arr[i]);
//     }
//   }
//   if (newarr.length === 0) {
//     return "fiyati 50 den cox olan mehsul yoxdur";
//   }
//   return newarr;
// }
// console.log(price());
console.log("####################");

// yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari yanlizca
// ekrana cixaran kod yaz    (task4.3)
// let newarr = [];

// function catacory() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].kategori === "Meyve ve Sebzeler") {
//       newarr.push(arr[i]);
//     }
//   }
//   if (newarr.length === 0) {
//     return "bele kateqoriyada mehsul yoxdur";
//   }
//   return newarr;
// }
// console.log(catacory());
console.log("####################");

// yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari
// ve stokda  50 den cox olanlari   ekrana cixaran kod yaz  (task 4.4)

// let newarr = [];

// function catacory() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].kategori === "Meyve ve Sebzeler" && arr[i].stok > 50) {
//       newarr.push(arr[i]);
//     }
//   }
//   if (newarr.length === 0) {
//     return "her iki serti odeyen mehsul yoxdur";
//   }
//   return newarr;
// }
// console.log(catacory());
console.log("####################");

// yuxaridaki arrayde   Sut adli mehsulun olub olmamasini yoxlayan   kod yaz (task 4.5)

// function milk() {
//   let find = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].urunAdi === "Süt") {
//       find = true;
//       break;
//     }
//   }
//   return "Süt varmi?-" + find;
// }
// console.log(milk());
console.log("####################");

// yuxaridaki arrayde   Ton baliginin indexini tapan program yaz  (task 4.6)
function findindex() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].urunAdi === "Ton Balığı") {
      return "Ton Baliginin indexi-" + i;
    }
  }
  return "Ton Baligi tapilmadi";
}
console.log(findindex());
console.log("####################");

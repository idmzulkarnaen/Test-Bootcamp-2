function palindrome(cek) {
  let awalKalimat = cek.toLowerCase();
  let kalimatTerbalik = "";

  for (let i = awalKalimat.length - 1; i >= 0; i--) {
    kalimatTerbalik += awalKalimat[i];
  }

  //   return kalimatTerbalik;
  //   return awalKalimat;
  //   return awalKalimat === kalimatTerbalik ? "palindrome" : "not palindrome";

  if (awalKalimat === kalimatTerbalik) {
    let hasil = `${awalKalimat}   #--> palindrome`;
    return hasil;
  } else {
    let hasil = `${awalKalimat}   #--> not palindrome`;
    return hasil;
  }
}

console.log(palindrome("radar"));
console.log(palindrome("malam"));
console.log(palindrome("kasur ini rusak"));
console.log(palindrome("ibu ratna antar ubi"));
console.log(palindrome("malas"));
console.log(palindrome("makan nasi goreng"));
console.log(palindrome("balonku ada lima"));

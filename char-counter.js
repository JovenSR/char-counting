function countLetters(str) {
  var obj = {};
  var char;
  var newStr = str.split(" ").join("");
  for(var i = 0; i < newStr.length; i++) {
     char = newStr[i];

    if(obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1
    }



  }
  return obj;

}



console.log(countLetters("hhhhhh llll ooo"));
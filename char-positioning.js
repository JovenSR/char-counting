function countLetters(str) {
  var obj = {};
  var char;
  var newStr = str.split("")
  for(var i = 0; i < newStr.length; i++) {
     char = newStr[i];

     if(!obj[char]) {
       obj[char] = [];
     }
      obj[char].push(i);






  }
  return obj;

}



console.log(countLetters("hello hi"));
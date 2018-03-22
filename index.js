const morseCode = (str) => {
  // let regex = /\s{4}/g;
  // let modStr = str.replace(regex, 'space');
  // console.log(modStr);
  const MORSE_CODE = { ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j", "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o", ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y", "--..": "z", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0", "|": " " };
  let words = str.split("  ");
  let letters = words.map(w => w.split(" "));
  let decodedArr = [];

  for (let i = 0; i < letters.length; i++) {
    decodedArr[i] = [];
    for (let j = 0; j < letters[i].length; j++) {
      if(MORSE_CODE[letters[i][j]]){
        decodedArr[i].push(MORSE_CODE[letters[i][j]]);
      }
    }
  }

  console.log(decodedArr.map(arr => arr.join('')).join(' '));
}

let str1 = '... .- -- ..- . .-..';
let str2 = '... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .';
// morseCode(str2);


const cesarCipher = (str) => {
  let modStr = str.toUpperCase();
  let words = modStr.split(' ');
  let letters = words.map(word => word.split(''));

  let charCode = letters.map(letter => {
    return letter.map(word => {
      let wordCode = word.charCodeAt(0) - 3;
      if(wordCode < 65) {
        wordCode = 90 - (65 - wordCode);
        return wordCode;
      }
      else {
        return wordCode;
      }
    });
  });

  let codeToStr = charCode.map(word => {
    return word.map(letter => {
      return String.fromCharCode(letter);
    });
  }).map(word => word.join('')).join(' ');

  console.log(codeToStr);
  return codeToStr;
}

let str3 = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
cesarCipher(str3);
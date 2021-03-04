module.exports = function toReadable (number) {
    if (number === 0) {
      return 'zero';
    }
    let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    number = String(number);
    let digit;
    let decimal;
    let hundred;
    
    if (number.length == 1) {
      digit = digits[number[0]];
      return digit;
    }

    if (number.length == 2) {
      if (number[0] == 1) {
        digit = digits[Number(number)];
        return digit;
      }
      decimal = decimals[number[0]];
      digit = digits[number[1]];
      if (number[1] == 0) {
        return decimal;
      }
      return decimal + ' ' + digit;
    }

    if (number.length == 3) {
      hundred = digits[number[0]] + ' hundred';
      if (number[1] == 1) {
        digit = digits[Number(number[1] + number[2])];
        return hundred + ' ' + digit;
      }
      decimal = decimals[number[1]];
      digit = digits[number[2]];
      if (number[1] == 0 && number[2] == 0) {
        return hundred;
      }
      if (number[1] == 0) {
        return hundred + ' ' + digit;
      }
      if (number[2] == 0) {
        return hundred + ' ' + decimal;
      }
      return hundred + ' ' + decimal + ' ' + digit;
    }



    /*
  for (i = number.length - 1; i >= 0; i--) {
    if (i === number.length - 1) {
      digit = digits[number[i]];
      console.log (digit);
    }
    
    if (i === number.length - 2) {
      decimal = decimals[number[i]];
      console.log (decimal);
    }

    if (i === number.length - 3) {
      hundread = digits[number[i]];
      console.log (hundread);
    }
  }
  return  hundread + ' hundred ' + decimal + ' ' + digit;
  */
  
}



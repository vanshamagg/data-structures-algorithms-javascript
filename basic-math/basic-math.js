//  Number of digits in a number
const numberOfDigits = (number)=> {
    const digits = Math.floor(Math.log10(number)) + 1;
    return digits;
} 

// a is divisor, b is dividend
const hcf = (a, b) => {

    if(a == 0)
        return b;

    return( hcf(b % a, a))
}



module.exports.hcf = hcf;
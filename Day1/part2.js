var fs = require("fs")

fs.readFile('./input.txt', 'utf8', (err, input) => {
    let split = input.split('')
    let len = split.length;

    let out = 0;

    for(i in split) {
        if(parseInt(split[i]) === parseInt(split[i + (len / 2) < len ? i + (len / 2) : i - (len - (len / 2))])) out += parseInt(split[i]), console.log(out)
    }

    console.log(out * 2)
})
var fs = require("fs")

fs.readFile('./input.txt', 'utf8', (err, input) => {
    if(err) console.log(err)

    let split = input.split('')

    let prev = null;
    let out = 0;

    for(i in split) {
        if(prev && prev === split[i]) out += parseInt(split[i]), console.log(out)

        prev = split[i]
    }

    console.log(out + 4)
})
var fs = require("fs")

fs.readFile('./input.txt', 'utf8', (err, input) => {
    if(err) console.log(err)

    let split = input.split('')

    let next = null;
    let out = 0;

    for(var i = 0; i < input.length; i++) {
        next = (i + 1) % split.length
        if(split[next] == split[i]) out += Number(split[i])
    }

    console.log(out)
})
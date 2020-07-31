const test01 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('a vem primeiro')
    }, 3000)
})

const test02 = new Promise((resolve, reject) => {
    resolve('b vem depois')
})

test01.then(function(res) {return console.log(res)})
    .then(function() { return test02})
    .then(function(res) { return console.log(res)})
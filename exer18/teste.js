let num = [2, 3, 5, 6, 1]


console.log(num)
console.log(num.sort())
console.log(num[0])

for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}

num.push(7)
console.log(num)


for (let pos in num){
    console.log(num[pos])
}

let a = num.indexOf(7)
console.log(`O valor está na posição ${a}.`)
const sum =function (a,b){
    console.log(a+b);
}

// sum(20,3);

const mul = function(a,b){
    console.log(a*b);
}


// module.exports = {
//     sum:sum,
//     mul:mul,
// };

console.log('module 1...')
const name = 'Harshit'
module.exports = {
    sum,
    mul,
    'name': name,
}


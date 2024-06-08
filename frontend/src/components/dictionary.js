

const array = ['puppy','puppy', 'cat', 'man', 'woman', 'man']



let arr = array.reduce((a,b,i,arree)=>{
    return {
        ...a,
        [b]: (a[b] || 0 )+1,

    }
},{}
)

let arr2 = array.reduce((a,b,i,arree)=>{
    return {
        ...a,
        [b]: (a[b] || [] ).push(b) 

    }
},{}
)



console.log('arr:\n',arr)
console.log('arr2:\n',arr2)
return arr
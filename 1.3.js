
function flat(arr){

    return arr.flatMap(e=>{
        if(e?.length>0){
            return(flat(e))
        }
        else{
            return e
        }
    })
}

let arr=[4,[[5],[6,[7],8],9,10]]

console.log(flat(arr))
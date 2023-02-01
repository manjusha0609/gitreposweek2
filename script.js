let arr1=[10,20,30]
let arr2=[...arr1]
arr1.push(40)
console.log(arr2)
console.log(arr1)
console.log(...arr1)
function sum(name,...b){
    let sum=0
    for( i in b)
    {
        //sum+=arguments[i]
        sum+=b[i]
    }
    return sum
}
// console.log(sum(10,20,"cvr",10,20))
// console.log(sum(10,20,"cvr"))
console.log(sum("cvr",10,20,30))
let name="Manjusha"
let age=20
let obj={
    name,
    age
}
console.log(obj)
let obj1={
    obj,
}
console.log(obj1)
let obj2=obj
console.log(obj2)
let obj3={
    name:"Manvitha",
    age,
    address:"Nakrekal",
    display:function(){
        console.log("this refers to: "+this)
        // setTimeout(function(){
        //     console.log("inside address: "+this.address+" this refers to: "+this)
        // }.bind(this),2000)
        setTimeout(()=>{
            console.log("inside address: "+this.address+" this refers to: "+this)
        })
    }
}
console.log(obj3.display())

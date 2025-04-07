

// 

// console.log(num); // 
// let num=10;

// for(let i=0;i<5;i++)
// {
// let user="ghbnj"
// }

// {
//     let age=10;

// }
// console.log(age); // 5 error undfined 4 

// // let name="ali";
// // let name="sayed";
// // console.log(pi);
// // const pi=3.14;
// // alert(pi)

let obj={
    name:"ali",
    age:22,
    user:{
        acount:111
    }
}
// let obj2={...obj,age:333,user:{...obj.user,blance:22}};
// // obj2.name=obj.name
// // obj2.age=obj.age
//  obj.name="sayed"
// console.log(obj2);
// let arr=[12,34,5,6,67]
// let arr2=[...arr,7777];
// // console.log(arr2);
// function sum(x,...rest)
// {   console.log(rest);
//     let sum=x;
//     for(let i=0;i<rest.length;i++)
//         sum+=rest[i]
//     return sum;
// }
// console.log(sum(1,2,1));
// let [a,,b]=arr;
// console.log(b);

// let {name:userName,age:userAge}=obj
// console.log(userName);

let numbers=[10,20,30,50,60,10,20,30];
// let s="hnjmk"
// for(let val of s)
// {
//     console.log(val);
    
// }

// for(let i in obj)
// {
//     console.log(`${i}:: ${obj[i].acount||obj[i]}`);
// }



// let s=new Set([41,551,521,1,10,2,1])
// s.add(223)
// alert(s.delete(223))
// for(let i of s)
// {
//     console.log(i);
// }
// let mp=new Map();
// mp.set(10,{name:"ahmed",age:22})
// mp.set(12,{name:"ahmesayedd",age:22})
// let now=new Date()
// mp.set(now,{name:"ahmed",age:22})


// for(let [key,values] of mp)
// {
//     console.log(values);
    
// }



let arr=[2,3,4,5,22,12,44]

let found=arr.findIndex(function(value)
{
    // console.log(rest);
    
     return value%2==1
})

let newArr=arr.filter(function(val)
{
    return val%2==0
})



let arr2=arr.map(function(val)
{
    return val+.2
})

console.log(arr2);

let divs=document.getElementsByTagName("div")
divss=Array.from(divs)

divss.forEach(function(element)  {
    

    element.onclick=function()
    {
        alert("uhjk")
    }
});
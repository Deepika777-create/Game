let n=prompt("enter the value of n");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((res,val)=>
{
    return res+val;
});
console.log(`sum is ${sum}`);
let prod=arr.reduce((res,val)=>
    {
        return res*val;
    });
    console.log(`product is ${prod}`);
    

    






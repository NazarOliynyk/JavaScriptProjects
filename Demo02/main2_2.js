/**
 * Created by user on 10.10.18.
 */
console.log('testHomeWork2_2');
console.log('--------------------------------------------------------');
console.log('Task-1');
let arr3=[];
for(let i=0;i<100;i++){
    if((i%2)!=0)
        arr3.push(i);
}
console.log(arr3);
console.log('--------------------------------------------------------');
console.log('Task-2');
let arr4=[];
for(let i=0;i<100;i++){
    if((i%2)==0)
        arr4.push(i);
}
console.log(arr4);
console.log('--------------------------------------------------------');
console.log('Task-3 Optional Solution');
let arr5=[];
for(let i=1;i<100;i+=2){
            arr5.push(i);
}
console.log(arr5);
console.log('--------------------------------------------------------');
console.log('Task-4 Optional Solution');
let arr6=[];
let i=0;
while (i<=100){
    if(i%2==0){
        arr6[i]=i;
    } i++;
}
console.log(arr6);
console.log('--------------------------------------------------------');
console.log('Task-5 Optional Solution');
let arr7=[];
for (i = 0; i <= 50; i++)
{
    arr7[i] = i*2;
    // console.log (arr7[i]);
}console.log (arr7);
console.log('--------------------------------------------------------');
console.log('Task-6 Optional Solution');
let arr = [];
let number = Math.floor(Math.random() * 1000);
for (let i = 0; i < 50; i++) {

    while (number % 2 != 0){
        number = Math.floor(Math.random() * 1000);
    }
    arr[i] = number;
    number = Math.floor(Math.random() * 1000);
    // console.log(arr[i]);
}console.log(arr);
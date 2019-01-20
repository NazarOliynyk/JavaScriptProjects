/**
 * Created by user on 10.10.18.
 */
console.log('testHomeWork');
console.log('Task-1');
let arr1=[2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
var i=0; // should be var instead of let
while (i<arr1.length){console.log(arr1[i]); i++;}
console.log('--------------------------------------------------------');
console.log('Task-2');
for(let arr1Var1 in arr1){console.log(arr1Var1, typeof arr1Var1);}
console.log('--------------------------------------------------------');

for(let arr1Var2 of arr1){console.log(arr1Var2);} // the difference between in and of !!!
console.log('--------------------------------------------------------');
console.log('Task-3');
var i=0;
while (i<arr1.length){
    if((i%2)!=0)
    console.log(arr1[i]+" i= "+i); i++;}
console.log('--------------------------------------------------------');
console.log('Task-4');
for(let arr1Var3 in arr1){
    if((arr1Var3%2)!=0)
    console.log(arr1Var3, typeof arr1Var3);}
console.log('--------------------------------------------------------');
console.log('Task-5');
var i=0;
while (i<arr1.length){
    if((arr1[i]%2)==0)
        console.log(arr1[i]); i++;}
console.log('--------------------------------------------------------');
console.log('Task-6');
for( let arr1Var4 of arr1){
    if((arr1Var4%2)==0)
        console.log(arr1Var4);
}
console.log('--------------------------------------------------------');
console.log('Task-7');
for(let i=0; i<arr1.length; i++){
    if((arr1[i]%3)==0) arr1[i]='okten';
}
console.log(arr1);
console.log('--------------------------------------------------------');
console.log('Task-8');
console.log(arr1.reverse());
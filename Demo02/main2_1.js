/**
 * Created by user on 10.10.18.
 */
console.log('testHomeWork');
console.log('Task-1');
let arr2=[2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
var i=arr2.length; // should be var instead of let
while (i>=0){console.log(arr2[i]); i--;}
console.log('--------------------------------------------------------');
console.log('Task-2');
for(let i=arr2.length-1; i>=0; i--){console.log(arr2[i]);}
console.log('--------------------------------------------------------');
console.log('Task-3');
var i=arr2.length;
while (i>=0){
    if((i%2)!=0)
        console.log(arr2[i]+" i= "+i); i--;}
console.log('--------------------------------------------------------');
console.log('Task-4');
for(let i=arr2.length-1; i>0; i--){
    if((i%2)!=0)
    console.log(arr2[i]);}
console.log('--------------------------------------------------------');
console.log('Task-5');
var i=arr2.length;
while (i>=0){
    if((arr2[i]%2)==0)
        console.log(arr2[i]); i--;}
console.log('--------------------------------------------------------');
console.log('Task-6');
for( let i=arr2.length-1; i>=0; i--){
    if((arr2[i]%2)==0){
        console.log(arr2[i]);}
}
console.log('--------------------------------------------------------');
console.log('Task-7');
for(let i=arr2.length-1; i>=0; i--){
    if((arr2[i]%3)==0) arr2[i]='okten';
    console.log(arr2[i]);
}
console.log('the look of an array is-');
console.log(arr2);
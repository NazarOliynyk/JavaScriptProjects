/**
 * Created by user on 09.10.18.
 */
console.log("test");
let serj= {
        name: 'Sergij',
        surname: 'Zuravlev',
        city: 'Lviv',
        age: 30,
        isSmoking: false,
        skills: ['js', 'java', 'mysql', 'mongo', 'php']
}
console.log(serj);
console.log(serj['age']);
console.log(serj.name);
console.log('--------------------------------------------------------');
let a =0; let b = a++;
console.log(a, b);
let a1 =0; let b1 = ++a1;
console.log(a1, b1);
console.log('--------------------------------------------------------');
for(let prop in serj){console.log(prop, typeof prop);}
console.log('--------------------------------------------------------');
let skills = serj.skills;
console.log(skills);
console.log('--------------------------------------------------------');
for(let currentSkill of skills){console.log(currentSkill)};
console.log('--------------------------------------------------------');
let fighters=[
    {name: 'sub-zero', power: 100},
    {name: 'scorpio', power: 110},
    {name: 'kitana', power: 90},
    {name: 'shao-kan', power: 190},
    {name:'sonia', power: 100},];

for(i=0; i<fighters.length; i++ )
{let fighter = fighters[i];
console.log(fighter);}
console.log('--------------------------------------------------------');
for(let fighter of fighters)
{if (fighter.power>100) console.log(fighter);}
console.log('--------------------------------------------------------');
for(let i=fighters.length-1; i>=0; i--){
    const fighter = fighters[i]; console.log(fighter);
    // console.log(fighters[i]);
}
console.log('--------------------------------------------------------');
var i=0; // should be var instead of let
while (i<fighters.length){console.log(fighters[i]); i++;}
console.log('--------------------------------------------------------');
do
{console.log('do while cycle');
} while (false);
console.log('--------------------------------------------------------');
let arr =[];
arr.push('oktenweb'); arr.push('hello'); arr.push('python'); // to the end
console.log(arr);
console.log('--------------------------------------------------------');
arr.unshift('to the beginning'); //to the beginning
console.log(arr);
console.log('--------------------------------------------------------');
arr.pop(); //delete the last
console.log(arr);
console.log('--------------------------------------------------------');
arr.shift(); //delete the first
console.log(arr);
console.log('--------------------------------------------------------');
console.log(arr.reverse());
console.log('--------------------------------------------------------');
let users=[
    {name:'vasya', age: 31, status: false},
    {name:'petya', age: 21, status: false},
    {name:'dimka', age: 44, status: true},
    {name:'yura', age: 48, status: true},
    {name:'lida', age: 28, status: false},
    {name:'sasha', age: 35, status: true},
    {name:'slavko', age: 38, status: true},
    {name:'oleg', age: 47, status: false},
    {name:'vitojk', age: 46, status: true},
    {name:'igor', age: 50, status: true},
    {name:'misha', age: 28, status: false},
];
var slice = users.slice(3, 6);
console.log(users);
console.log(slice); // it slices 3 items without changing the array
console.log(users);
console.log('--------------------------------------------------------');
var splice = users.splice(3, 6);
console.log(users);
console.log(splice); // it cuts 4 items forewer with changing even in this first console.log
console.log(users);
console.log('--------------------------------------------------------');
function addition (a, b) {
    let result = a+b; return result;
    }
console.log(addition(80, 25));





var kitty = {
    cute: true,
    hungrys: 0.8,
    lives: 9,
    fur: {
        fluffys: true,
        colour: "red",
    },
    threats: null, 
    meow: function meow(){
        return "meow";
    },
};

console.log(kitty.meow());

console.log(kitty.two);

kitty.lives++;
console.log(kitty);

kitty.two= 'two';
console.log(kitty);

console.log(kitty.future++);
console.log(kitty.lives / null);


kitty.fur.fluffys;


if(kitty.cute){
console.log('true?');
}else{
    console.log('false?');
}

for(key in kitty){
    console.log(key);
    kitty[key];
}

var x = {};
x.y = 12; //mutates object with assignment
x.z; //returns undefined
x.z() //thows an error by trying to invoke undefined as a function
x.z = function(){}; //method
x.z(); //invoke the z methof and returns undefined unless modified

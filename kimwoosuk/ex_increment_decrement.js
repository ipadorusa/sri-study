
    
var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = { 
    valueOf: function() {
        return -1;
    }
};

s1++;  //value becomes numeric 3
s2++;    //value becomes NaN
b++;    //value becomes numeric 1
f--;    //value becomes 0.10000000000000009
o--;    //value becomes numeric –2  

console.log(s1);
console.log(s2);
console.log(b);
console.log(f);
console.log(o);
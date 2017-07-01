var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = { 
    valueOf: function() {
        return -1;
    }
};

s1 = +s1;   //value becomes numeric 1
s2 = +s2;   //value becomes numeric 1.1
s3 = +s3;   //value becomes NaN
b = +b;     //value becomes numeric 0
f = +f;     //no change, still 1.1
o = +o;     //value becomes numeric –1

console.log(s1);
console.log(s2);
console.log(s3);
console.log(b);
console.log(f);
console.log(o);
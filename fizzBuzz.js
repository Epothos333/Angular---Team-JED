function fizzBuzzWoof(n){
	num = n.toString();
	var ans="";
	if (containOrDivisible(3)) {
		ans += "Fizz";
	};
	if (containOrDivisible(5)) {
		ans += "Buzz";
	};
	if (containOrDivisible(7)) {
		ans += "Woof";
	};
	if(!ans) {
		return n;
	};
  return ans;


function containOrDivisible(testNumber) {
	return num.indexOf(testNumber) !==-1 || n % testNumber ===0;
	};
};


for (var i = 1; i<= 100; i++) {
	console.log(fizzBuzzWoof(i));
};

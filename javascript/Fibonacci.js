//call this function to return n values of a finonacci series
const nthTerms = (n)=> {
	n = Math.abs(n); //get the absolute value of n so that the user doesnt parse in a negative number
	n = Math.floor(n); //prevent the user from parsing in a floating point number
	const series = new Array(n); //create a new array of size n
	const breakF = ()=> {
		//used to break the function
		return false;
	}
	n == 0?breakF(): true; //if 0 is passed as an agruement, the function returns false
	series[0] = 0; //assign the first item in series to 0 since thats the first item in a fibonacci series
	if (n == 1)return series; //if the user requestes the first value only return the array here
	series[1] = 1; //assign the second value of the series to 1 since the second value of a fibonacci series is 1
	if (n == 2)return series; //return the series here if the user only requested 2 terms

	for (let i = 2; i < n; i++) {
		//use a for loop to generate the next number of items in the series starting from the third item

		/*series[i-1] provides the last item in the array while series[i-2] returns the second to the last item in the array. It is then assigned to the next item of the series*/
		series[i] = series[i-1]+series[i-2];
	}
	return series; //return the series once the loop is complete
}
const fs = nthTerms(12); //call the function to generate n number of terms
console.log(fs); //print out the terms


//used to select a random item from an array or generate random number in javascript within a specific range 


const pickRandom = (list, num)=> {
	const tlist = typeof(list);
	const tnum = typeof(num);
	
	if(list==null&&num==null){//called without parametere
		return Math.random()
	}
	
  
  
  //console.log (typeof(list))

	const bollist = tlist === "object"
	const bolmin = tlist === "number"
	const bolmax = tnum == "number"
	//console.log (tlist)



	if (bollist) {
		const l = list.length; //length of array
		const r = Math.random(); //random number
		const p = r*100;
		const fp = Math.floor(p); //percentage
		const pofl = (fp/100)*l; //array percent
		const pick = Math.floor(pofl); //random index
		//console.log (pick);
		return list[pick]; //return random item

	} else if (bolmin && bolmax) {
		//min max
		var val = list-num;

		if (val < 0) {
			val = val*(-1);
			const r = Math.random();
			const rpm = (r*val)+list;
			return Math.floor(rpm);
		} else {

			const r = Math.random();
			const rpm = (r*val)+num;
			return Math.floor(rpm);


		}
	} else if (bolmin) {
		//one number

		const r = Math.random(); //random number
		const rpm = (r)*list;
		return Math.floor(rpm);
	}
}


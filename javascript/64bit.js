
// Generate Random 64 digit Hexadecimal Hash

function removeDup(array){
	arr=[]
	for(let i=0;i<array.length;i++){
		if(arr.includes(array[i])){
			
		}else{
			arr.push(array[i])
		}
	}
	
	return arr
}

//hex array
str="1,2,4,6,a,f,5,6,8,e,9,8,9,d,c,b,c,d,e,f,8,3,1,2,3,4,5,6,7,8,8,9,0"

hex=str.split(",")



//Hexa decimal array
hexF=removeDup(hex)


//pk generator function 

function genPK(self){
	//private key empty string
	pk=""
	
//randomly pick from self

for(i=1;i<=64;i++)	{
	//generate random number
	n=Math.random()
	
	
	//use random number to choose from the hexF array
	
	if(n<0.1){
	  pk+=self[1] ; 
	}
	else if(n<0.15){
	   pk+=self[2] ;
	}else if(n<0.2){
	    pk+=self[3];
	}else if(n<0.25){
	    pk+=self[4];
	}else if(n<0.3){
	    pk+=self[4];
	}else if(n<0.32){
	    pk+=self[5];
	}else if (n<0.38){
	    pk+=self[6];
	}else if(n<0.4){
	    pk+=self[7];
	}else if(n<0.42){
	    pk+=self[8]
	}else if(n<0.43){
	    pk+=self[9]
	
	}else if(n<0.5){
	    pk+=self[10]
	}else if(n<0.6){
	    pk+=self[11]
	}else if(n<0.63){
	    pk+=self[13]
	}
	else if(n<0.7){
	    pk+=self[12]
	}else if(n<0.78){
	    pk+=self[14]
	}else if(n<0.9){
	    pk+=self[15]
	}else if(n<1.1){
	    pk+=self[0]
	}
	
	
	
	
}
return pk
};
PK=genPK(hexF);

console.log (hexF);

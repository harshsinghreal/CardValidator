
//CREDIT CARD GENERATOR

let generate = document.querySelector(".generate")
let finalNum = document.querySelector(".valid_number")


let numberList = []
let processingNum = 0;
let valid = false;

const randomNum = () => {
	let one = Math.floor(Math.random() * 9)
	let two = Math.floor(Math.random() * 9)
	let three = Math.floor(Math.random() * 9)
	let four = Math.floor(Math.random() * 9)
	let five = Math.floor(Math.random() * 9)
	let six = Math.floor(Math.random() * 9)
	let seven = Math.floor(Math.random() * 9)
	let eight = Math.floor(Math.random() * 9)
	let nine = Math.floor(Math.random() * 9)
	let ten = Math.floor(Math.random() * 9)
	let eleven = Math.floor(Math.random() * 9)
	let twelve = Math.floor(Math.random() * 9)
	let thirteen = Math.floor(Math.random() * 9)
	let fourteen = Math.floor(Math.random() * 9)
	let fifteen = Math.floor(Math.random() * 9)
	let sixteen = Math.floor(Math.random() * 9)

	let ccNum = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen]


	for (let i = ccNum.length - 2; i >= 0; i -= 2) {
		numberList.push(ccNum[i] * 2)
	}
	console.log(numberList)
	for (let j = 0; j < numberList.length; j++) {
		if (numberList[j] > 9) {
			numberList[j] -= 9
		}
	}
	if (ccNum.length % 2 === 0) {
		console.log(numberList)
		for (let k = ccNum.length - 1; k >= 0; k -= 2) {
			numberList.push(ccNum[k])
		}
		console.log(numberList)
		for (let l = 0; l < numberList.length; l++) {
			processingNum += numberList[l]
		}
	} else {
		console.log(numberList)
		for (let k = ccNum.length - 1; k > 0; k -= 2) {
			numberList.push(ccNum[k])
		}
		console.log(numberList)
		for (let l = 1; l < numberList.length - 1; l++) {
			processingNum += numberList[l]
		}
	};
	console.log(processingNum)
	if (processingNum % 10 == 0) {
		valid = true;
		ccn.value = ccNum.join('');
	} else {
		valid = false;
	};

	console.log(valid)
	processingNum = 0;
	numberList = []
};

generate.addEventListener('click', () => {
	while (valid == false) {
		randomNum()
	};
	valid = false;
});


//VALIDATION RULE 
let authenticate = document.querySelector(".authenticate");
let ccn = document.querySelector(".ccn");
let verdict = document.querySelector(".verdict");
let card = document.querySelector(".card_type");
    
//testnumbers
const visa = 4539677908016808;
const amex = 371612019985236;

let numbers = []
let checkNum = 0;
let cardType = "";
let validity = "";


ccn.addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
    event.preventDefault();  
    authenticate.click();
  }        
});

const validateCred = check => {
 
  for(let i = check.length - 2; i >= 0; i-=2){ 
    numbers.push(check[i] * 2)
  }
  console.log(numbers)
  for(let j = 0; j < numbers.length; j++)
   {
    if(numbers[j] > 9)
    {
      numbers[j] -= 9
    }
   }
  if (check.length % 2 == 0)
  {
   console.log(numbers)
   for(let k = check.length - 1; k >= 0; k -= 2)
   {
    numbers.push(check[k])
   }
   console.log(numbers)
   for(let l = 0; l < numbers.length; l++)
   {
    checkNum += numbers[l]
   } 
  }
  else{
  console.log(numbers)
  for(let k = check.length - 1; k > 0; k -= 2){
    numbers.push(check[k])
  }
  console.log(numbers)
  for(let l = 1; l < numbers.length - 1; l++){
    checkNum += numbers[l]
  }
  };
  console.log(checkNum)
  if(checkNum % 10 == 0){
    validity = "*** Card Number is Valid ***";
  }else{
    validity = "Card Number is invalid";
  }
  if(checkNum == 0){
    validity = "*** Card Can't be of 0 Digit ***";
  }
    if(checkNum % 10 !== 0){
    cardType = "invalid";

//this list i had got from the internet (jss noida project)
  }else  if(check[0] == 0){
    cardType = "ISO/TC";
  }else  if(check[0] == 1){
    cardType = "Airlines";
  }else  if(check[0] == 4){
    cardType = "Visa";
  }else if((check[0] == 3)&&(check[1]==5)){
    cardType = "JCB";
  }else if((check[0] == 3)&&((check[1]==4)||(check[1]==7))){
    cardType = "Amex";
  }else if((check[0] == 3)||((check[0]==5)&&(check[1]==4))){
    cardType = "Diners Club";
  }else if((check[0] == 5)&&(check[1]==0)&&(check[2]==1)&&(check[3]==9)&&(check[4]==3)){
    cardType = "Dankort";
  }else if(    (check[0] == 5)&&((check[1]==0)||(check[1]==8))            ||  (check[0]==6) &&   (     ((check[1]==3)||(check[1]==7))    && (   ((check[2]==5)||(check[2]==6)||(check[2]==7))))){
    cardType = "Maestro";
  }else if((check[0] == 5)||(check[0] == 2)){
    cardType = "MasterCard";
  }else if((check[0] == 6)&&(check[1]==0)&&((check[2]==7)||(check[2]==8)||(check[2]==6))){
    cardType = "Rupay";
  }else if((check[0] == 6)&&(check[1]==2)){
    cardType = "UNIONPAY";
  }else if((check[0] == 6)&&(check[1]==3)){
    cardType = "InstaPay";
  }else if((check[0] == 6)&&(check[1]==7)){
    cardType = "Laser";
  }else if(check[0] == 6){
    cardType = "Discover";
  }else if(check[0] == 7){
    cardType = "Dankort";
   }else if(check[0] == 8){
    cardType = "Telecom..";

  
  }else{
    cardType = "UNKNOWN";
  };
};

authenticate.addEventListener('click', () => {
  let n = ccn.value
  var arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++){ arr[i] = +arr[i] | 0;
}
  ccn.value = "";
  validateCred(arr)
  checkNum = 0;
  numbers = [];
  verdict.innerHTML = validity;
  card.innerHTML = `--> Card type is ${cardType} <--`
});



/* 
Thank you for watching harsh singh card generator and validator program
Some thing that i use is luhn check steps below ---
1. Go from right to left with the help of making nested loop
2. every other number multiply by two
3. if number is > 9, (-9)
4. + all the numbers
5 divide by 10
6 if % is 0 return "true" or "valid"

You can check the algorithm from this image ---> https://codecademy-content.s3.amazonaws.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc+validator+diagram+1.svg
Or you may refer this article   ---->   https://www.freeformatter.com/credit-card-number-generator-validator.html#howToValidate
Or you can check the algorithm below
1. iterate from right to left
(make nested loop)
2. every other number multiply by two
3. if number is > 9, (-9)
4. + all the numbers
5 divide by 10
6 if % is 0 return "true" or "valid"
input.addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
     event.preventDefault();  
    authenticate.click();
  }        
});


Thanks and have a great day

      regards
""" Harsh Singh """

*/

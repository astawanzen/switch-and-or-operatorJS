//swicthes = statement that examines a value for a match against many case clauses. more efficient than many "else if" statements.

//change variable value to change the result.
//uncomment these code below!
/*let grade = 0;

switch (true) {
  case grade >= 90:
    console.log("You did great");
    break;
  case grade >= 80:
    console.log("You did good");
    break;
  case grade >= 70:
    console.log("You did okay");
    break;
  case grade >= 60:
    console.log("You almost passed");
    break;
  case grade >= 50:
    console.log("You failed!!!");
    break;

  //if there is no matching case then you can close it with default
  default:
    console.log(grade, "is not a letter");
};*/

// && || OR logical gives us ability to check more than one condition concurrently. && and both condition must be true
//|| or (either condition can be true)

//and && logical operator example. uncomment to run this code below.
//with && operator both condition must be true in order to execute this statement
//if one of them is false, then we don't (will execute the code within "else")

/*let temp = 15;//temperature
if(temp > 0 && temp < 30){
  console.log("the weather is good");
}
else{
  console.log("the weather is bad");
};*/

//or || operator uncomment to run these code below
//if one of these is true (temp <= 0 || temp >= 30) then we execute the if statement but the weather will be bad

/*let temp = 15;//temperature
if(temp <= 0 || temp >= 30){
  console.log("the weather is bad");
}
else{
  console.log("the weather is good");
};*/

//lets add more logical operator
let temp = 15;//temperature
let sunny = true;//boolean
//you can link more than one operator
if(temp > 0 && temp > 30 && sunny){
  console.log("the weather is good");
}
else{
  console.log("the weather is bad");
};

// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2024 - birthYear;
console.log(calcAge(1991));

//problem
const tempratures = [3, -2, -6, -1, 'errors', 9, 13, 17, 15, 14, 9, 5];



const calcTempsAmplitude = function(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i<temps.length; i++){
  const currTemp = temps[i];
  if(typeof currTemp!== 'number') continue;


    if(currTemp> max) max = currTemp;
    if(currTemp<min) min = currTemp;

  }
   console.log(max, min);
   return max-min;
  }

 const Amplitude = calcTempsAmplitude(tempratures);
 console.log(Amplitude);

 //problem 2
  // 1) function should now recieve 2 arrays of temps

  // understanding the problem
  // with 2 arrays should we implement the functionality twice?
  // no just merge two arrays at the beigining
  //2)  breaking up into sub problems
  // how to merge two arrays?

const calcTempsAmplitudeNew = function(t1, t2) {

const temps = t1.concat(t2 )
console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i<temps.length; i++){
  const currTemp = temps[i];
  if(typeof currTemp!== 'number') continue; 


    if(currTemp> max) max = currTemp;
    if(currTemp<min) min = currTemp;

  }
   console.log(max, min);
   return max-min;
  }

 const AmplitudeNew = calcTempsAmplitudeNew([5, 4, 3], [8, 1, 9]);
 console.log(AmplitudeNew);

const measureKelvin = function() {
 const measurement = {
     type: 'temp',
     unit: 'celsius',
     // C fix the bug
     //value: Number(prompt ('Degrees celsius'))
}
// B find the bug
//console.log(measurement);
console.table(measurement);
//console.warn(measurement.value);
//console.error(measurement.value);
//console.log(measurement.value);
 const kelvin = measurement.value + 273;
 return kelvin;
}
// identify the bug
console.log(measureKelvin());

// debugging example

const calcTempsAmplitudebug = function(t1, t2) {

  const temps = t1.concat(t2 )
  console.log(temps);
  
    let max = 0;
    let min = 0;
  
    for (let i = 0; i<temps.length; i++){
    const currTemp = temps[i];
    if(typeof currTemp!== 'number') continue; 
  
  
      if(currTemp> max) max = currTemp;
      if(currTemp<min) min = currTemp;
  
    }
     console.log(max, min);
     return max-min;
    }
  
   const Amplitudebug = calcTempsAmplitudebug([5, 4, 3], [8, 7, 9]);

   // A) identify the bug
   console.log(Amplitudebug);
  */

// Example
/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. 
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 
23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]


// 1) understanding the problem
// array transformed into string, separated by ...
// what is X days? index+1

// 2) breaking up into sub problems
// transform array into string
// transform each element into string with ºC
// string need to contain day (index+1)
// add... between element and start and end of the string


 const Data1 = [17, 21, 23];
 const Data2 = [12, 5, -5, 0, 4];

 console.log(`... ${Data1[0]}ºC...${Data1[1]}ºC...${Data1[2]}ºC...`);

const printForecast = function(arr) {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    str = str +`${arr[i]}ºC in ${i+1}days...`;
  }
  console.log('...' + str);
};

printForecast(Data1);


const Data2 = [12, 5, -5, 0, 4];

 console.log(`... ${Data2[0]}ºC...${Data2[1]}ºC...${Data2[2]}ºC...${Data2[3]}ºC...${Data2[4]}ºC`);

const printForecast = function(arr) {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    str = str +`${arr[i]}ºC in ${i+1}days...`;   
  }
  console.log('...' + str);
};

printForecast(Data2);
*/

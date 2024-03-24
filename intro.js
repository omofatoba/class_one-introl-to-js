//basic syntax and structure

//variables;

//var, let ,const

//let app = "i am good";




//console.log(app)


//strings

//let letter="i am good";

//console.log(typeof(letter))

//numbers

//let num=90.65;
//console.log(typeof(num))

//arrays

//let con=["am fred",35,["price",78]];

//console.log(con[2][1])

//objects;

//name and value pair
/* 
let obj={
    "age":35,
    'address':"12 kasali street",
    "likes":["sports","games"]
};

console.log(obj.likes[1]);
console.log(obj["age"])
 */

//control flow;

//loops and conditional statements;

//loops

//for loop,


/* for(let i=0; i < 5; i++){
console.log("am good")
}
 */

//while loop

/* let i=0;
while ( i<5) {
   console.log(i) ;

    i++;
} */

//do while loop
/* let i=0;
do {
 
    i++;
 console.log(i);

} while (i<6);
 */


//foreach loop


//conditional statements
/* let pk=6;

if (pk>6) {
  console.log("correct")  
}
else if(pk==7){
console.log("correct but equal")
}
else if(pk==5){
    console.log("not sure")
}

else{
    console.log("not correct");
} */

//else if(){

//}
//else{}
/* let pk=9;
switch (pk) {
    case 4:
        console.log("not true")
        break;

        case 7:
            console.log("true")
            break;
    default:
        console.log("default")
        break;
} */

//functions;

/* data();

function data(){
    console.log("hello")
}

 */

/* 
let da = 3;
if (da == 3) {
    pa()
} */
/* 
function pa(){
   console.log("hello world")
} */


/*
 let arr=["rice","spag","beans"];

arr.forEach(function(ele){
console.log(ele)
})
 */

/* var ayo="Ayo";

let bio = {

    "Name" : ayo,
    "Age" :45,
    "Dislike" : ["talking",'eating'],
   "Likes" : ["dancing", "balling"]

}
bio.Likes.forEach(function(element){
    console.log(element)
}) */

//TASK 1
/*  let firstName = "Seun"
let bioData = {
    "Name":firstName,
    "Hobby":["football","basketball","tenins","swiming"]

}
console.log(bioData)
console.log(firstName)
bioData.Hobby.forEach(function(element) {console.log(element)}) 

//TASK 2
 let firmUser =["Account 1",{"firstname":"Ade", "lastname": "Ayo", "Age": 45, "email":"adeayo@gmail", "Password":"akande"}]
 //console.log(firmUser)
 console.log(firmUser[1])  */


 //datatypes


 //strings numbers arrays object,null undefined, boolean;

 //date;


/*   let date = new Date();
  let getHour= date.getHours()
console.log(getHour)

let modate =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

let num=date.getMonth()

//console.log(modate[num]) 

let zod ={

   'Jan': 'Aries',
   'Feb': 'Taurus',
    'Mar' :'Gemini',
    'Apr': 'Cancer',
    'May' :  'Leo',
     'Jun' :'Virgo',
    'Jul' :'Libra',
    'Aug' :'Scorpio',
    'Sept' : 'Sagittarius', 
    'Oct':'Capricorn',
    'Nov':'Aquarius',
    'Dec' :'Pisces' 
}


 if (getHour<12) {
    console.log("Good morning")  
  }
  else if(getHour==12){
  console.log("Noon Day")
  }
  else if(getHour >12 && getHour<4 ){
      console.log("Good afternoon")
  }
  else if(getHour>4 && getHour<6){
    console.log("Good Evening")
  }
  
  else
  {
    console.log("Good Night")
  }
    //  console.log("not correct");

*/

/* let old=2000;

let current=new Date().getFullYear();

console.log(current-old) */

/* 
let USD = 100
console.log("$"+3*USD)
 */
/* 



let data=34;
let old=data.toString();
console.log(typeof(old))


let num="56";
let ty=Number(num);
console.log(typeof(ty)); */
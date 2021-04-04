// CHAPTER  17-20

// Task # 1

// var TwoDArray = [[],[]];

// Task # 2

// let matrix = [[0, 1, 2, 3],[ 1, 0, 1, 2],[ 2, 1, 0, 1]];
//   alert(matrix[0]+"\n"+matrix[1]+"\n"+matrix[2]);

// Task # 3

// for(var x =1 ; x <=10 ; x++){
//     document.writeln(x+"<br>");
// }

// Task # 4

// var a = +prompt("enter table number");
// var userTime = +prompt("Enter how many time you want to multiply");
// for(b = 1; b<=userTime; b++){
//     c=(a*b);
//     document.writeln(a+ " x " +b+ " = " +c +"<br>");
// }

// Task # 5

// var xyzArr = ["apple", "banana", "mango", "orange", "strawberry"];
// document.writeln("Elements of array are:".bold()+"<br>");
// for( var z = 0; z<xyzArr.length ; z++){
//     document.writeln(xyzArr[z]+"<br>");
// }
// for(var y = 0; y<xyzArr.length; y++){
//     document.writeln("<br>"+"Element at index "+y+" is "+xyzArr[y]+"<br>");
// }

// Task # 6

// var count = +prompt("Kahan tak counting chaheye?");
// document.writeln("Counting: ".bold()+"<br>");
// for(var c = 1; c<=count; c++){
//     document.writeln(c);
// }
// document.writeln("<br>"+"Reversed counting: ".bold()+"<br>");
// for(var r = count; r >0; r--){
//     document.writeln(r);
// }
// document.writeln("<br>"+"Even numbers: ".bold()+"<br>");
// for(var e = 0; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+" ");
//     }
// }
// document.writeln("<br>"+"Odd numbers: ".bold()+"<br>");
// for(var o = 0; o< c; o++){
//     if(o % 2 != 0){
//         document.writeln(" "+o+" ");
//     }
// }
// document.writeln("<br>"+"Series: ".bold()+"<br>");
// for(var e = 1; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+"k");
//     }
// }

// Task # 7

//  var ItemArr = ["cake", "biscuit", "cookie", "chips", "patty"]
// var que = prompt("Welcome to our bakery! Please enter the item you want. :)");
// que.toLowerCase();
// var find = ItemArr.includes(que);
// if (find == true){
//     alert("Yes "+que+ " is available");
// }
// else{
//     alert("Sorry! we dont have "+que);
// }

// Task # 8

// var LargeNumArr = [24, 53, 78, 91, 12];
// alert(Math.max(...LargeNumArr)+" is the largest number");

// Task # 9

// var SmallNumArr = [24, 53, 78, 91, 12];
// alert(Math.min(...SmallNumArr)+" is the smallest number");

// Task # 10

// document.writeln("Multiplies of 5:".bold());
// for (var x=1; x <= 100; x++){
// if( x % 5 == 0 ){
//     document.writeln(" "+x);
//     }
// }

//CHAPTER 21-25
//1
// var fname = prompt("Enter your first name: ");
// var lname = prompt("Enter your last name: ");
// alert("Welcome! "+fname+" "+lname);

//2
// var model = prompt("Enter you favorite mobile model: ");
// var length = model.length;
// document.writeln("My favorite mobile is: ".bold() +model+"<br>" + "Length of string is: ".bold() +length);

//3
// var string = "Pakistani";
// var indx = string.indexOf("n");
// alert("String: "+string+"\nIndex of n is: "+indx);

//4
// var string = "Hello World";
// var indx = string.lastIndexOf("l");
// alert("String: "+string+"\nIndex of last L is: "+indx);

//5
// var string = "Pakistani";
// var ind = string.charAt(3);
// alert("String: "+string+"\nCharacter at index 3 is: "+ind);

//6
// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var concat = fname.concat(lname);
// alert("Welcome "+concat);

//7
// var cityName = "Hyderabad";
// var newCity = cityName.replace("Hyder", "Islamabad");
// alert("City is: "+cityName+"\nUpdated City is: "+newCity);

//8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&");
// document.writeln("Message is: ".bold()+"<br>"+message+"<br>"+"Updated Message is: ".bold()+"<br>"+replace);

//9
// var string = "456";
// alert("The type of 456 is: "+typeof string);
// var num = Number(string);
// alert("Now The type of 456 is: "+typeof num);

//10
// var input = prompt("Enter some letters");
// var capletter = input.toUpperCase();
// alert("The input is: "+input+"\nUpper case: "+capletter);

//11
// var input = prompt("Enter some letters: ");
// alert("Title case: "+input[0].toUpperCase() +  input.slice(1));

//12
// var num = "35.36";
// alert("Number: "+num);
// num = num.replace(/\./g,"");
// alert("Result is: "+num);

//13
// var username = prompt("enter username")
// var a = /^[A-Za-z0-9 ]+$/
// var valid = a.test(username);
//         if (!valid) {
//             alert("Contains Special Characters.");
//         } else {
//             alert("Does not contain Special Characters.");
//         }

//14
// var items = ["cake", "biscuit", "cookie", "chips", "patty"]
// var message = prompt("Welcome to our bakery! Please enter the item you want. :)");
// message = message.toLowerCase();
// var check = items.includes(message);
// if (check == true){
//     alert("Yes "+message+ " is available at index: "+ items.indexOf(message));
// }
// else{
//     alert("WE ARE SORRY. PASTRY ARE NOT AVAILABLE IN OUR BAKERY "+message);
// }

//15
// var pass = prompt("enter password");
// var check =  /^[A-Za-z]\w{6,100}$/;
// if(pass.match(check)) 
// { 
// alert('Password Matched')
// }
// else
// { 
// alert('Password Not Matched')
// }

//16
// var university = "SSUET"
// var splitt = university.split("")
// for( var j = 0; j<university.length; j++){
//     document.writeln("<br>"+splitt[j])
// }

//17
// var input = prompt("Enter some word");
// var lastCharacter = input.charAt(input.length-1);
// alert("User Input: "+input+"\nLast character of input: "+lastCharacter);

//18

// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var occurance = text.match(/the/g);
// alert("there are "+occurance.length+" occurance(s) of word 'The'");
// function myFunction(){
//     let code = document.createElement('li');
//     let mylist = document.createTextNode('water bottle');
//     code.appendChild(mylist);
//     document.getElementById('list').appendChild(code)// chid node ma last ma add krwata ha
// }

function myFunction(){
     const list = document.getElementById('list');
    // list.removeChild(list.firstElementChild);     //first chid elemnets remove krwata ha
    while (list .hasChildNodes){
        list.removeChild(list.firstChild);          // Haschild apka all elements remove krta ha
    } 
}

// OBJECTS 


// let plana = {//propreties and keys ha object ki name,price etc.
//     name : "Laiba", 
//     price : 3.99,
//     space : 100,
//     transfer : 1000,
//     pages : 10
// }
// plana.price = 4.50
// delete plana.space// delete proprety ko delete an object propety
// console.log(plana);

// let plana2 = {
//     name : ["Professional","Basic"] ,
//     price : 5.99,
//     space : 500,
//     transfer : 5000,
//     pages : 50
// }
// console.log(plana2.name[1]);

// let plana3 = {
//     name : "Ultimate", 
//     price : 9.99,
//     space : 200,
//     transfer : 2000,
//     pages : 20
// }
// console.log(plana3);

// alert("The cost of the " + plana2.name + " package is $" + plana2.price + " per month.");

// function calcAnnual(percentIfDisc ) { 
//     var bestPrice = plan1.price; 
//     var currDate = new Date();
//      var thisMo = currDate.getMonth(); 
//      for (var i = 0; i < plan1.discountMonths.length; i++) {
//          if (plan1.discountMonths[i] === thisMo) { bestPrice = plan1.price * percentIfDisc ; 
//            } break; 
//      }
//   return bestPrice * 12; 
//  }

// const person = {};

// person.name ="jhon";
// person.age = 50;
// person.email = 'jhon@gmail;.com';
// document.getElementById('demo').innerHTML = person.name + " is "+ person.age + " years old";

// Classes 
// class is aprogram code templet and blueprint for creating object . these object will have some  state variables and some  behaver 

class myClass {
    start(){ // method hota ha
    console.log('start');
    }
    stop(){
        console.log('stop');
    }
}
console.log(myClass);


/// class sa object ki traf move krn k liy 

let fortuner = new myClass();// new keyword object ko denote krwata ha 
let lexuse = new myClass();
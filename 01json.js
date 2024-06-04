// Defines two objects with the same properties without order:
const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };

// Using Stringify and Object.key method:
 let str1 = JSON.stringify(obj1,Object.keys(obj1));
  // console.log(str1);
 let str2 = JSON.stringify(obj2,Object.keys(obj2));
 // console.log(str2);

 let prop = str1[0];

 // Using For loop:
 for (let i = 0; i < str1.length; i++) {
   let prop = str1[0];
 //console.log(str1[i]);
}

// Using Conditional Statement:
// If the value of a property in str1 is match the value of the corresponding property in str2, the objects are same:
  if (str1[prop] === str2[prop]){
    console.log("The JSON objects are  equal");
  }
  else{
     console.log("The JSON objects are not equal");
  }
 


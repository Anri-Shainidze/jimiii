


const students = [


    { name: "juza", age: 17 },
    { name: "otar", age: 19 },
    { name: "nugzari", age: 15 }
  

];
  
const newyear = students.map(
    student => {
    const newAge = student.age + 1;
    const status = newAge < 18 ? "arasrulwlovani" : "srulwlovani";
    
    return {
         ...student, age: newAge, status: status 
        };
});
  
  console.log(newyear);





const products = [
    

    { name: "Laptop", category: "electronics", price: 1200 },
    { name: "Shirt", category: "clothing", price: 40 },
    { name: "Headphones", category: "electronics", price: 80 },
    { name: "Smartphone", category: "electronics", price: 800 }
];


const filteredProducts = products.filter(
    product => 
    product.category === "electronics" && product.price > 80
);

//vegar gavagrdzele sashualo ro shevkribo
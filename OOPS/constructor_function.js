//constructor function working
 
function car(make,model,color){
    this.make=make;//here the first make is a variable and the second one is the argument and we use this keyword is because we will create many object using this constructor 
    this.model=model;  
    this.color=color;
    
}

// const myCar= car('TATA','Harrier','black')
// const myCar2= car('toyota','fortuner','black')
//here when I created these two objects it firstly shows the myCar but when I created the second one then it overrides the value 

//so we have to use 'NEW' keyword for remove this overriding

const myCar= new car('TATA','Harrier','black')
const myCar2=new car('toyota','fortuner','black') 
console.log(myCar)
console.log(myCar2)
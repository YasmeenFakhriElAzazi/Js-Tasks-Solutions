// task 1 

let book = {
    title : "Ekadoly" ,
    author : "Hanan Lashin" ,
    year  : 2015 ,
    genre : "policy"
}

console.log(`
            Book title : ${book.title}, 
            Author name : ${book.author}, 
            Bublish year : ${book.year}, 
            Book genre : ${book.genre}`
        );

book.title = "Amanous" ; 
console.log(book);

book.source = "Egypt" ;
console.log(book);


//task 2

let books =[
    {
        title : "Ekadoly" ,
        author : "Hanan Lashin" ,
        year  : 2015 ,
        genre : "policy"
    },
    {
        title : "Obal" ,
        author : "Hanan Lashin" ,
        year  : 2016 ,
        genre : "policy"
    },
    {
        title : "Amanous" ,
        author : "Hanan Lashin" ,
        year  : 2017 ,
        genre : "policy"
    }
] ;
//using for 
for(let i =  0  ; i <3  ; i++){
   console.log(`
    Book title : ${books[i].title} , 
    Author name : ${books[i].author} , 
    Bublish year : ${books[i].year} , 
    Book genre : ${books[i].genre}`);
  
}
//using for..of 
for (let book of books) {
    console.log(`
            Book title : ${book.title} , 
            Author name : ${books.author} , 
            Bublish year : ${books.year} , 
            Book genre : ${books.genre}`
        );
  
}


//task 3 

//1
let staff = new Set(["Manager" , "Chief" ,"Waiter"])  ;
//2
staff.add("Dustman") ;
//3
for (const role of staff) {
        console.log(role);   
}
//4
console.log( staff.has("Manager"));
//5
staff.delete("Dustman");

for (const role of staff) {
    console.log(role);   
}
//6
console.log(staff.size); 


//task 4 

//1
let restaurent = new Map() ;
 restaurent
            .set("Opening Hour" , "10 AM")
            .set("Closing Hour" , "10 PM")
            .set("staff" , ['Ahmed' , 'Ali' , 'Eman' , 'Yasmeen'])
            .set("Available Dishes" , ['Pizza', 'Pasta' , 'Salad' , 'Burger']) 
//2            
console.log(`Opening Hours : ${restaurent.get('Opening Hour')}`);
console.log(`Closing Hours : ${restaurent.get('Closing Hour')}`);
console.log(`Staff Members : ${restaurent.get('staff')}`);
console.log(`Available Dishes : ${restaurent.get('Available Dishes')}`);

//3
function isRestaurantOpen(currentTime) {
    let time  = currentTime.split(":") ;
    let amORpm = time[2].split(" ")[1] ;
    
    if(amORpm === "am" && Number(time[1]) >= 10) console.log("Restaurent opening");
    else if(amORpm === "pm" && Number(time[1]) <= 10) console.log("Restaurent Opening");
    else console.log("Restaurent Closed ");
    
}

isRestaurantOpen("05:01:40 pm")

//4
function removeDish(dish){
    let dishes = restaurent.get("Available Dishes")  ;
    let indexOfDish = dishes.indexOf(dish) ;
    if(indexOfDish !== -1){
        dishes.splice(indexOfDish , 1 )
        restaurent.set("Available Dishes" , dishes)
        console.log(`${dish} is aleready removed from available dishes`);
           
    }else{
        console.log(`${dish} is not found in available dishes`);
        
    }
    
} 
removeDish("chicken")
console.log('Available Dishes:', restaurent.get('Available Dishes').join(', '));



//task 5 

// 1
let dailySpecial = "Today's special is Spaghetti with Meatballs";
console.log(`Main String : ${dailySpecial}`);

// 2
let upperCaseSpecial = dailySpecial.toUpperCase();
console.log(`UpperCase : ${upperCaseSpecial}`);

// 3
let replacedSpecial = dailySpecial.replace("Spaghetti", "Pizza");
console.log(`After Replace : ${replacedSpecial}`);

// 4
let words = replacedSpecial.split(" ");
console.log(`Words : ${words}`);

// 5
let noSpaces = replacedSpecial.replace(/\s/g, ""); //  \s  refer to white spaces   , g tell replace method to search and replace all occurrences of the pattern not only first one 
console.log(`String with no spaces : ${noSpaces}`);

// 6
let hyphenJoined = words.join("-");
console.log(`Joined with hyphen : ${hyphenJoined}`);

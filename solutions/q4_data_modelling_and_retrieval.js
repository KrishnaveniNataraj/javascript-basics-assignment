// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

let fruits,storeFruits,fruitDetails;
fruits=[{name:'Apple',color:'Red',PricePerKg:100},{name:'Orange',color:'orange',PricePerKg:50},
{name:'Mango',color:'yellow',PricePerKg:80},{name:'grapes',color:'black',PricePerKg:65}];
storeFruits={};
for(item of fruits){
    storeFruits[item.name]=item;
    }

function GetFruits(fruitName){
    fruitDetails=storeFruits[fruitName];
    if(fruitDetails){
        return "Color of the  fruit is"+fruitDetails.color + " The price of fruit is"+
        fruitDetails.PricePerKg;
   }
   else{
       return " invalid fruit name";
   }
}
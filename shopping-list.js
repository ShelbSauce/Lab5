var myList = [
{
  name: "Chicken ",
  price: 12.99
},
{
  name: "Cheese ",
  price: 6.55
},
{
  name: "Milk ",
  price: 2.55
},
{
  name: "Avacado ",
  price: .99
},
{
  name: "Broccoli ",
  price: 4.55
}
]

var total=0;

myList.forEach(function(items){
	console.log(items.name + "= " + "$" + items.price);
	total += items.price;
});
console.log("Total = " + "$" + total)

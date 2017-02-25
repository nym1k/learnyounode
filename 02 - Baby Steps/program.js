// Collect arguements
var args = process.argv;
// Initialise total variable
var total = 0;
// Starting with the second item, iterate through the array
for (i = 2; i < args.length; i++) {
  // Add the ith arguement to the total variable
  total += Number(args[i]);
}
// Log the total to the console
console.log(total);

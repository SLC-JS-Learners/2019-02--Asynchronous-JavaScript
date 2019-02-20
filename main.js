// // introductory callback example
// const sum = (a, b) => a + b;
// const diff = (a, b) => a - b;

// const calculate = (callback, a, b) => {
// 	const result = callback(a, b);
// 	console.log(callback, `of ${a} and ${b} equals ${result}`)
// }

// calculate(sum, 40, 2);
// calculate(diff, 80, 38);


/* CONVENIENCE FUNCTIONS */
// generate a variable amount of lag for each waiting period
const lag = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

// generate a variable amount of lag for each waiting period
const minPizzaLag = 1000;
const maxPizzaLag = 2000;

// generate a boolean representing whether a pizza has
// actually been been made
let pizzaProbability = 95;
const pizzaMakingEvent = () =>
	Math.random() * 100 > 100 - pizzaProbability;

// convenience log functions
const orderPlaced = (id) => {
	console.time(id)
	console.log(`Order placed at ${new Date()}`)
}
const orderServed = (id) => {
	console.log(`Served the table pizzas at ${new Date()}`)
	console.timeEnd(id)
}
const oops = (error) => console.log('I\'m sorry to have to tell you, but there\'s been a problem in the kitchen folks, specifically', error)


// generate a variable amount of lag for each waiting period
const minCleanLag = 100;
const maxCleanLag = 2500;

// generate a boolean representing whether a kid has actually
// cleaned their room or not
let roomCleaningProbability = 75;
const roomCleaningEvent = () =>
	Math.random() * 100 > 100 - roomCleaningProbability;

// convenience console.log functions
const log = (msg) => console.log(msg)
const rewardIndividual = (result) => console.log(result + ', Great job!')
const punishIndividual = (err) => console.log(err + ', You\'re grounded for the week!')
const logInFamilyCalendar = () => console.log('result recorded in family journal');
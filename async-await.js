pizzaProbability = 97; // declared in main.js

/* Similar promise that we previously used */
function makeModernPizza (customer) {
	return new Promise( function(resolve, reject) {
		setTimeout( function() {

			const pizzaHasBeenMade = pizzaMakingEvent();
			console.log(`${customer}'s pizza has been made:`, pizzaHasBeenMade);

			if (pizzaHasBeenMade) {
				resolve(customer + ' Success! ');
			}
			else {
				reject('there was a problem with ' + customer + '\'s pizza.');
			}

		}, lag(maxPizzaLag, maxPizzaLag));
	})
}












// async function serveTableFromSingleSmallOven() {
// 	orderPlaced('sequential-async-await');
// 	// Sequential
// 	// there's only one oven, so each pizza needs to be made and cooked
// 	// before the next pizza
// 	// and we only want to serve once they're all cooked
// 	try {
// 		let alicePizzaMade = await makeModernPizza('Alice');
// 		let bobbyPizzaMade = await makeModernPizza('Bobby');
// 		let charliePizzaMade = await makeModernPizza('Charlie');
// 		orderServed('sequential');
// 		// console.log(alicePizzaMade)
// 		// console.log(bobbyPizzaMade)
// 		// console.log(charliePizzaMade)
// 	} catch (error) {
// 		oops(error)
// 	}
// }
// serveTableFromSingleSmallOven('sequential-async-await')










// /* NOTE: Not Async-Await, just a promise version of the Pizza Making example */
// function serveTableFromMultipleLargeOvens() {
// 	orderPlaced('consecutive-async-await')
// 	// Mostly consecutive
// 	// there are lots of ovens, so each pizza can be made and cooked
// 	// at the same time as the other's pizzas
// 	// but we still only want to serve once they're all cooked
// 	let alicePizzaMade = makeModernPizza('Alice');
// 	let bobbyPizzaMade = makeModernPizza('Bobby');
// 	let charliePizzaMade = makeModernPizza('Charlie');
// 	// console.log(alicePizzaMade)
// 	// console.log(bobbyPizzaMade)
// 	// console.log(charliePizzaMade)
// 	Promise.all([
// 		alicePizzaMade,
// 		bobbyPizzaMade,
// 		charliePizzaMade,
// 	])
// 	.then(() => {
// 		orderServed('consecutive-async-await')
// 		// console.log(alicePizzaMade)
// 		// console.log(bobbyPizzaMade)
// 		// console.log(charliePizzaMade)
// 	})
// 	.catch((error) => {
// 		oops(error)
// 	})
// }
// serveTableFromMultipleLargeOvens()
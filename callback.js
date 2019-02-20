pizzaProbability = 97; // declared in main.js

/* Our asynchronous function that takes a callback */
function makeClassicPizza (customer, callback) {
	 /* setTimeout is used to simulate unknown delay */
	setTimeout( function() {

		const pizzaHasBeenMade = pizzaMakingEvent();
		console.log(`${customer}'s pizza has been made:`, pizzaHasBeenMade);

		if (pizzaHasBeenMade) {
			callback ({
				status: 'success',
				msg: customer + ' Success! ',
			});
		}
		else {
			callback ({
				status: 'failure',
				msg: 'there was a problem with ' + customer + '\'s pizza.',
			});
		}

	}, lag(minPizzaLag, maxPizzaLag));
}


// function serveTableSingleCustomer() {
// 	orderPlaced('single');

// 	makeClassicPizza('Alice', result => {
// 		if (result.status === 'success') {
// 			let alicePizzaMade = result;
// 			console.log(alicePizzaMade.msg)
// 			orderServed('single')
// 		} else {
// 			oops(result.msg)
// 		}
// 	})
// }
// serveTableSingleCustomer()


// function serveTableFromSingleSmallOven() {
// 	orderPlaced('sequential-callbacks');
// 	// Sequential
// 	// there's only one oven, so each pizza needs to be made and cooked
// 	// before the next pizza
// 	// and we only want to serve once they're all cooked

// 	let alicePizzaMade = undefined;
// 	let bobbyPizzaMade = undefined;
// 	let charliePizzaMade = undefined;

// 	makeClassicPizza('Alice', aliceResult => {
// 		if (aliceResult.status === 'success') {
// 			alicePizzaMade = aliceResult;
// 			makeClassicPizza('Bobby', bobbyResult => {
// 				if (bobbyResult.status === 'success') {
// 					bobbyPizzaMade = bobbyResult;
// 					makeClassicPizza('Charlie', charlieResult => {
// 						if (charlieResult.status === 'success') {
// 							charliePizzaMade = charlieResult;
// 							orderServed('sequential-callbacks')
// 							// console.log(alicePizzaMade.msg)
// 							// console.log(bobbyPizzaMade.msg)
// 							// console.log(charliePizzaMade.msg)
// 						} else {
// 							oops(charlieResult.msg)
// 						}
// 					})
// 				} else {
// 					oops(bobbyResult.msg)
// 				}
// 			})
// 		} else {
// 			oops(aliceResult.msg)
// 		}
// 	})
// }
// serveTableFromSingleSmallOven()


// function serveTableFromMultipleLargeOvens() {
// 	orderPlaced('consecutive-callbacks')
// 	// Mostly consecutive
// 	// there are lots of ovens, so each pizza can be made and cooked
// 	// at the same time as the other's pizzas
// 	// but we still only want to serve once they're all cooked
// 	let alicePizzaMade = undefined;
// 	let bobbyPizzaMade = undefined;
// 	let charliePizzaMade = undefined;

// 	function isOrderDone() {
// 		if (alicePizzaMade && bobbyPizzaMade && charliePizzaMade) {
// 			if (alicePizzaMade.status === 'success' &&
// 				 bobbyPizzaMade.status === 'success' &&
// 				 charliePizzaMade.status === 'success') {
// 				orderServed('consecutive-callbacks')
// 				// console.log(alicePizzaMade)
// 				// console.log(bobbyPizzaMade)
// 				// console.log(charliePizzaMade)
// 			} else if (alicePizzaMade.status === 'failure' ||
// 				 bobbyPizzaMade.status === 'failure' ||
// 				 charliePizzaMade.status === 'failure') {
// 				console.log('Sorry, the table\'s gonna be hungry for a while longer while we start from scratch.')
// 			}
// 		}
// 	}

// 	makeClassicPizza('Alice', aliceResult => {
// 		if (aliceResult.status === 'success') {
// 			alicePizzaMade = aliceResult;
// 			isOrderDone();
// 		} else {
// 			oops(aliceResult.msg)
// 		}
// 	})

// 	makeClassicPizza('Bobby', bobbyResult => {
// 		if (bobbyResult.status === 'success') {
// 			bobbyPizzaMade = bobbyResult;
// 			isOrderDone();
// 		} else {
// 			oops(bobbyResult.msg)
// 		}
// 	})

// 	makeClassicPizza('Charlie', charlieResult => {
// 		if (charlieResult.status === 'success') {
// 			charliePizzaMade = charlieResult;
// 			isOrderDone();
// 		} else {
// 			oops(charlieResult.msg)
// 		}
// 	})
// }
// serveTableFromMultipleLargeOvens()
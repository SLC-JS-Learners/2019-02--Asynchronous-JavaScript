roomCleaningProbability = 75; // declared in main.js


/* Setting up a promise that can be subsequently used */
function cleanRoom (kid) {
	/*
	- `new` creates a new object that inherits from the
	  specified Constructor, in this case Promise
	- `resolve` is our success callback
	- `reject` is our failure callback
	*/
	return new Promise( function(resolve, reject) {
	 /* setTimeout is used to simulate unknown delay */
	 setTimeout( function() {

		const roomWasCleaned = roomCleaningEvent();
		console.log(`\n${kid} cleaned his/her room:`, roomWasCleaned);

		if (roomWasCleaned) {
			resolve('(Success) ' + kid);
		}
		else {
			reject('(Failure) ' + kid);
		}

	 }, lag(minCleanLag, maxCleanLag));
  })
}




// /* Using a promise */
// let aliceCleansRoom = cleanRoom('Alice'); // our promise object
// aliceCleansRoom // how we handle our promise's response
// 	.then(
// 		// onResolved
// 		function(result) {
// 			console.log(result + ', Good job!')
// 		},
// 		// onRejected
// 		function(err) {
// 			console.log(err + ', You\'re grounded!')
// 		}
// 	);








// aliceCleansRoom
// 	.then(
//     rewardIndividual, // onResolved
//     punishIndividual  // onRejected
//   )
// 	.finally(logInFamilyCalendar);






// const bobbyCleansRoom = cleanRoom('Bobby');
// bobbyCleansRoom
// 	.then(rewardIndividual)  // onResolved
// 	.catch(punishIndividual) // onRejected
// 	.finally(logInFamilyCalendar);

// const charlieCleansRoom = cleanRoom('Charlie');
// charlieCleansRoom
// 	.then(rewardIndividual)
// 	.catch(punishIndividual)
// 	.finally(logInFamilyCalendar);








// Promise.all([
// 	aliceCleansRoom,
// 	bobbyCleansRoom,
// 	charlieCleansRoom
// ])
// .then(() => log('\nFAMILY STATUS: Ice Cream Store, here we come!\n\n'))
// .catch(err => log(`\nFAMILY STATUS: ${err}`));

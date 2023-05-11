// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const dateInput = document.querySelector('#date');
// const presentInput = document.querySelector('#present');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const name = nameInput.value;
// 	const date = dateInput.value;
// 	const present = presentInput.checked;

// 	// Do something with the attendance data, such as storing it in a database or spreadsheet

// 	alert(`Attendance submitted for ${name} on ${date}. Present: ${present}`);
// });

//SECOND ATTEMPT------------------------------------------------------------------------------------------------
// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const dateInput = document.querySelector('#date');
// const presentInput = document.querySelector('#present');

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	const name = nameInput.value;
// 	const date = dateInput.value;
// 	const present = presentInput.checked;

// 	// Send attendance data to Google Spreadsheet
// 	const url = 'https://script.google.com/macros/s/{YOUR_SCRIPT_ID}/exec'; // Replace {YOUR_SCRIPT_ID} with your Google Script ID
// 	fetch(`${url}?name=${name}&date=${date}&present=${present}`)
// 		.then(response => {
// 			if (response.ok) {
// 				alert('Attendance submitted successfully!');
// 			} else {
// 				alert('Error submitting attendance.');
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error);
// 			alert('Error submitting attendance.');
// 		});
// });
// THIRD ATTEMPT---------------------------------------------------------------------------------------------------------
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const presentInput = document.querySelector('#present');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const name = nameInput.value;
	const date = dateInput.value;
	const present = presentInput.checked;

	// Send attendance data to Google Spreadsheet
	const url = 'https://script.google.com/macros/s/{YOUR_SCRIPT_ID}/exec'; // Replace {YOUR_SCRIPT_ID} with your Google Script ID
	fetch(`${url}?name=${name}&date=${date}&present=${present}`)
		.then(response => {
			if (response.ok) {
				alert('Attendance submitted successfully!');
				// Open the spreadsheet in a new tab
				window.open('https://docs.google.com/spreadsheets/d/{1X4ZDpE2lDzULk4EyCgt35ivAdPU1KCdDf3TTrEaDLoc}', '_blank'); // Replace {YOUR_SPREADSHEET_ID} with your Google Spreadsheet ID
			} else {
				alert('Error submitting attendance.');
			}
		})
		.catch(error => {
			console.error(error);
			alert('Error submitting attendance.');
		});
});


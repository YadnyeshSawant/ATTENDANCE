// const form = document.querySelector('form');
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
			} else {
				alert('Error submitting attendance.');
			}
		})
		.catch(error => {
			console.error(error);
			alert('Error submitting attendance.');
		});
});

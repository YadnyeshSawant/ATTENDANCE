const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const presentInput = document.querySelector('#present');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const name = nameInput.value;
	const date = dateInput.value;
	const present = presentInput.checked;

	// Do something with the attendance data, such as storing it in a database or spreadsheet

	alert(`Attendance submitted for ${name} on ${date}. Present: ${present}`);
});

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
// 	const url = 'https://script.google.com/macros/s/1Di-7j9MnzyUPLQQOZGZedFN95NRE4pByPXA5NsVDUWhajsByI0qieisQ/exec'; // Replace {YOUR_SCRIPT_ID} with your Google Script ID
// 	fetch(`${url}?name=${name}&date=${date}&present=${present}`)
// 		.then(response => {
// 			if (response.ok) {
// 				alert('Attendance submitted successfully!');
// 				// Open the spreadsheet in a new tab
// 				window.open('https://docs.google.com/spreadsheets/d/1X4ZDpE2lDzULk4EyCgt35ivAdPU1KCdDf3TTrEaDLoc', '_blank'); // Replace {YOUR_SPREADSHEET_ID} with your Google Spreadsheet ID
// 			} else {
// 				alert('Error submitting attendance.');
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error);
// 			alert('Error submitting attendance.');
// 		});
// });
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const presentInput = document.querySelector('#present');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const name = nameInput.value;
	const date = dateInput.value;
	const present = presentInput.checked;

	// Add attendance data to an array
	const data = [
		['Name', 'Date', 'Present'],
		[name, date, present ? 'Yes' : 'No']
	];

	// Create a new Excel workbook
	const workbook = XLSX.utils.book_new();

	// Add the attendance data to a new Excel worksheet
	const worksheet = XLSX.utils.aoa_to_sheet(data);
	XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');

	// Convert the workbook to a binary Excel file
	const excelFile = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});

	// Save the binary Excel file as a local file using FileSaver.js
	const fileName = `Attendance_${date}.xlsx`;
	saveAs(new Blob([s2ab(excelFile)], {type: "application/octet-stream"}), fileName);
});

// Convert a string to an ArrayBuffer
function s2ab(s) {
	const buf = new ArrayBuffer(s.length);
	const view = new Uint8Array(buf);
	for (let i=0; i<s.length; i++) {
		view[i] = s.charCodeAt(i) & 0xFF;
	}
	return buf;
}



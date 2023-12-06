// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


/*let currentPage = 1; // Start from the first page

document.addEventListener('DOMContentLoaded', () => {
	// Add event listeners to each next button
	let buttons = document.querySelectorAll('.nextButton');
	buttons.forEach(button => {
		button.addEventListener('click', showNextPage);
	});
});

function showNextPage() {
	// Hide the current page
	document.getElementById("page" + currentPage).style.display = 'none';

	// Increment the page count
	currentPage++;

	// Show the next page
	document.getElementById("page" + currentPage).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
	// Add event listeners to each next button
	let buttons = document.querySelectorAll('.2nextButton');
	buttons.forEach(button => {
		button.addEventListener('click', show2NextPage);
	});
});

function show2NextPage() {
	// Hide the current page
	document.getElementById("page" + currentPage).style.display = 'none';

	// Increment the page count
	currentPage = currentPage + 2;

	// Show the next page
	document.getElementById("page" + currentPage).style.display = 'block';
}*/

let currentPage = 1; // Start from the first page

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.nextButton').forEach(button => {
		button.addEventListener('click', () => showPage(currentPage + 1));
	});

	document.querySelectorAll('.skipButton').forEach(button => {
		button.addEventListener('click', () => showPage(currentPage + 2));
	});

	document.querySelectorAll('.2skipButton').forEach(button => {
		button.addEventListener('click', () => showPage(currentPage + 3));
	});
});

function showPage(pageNumber) {
	// Hide the current page
	document.getElementById("page" + currentPage).style.display = 'none';
	// Update the current page to the new page
	currentPage = pageNumber;
	// Show the new page
	document.getElementById("page" + currentPage).style.display = 'block';
}


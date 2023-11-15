// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

//home page
enter.addEventListener('click', function () {
	showPage('menuPage');
});


//menu page
meditation.addEventListener('click', function () {
	showPage('meditationPage');
});

storyTime.addEventListener('click', function () {
	showPage('storyPage');
});

//somethingSpecial.addEventListener('click', function () {showPage('specialPage');});

backtoHome.addEventListener('click', function () {
	showPage('homePage');
});


//meditation page
backtoMenu.addEventListener('click', function () {
	showPage('menuPage');
});

startMeditation.addEventListener('click', function () {
	showPage('meditationStartPage');
});

backtoMeditation.addEventListener('click', function () {
	showPage('meditationPage');
});

//.startStop.addEventListener('click', function () {showPage('meditationPage');});



function showPage(pageId) {
	const pages = document.querySelectorAll('.page');
	pages.forEach(page => {
		page.style.display = 'none';
	});
	const specificPage = document.getElementById(pageId);
	if (specificPage) {
		specificPage.style.display = 'block';
	} else {
		console.error('Page with ID ' + pageId + ' not found.');
	}
}

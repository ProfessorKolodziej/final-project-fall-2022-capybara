document.addEventListener('DOMContentLoaded', (event) => {
	const page1 = document.getElementById('page1');
	const page2 = document.getElementById('page2');
	const toggleButton = document.getElementById('toggleButton');

	toggleButton.addEventListener('click', function () {
		if (page1.style.display === 'none') {
			page1.style.display = 'block';
			page2.style.display = 'none';
		} else {
			page1.style.display = 'none';
			page2.style.display = 'block';
		}
	});

	// Initially display Page 1
	page1.style.display = 'block';
	page2.style.display = 'none';
});

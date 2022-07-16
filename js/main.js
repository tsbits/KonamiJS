document.addEventListener("DOMContentLoaded", (event) => {
	konamiInstance = new Konami();

	konamiInstance.addEventListener('konami-detected', (e) => {
		console.log(`Konami Code has been triggered ${e.detail.times} times.`);
	});
});
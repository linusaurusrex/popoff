(() => {
	const _open = window.open;
	window.open = (url, target) => _open(url, target);
})();

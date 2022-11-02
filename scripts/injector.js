(() => {
	const script = document.createElement('script');
	script.src = chrome.runtime.getURL('scripts/open.js');
	(document.head || document.documentElement).appendChild(script);
})();

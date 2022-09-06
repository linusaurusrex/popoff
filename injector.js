(() => {
	const script = document.createElement('script');
	script.src = chrome.runtime.getURL('open.js');
	(document.head || document.documentElement).appendChild(script);
})();

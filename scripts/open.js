(() => {
	const _open = window.open;

	const supportedBooleanFeatures = [
		'noopener',
		'noreferrer'
	];

	window.open = (url, target = '', windowFeatures = '') => {
		const passedFeatures = [];
		for (const feature of supportedBooleanFeatures)
			if (windowFeatures.includes(feature))
				passedFeatures.push(feature);
		return _open(url, target, passedFeatures.join());
	};
})();

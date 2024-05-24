const loadScript = (src: string) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = true;

		script.onload = () => {
			resolve(`Script loaded: ${src}`);
		};

		script.onerror = () => {
			reject(new Error(`Script load error: ${src}`));
		};

		document.head.appendChild(script);
	});
}

export {
	loadScript,
};

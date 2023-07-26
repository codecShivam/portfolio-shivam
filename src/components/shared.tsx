
export const random = (): number => {
	const crypto = window.crypto;
	const array = new Uint32Array(1);

	return crypto.getRandomValues(array)[0] / (Math.pow(2, 32) - 1);
};

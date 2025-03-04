export const sortHandler = (a = '', b = '') => {
	let i = 0;
	while (a.length > i && b.length > i) {
		if (a[i].toLowerCase() > b[i].toLowerCase()) {
			return 1;
		} else if (a[i].toLowerCase() < b[i].toLowerCase()) {
			return -1;
		}
		i++;
	}
	return 0;
};

/** @param {string} str */
export function toPascalCase(str) {
	// Split the string into words using spaces and/or underscores as delimiters
	const words = str.split(/[\s_]+/);

	// Capitalize the first letter of each word and convert the rest to lowercase
	const pascalWords = words.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	);

	// Join the pascalWords back together to form the Pascal case string
	const pascalCaseStr = pascalWords.join('');

	return pascalCaseStr;
}

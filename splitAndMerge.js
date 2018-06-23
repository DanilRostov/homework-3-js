const splitAndMerge = ( str, sp ) => {
	const words = str.split( ' ' );
	let result = '';
	for( let i = 0; i < words.length; i += 1 ) {
		if( words[i + 1] ) {
			result += words[i].split('').join(sp) + ' ';
		} else {
			result += words[i].split('').join(sp);
		}
	}
	return result;
}

splitAndMerge("Hello World!", ',');
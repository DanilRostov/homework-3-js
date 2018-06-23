const toCamelCase = ( str ) => {
	let result = '';
	for( let i = 0; i < str.length; i += 1 ) {
		if( str[i] === '-' || str[i] === '_' ) {
			continue;
		}

		if( str[i - 1] === '-' || str[i - 1] === '_' ) {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result;
}

console.log( toCamelCase( "the_stealth_Warrior" ) );
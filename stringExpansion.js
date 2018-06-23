const stringExpansion = ( str ) => {
	let result = '';
	for( let i = 0; i < str.length; i += 1 ) {

		// Если это не число
		if( isNaN( Number( str[i] ) ) ) {

			// Если предыдущее значение не число
			if( isNaN( Number( str[i - 1] ) ) ) {
				result += str[i];
			} else {
				for( let j = 0; j < str[i - 1]; j += 1 ) {
					result += str[i];
				}
			}
		}
	}
	return result;
}

console.log( stringExpansion( '3D2a5d2f' ) );
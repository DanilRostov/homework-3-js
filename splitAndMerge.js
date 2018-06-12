// Первая реализация выполнена в соответсвии с алгоритмом, прописанным в задании
const splitAndMerge = ( str, sp ) => {
	let words = str.split( ' ' );
	let chars = '';
	let result = '';

	for( let i = 0; i < words.length; i += 1 ) {
		if( !words[i] ) {
			continue;
		} else {
			chars += words[i].split(' ');
		}
	}

	for( let i = 0; i < chars.length; i += 1 ) {
		if( !chars[i + 1] ) {
			result += chars[i];
		} else {
			result += chars[i] + sp;
		}
	}

	return result;
}

console.log( splitAndMerge("Hello World!", ':') );


// Вторая реализация выполнена по собственному алгоритму
const splitAndMerge2 = ( str, sp ) => {
	let result = '';

	for( let i = 0; i < str.length; i += 1 ) {
		if( str[i] === ' ' ) {
			continue;
		} else if( str[i + 1] === undefined ) {
			result += str[i];
		} else {
			result += str[i] + sp;
		}
	}

	return result;
}

console.log( splitAndMerge2("Hello World!",":") );


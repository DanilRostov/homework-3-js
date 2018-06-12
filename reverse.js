// Простой вариант реализации, который не учитывает количество пробелов между словами, если их больше 1-го
const reverse = ( str ) => {
	let result = '';
	let words = str.split( ' ' );

	for( let i = 0; i < words.length; i += 1 ) {
		if( words[i] === '' ) {
			result += ' ';
		} else if( !words[i + 1] ) {
			result += words[i].split('').reverse().join('');
		} else {
			result += words[i].split('').reverse().join('') + ' ';
		}
	}

	return result;
}

console.log( reverse( ' A fun little challenge! ' ) );


// Более сложный вариант реализации, который сохраняет исходное количество пробелов между словами в переданной строке
const reverseSmart = ( str ) => {
	let words = str.split( ' ' );
	let wordsWithSpaces = [];
	let result = '';

	// Вспомогательная функция, которая проверяет является ли переданный элемент последним словом в переданном массиве, состоящем из слов и пробелов
	const isItLastWord = ( arr, itemOrder ) => {
		for( let i = itemOrder + 1; i < arr.length; i += 1 ) {
			if( arr[i] ) {
				return false;
			}
		}

		return true;
	};

	// Цикл, который формирует массив из строк и пробелов
	for( let i = 0; i < words.length; i += 1 ) {
		if( words[i] === '' ) {
			wordsWithSpaces.push( ' ' );
		} else if( isItLastWord( words, i ) ) {
			wordsWithSpaces.push( words[i] );
		} else {
			wordsWithSpaces.push( words[i] );
			wordsWithSpaces.push( ' ' );
		}
	}

	// Цикл, которые переворачивает каждое слово в массиве
	for( let i = 0; i < wordsWithSpaces.length; i += 1 ) {
		if( wordsWithSpaces[i] === ' ' ) {
			result += ' ';
		} else {
			result += wordsWithSpaces[i].split('').reverse().join('');
		}
	}

 	return result;
}

console.log( reverseSmart( ' A fun little challenge! ' ) );
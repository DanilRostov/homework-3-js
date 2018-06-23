const convert = ( obj ) => {
	let result = [];
	for( let i in obj ) {
		if ( obj.hasOwnProperty( i ) ) {
	        result.push( [ i, obj[i] ] );
	    }
	}
	return result;
}

const obj1 = {
	name: 'Jeremy', 
	age: 24, 
	role: 'Software Engineer'
};

console.log( convert( obj1 ) );
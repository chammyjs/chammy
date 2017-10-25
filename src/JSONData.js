class JSONData {

	constructor( data = JSON.stringify( {} ) ){
		this.data = data;
	}

	getObject() {
		return JSON.parse( this.data );
	}

	getProperty( property ) {
		const data = this.getObject();
		return ( property && data[ property ] ) ? data[ property ] : undefined;
	}

	getData() {
		return this.data;
	}
}
module.exports = JSONData;

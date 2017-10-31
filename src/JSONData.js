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

	hasProperty( property ) {
		const data = this.getObject();
		return property in data;
	}

	setValue( key, value ) {
		const data = this.getObject();
		data[ key ] = value;
		this.data = JSON.stringify( data );
		return this.data;
	}
}
module.exports = JSONData;

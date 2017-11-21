
/**
 *
 */
class JSONData {

	/**
	 * @param {string} data description
	 */
	constructor( data = JSON.stringify( {} ) ){
		this.data = data;
	}

	/**
	 * getObject - description
	 *
	 * @return {type}  description
	 */
	getObject() {
		return JSON.parse( this.data );
	}

	/**
	 * getProperty - description
	 *
	 * @param  {type} property description
	 * @return {type}          description
	 */
	getProperty( property ) {
		const data = this.getObject();
		return ( property && data[ property ] ) ? data[ property ] : undefined;
	}

	/**
	 * getData - description
	 *
	 * @return {type}  description
	 */
	getData() {
		return this.data;
	}

	/**
	 * hasProperty - description
	 *
	 * @param  {type} property description
	 * @return {type}          description
	 */
	hasProperty( property ) {
		const data = this.getObject();
		return property in data;
	}

	/**
	 * setValue - description
	 *
	 * @param  {type} key   description
	 * @param  {type} value description
	 * @return {type}       description
	 */
	setValue( key, value ) {
		const data = this.getObject();
		data[ key ] = value;
		this.data = JSON.stringify( data );
		return this.data;
	}
}
module.exports = JSONData;

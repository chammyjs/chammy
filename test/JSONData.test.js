const JSONData = require( '../src/JSONData' );
const chai = require( 'chai' );
const expect = chai.expect;
describe( 'JSONData', () => {

	it( 'exists', () => {
		const data = new JSONData( JSON.stringify( '' ) );
		expect( data ).to.exist;
	} );

	it( 'has data property', () => {

	} );

	describe( 'getObject', () => {

		const json = { a: 'afdaga', b: 123, c: true };
		const data = new JSONData( JSON.stringify( json ) );
		const data2 = new JSONData();

		it( 'return js Object', () => {
			expect( data.getObject() ).to.be.an( 'object' );
		} );

		it( 'return a proper object', () => {
			expect( data.getObject() ).to.deep.equal( json );
		} );

		it( 'return empty object if data is not defined', () => {
			expect( data2.getObject() ).to.deep.equal( {} );
		} );

	} );

	describe( 'getProperty', () => {

		const json = { a: 'afdaga', b: 123, c: true };
		const data = new JSONData( JSON.stringify( json ) );
		const data2 = new JSONData();

		it( 'return value if property exists', () => {
			expect( data.getProperty( 'a' ) ).to.deep.equal( json.a );
		} );

		it( 'return undefined if property doesn\'t exists', () => {
			expect( data.getProperty( 'm' ) ).to.deep.equal( undefined );
		} );

		it( 'return undefined if data is empty', () => {
			expect( data2.getProperty( 'm' ) ).to.deep.equal( undefined );
		} );

		it( 'return undefined if property doesn\'t defined', () => {
			expect( data.getProperty(  ) ).to.deep.equal( undefined );
		} );

		it( 'return undefined if property doesn\'t defined', () => {
			expect( data2.getProperty(  ) ).to.deep.equal( undefined );
		} );

	} );

	describe( 'getData', () => {

		const json = { a: 'afdaga', b: 123, c: true };
		const data = new JSONData( JSON.stringify( json ) );
		const data2 = new JSONData();

		it( 'should return a JSON string', () => {
			expect( data.getData() ).to.deep.equal( JSON.stringify( json ) );
		} );

		it( 'should return a JSON string of empty Object if empty', () => {
			expect( data2.getData() ).to.deep.equal( JSON.stringify( {} ) );
		} );

	} );
	describe( 'hasProperty', () => {

		const json = { a: 'afdaga', b: 123, c: true };
		const data = new JSONData( JSON.stringify( json ) );

		it( 'return a Boolean', () => {
			expect( data.hasProperty() ).to.be.an( 'boolean' );
		} );

		it( 'return true if property exists', () => {
			expect( data.hasProperty( 'a' ) ).to.equal( true );
		} );

		it( 'return false if property doesn\'t exists', () => {
			expect( data.hasProperty( 'dd' ) ).to.equal( false );
		} );

		it( 'return false if property is not given', () => {
			expect( data.hasProperty() ).to.equal( false );
		} );
	} );
} );

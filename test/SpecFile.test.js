const SpecFile = require( '../src/SpecFile' );
const chai = require( 'chai' );
const expect = chai.expect;

describe( 'SpecFile', () => {
	it( 'exists', () => {
		expect( SpecFile ).exist;
	} );
} );

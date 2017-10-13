const SpecFile = require( '../src/SpecFile' );
const chai = require( 'chai' );
const expect = chai.expect;
const fs = require( 'fs-then-native' );

/* eslint new-cap: 0*/
const logger = require( 'eazy-logger' ).Logger( {
	prefix: '{blue:[}{green:chammy-tests}{blue:] }',
	useLevelPrefixes: true
} );

describe( 'SpecFile', () => {

	it( 'exists', () => {
		expect( SpecFile ).exist;
	} );

	it( 'can make objects', () => {
		const file = new SpecFile();
		expect( file ).not.to.be.undefined;
	} );

	describe( 'createFile', () => {

		const dir = 'fixture';
		let file;
		const filepath = `${dir}/test.txt`;

		beforeEach( () => {
			fs.mkdir( dir )
			.then( () => {
				logger.log( 'Directory created' );
			} )
			.catch( ( err ) => {
				logger.error( 'Cannot create directory' );
				logger.error( err );
			} );
		} );

		afterEach( () => {
			fs.unlink( filepath ).then( () => {
			} ).catch( ( err ) => {
				logger.error( err );
			} );
			fs.rmdir( dir ).then( () => {
			} )
			.catch(
				( err ) => {
					logger.error( 'Cannot delete directory' );
					logger.error( err );
				} );
		} );

		it( 'should return Promise', () => {
			file = new SpecFile( filepath, 'asssfdfadjkfaldnjklcnjdkgnv' );
			const out = file.createFile();
			expect( out ).to.be.instanceOf( Promise );
		} );

		it( 'should write empty file', ( done ) => {
			file = new SpecFile( filepath );
			file.createFile();
			fs.readFile( filepath, 'utf8' ).then( ( content ) => {
				expect( content ).to.equal( '' );
				done();
			}	);

		} );

	} );
	describe( 'readFileContent', () => {
		const dir = 'fixture';
		const filepath = `${dir}/test.txt`;

		beforeEach( () => {
			fs.mkdir( dir )
			.then( () => {
				logger.log( 'Directory created' );
			} )
			.catch( ( err ) => {
				logger.error( 'Cannot create directory' );
				logger.error( err );
			} );
		} );

		afterEach( () => {
			fs.unlink( filepath ).then( () => {
			} ).catch( ( err ) => {
				logger.error( err );
			} );
			fs.rmdir( dir ).then( () => {
			} )
			.catch(
				( err ) => {
					logger.error( 'Cannot delete directory' );
					logger.error( err );
				} );
		} );

		it( 'should return promise', () => {
			const fileContent = 'abcdsddjksf';
			const file = new SpecFile( filepath, fileContent );
			fs.writeFileSync( filepath, fileContent	);
			const out = file.readFileContent( 'utf8' );
			expect( out ).to.be.instanceOf( Promise );
		} );

		it( 'should read non empy file', ( done ) => {
			const fileContent = 'abcdsddjksf';
			const file = new SpecFile( filepath, fileContent );
			fs.writeFile( filepath, fileContent	).then( () => {
				file.readFileContent( 'utf8' ).then( ( content ) => {
					expect( content ).to.equal( fileContent );
					done();
				} );
			} );
		} );

		it( 'should read empty file', ( done ) => {
			const fileContent = '';
			fs.writeFile( filepath, fileContent	).then( ( ) => {
				const file = new SpecFile( filepath );
				file.readFileContent( 'utf8' ).then( ( content ) => {
					expect( content ).to.equal( fileContent );
					done();
				} );
			} );
		} );

		it( 'should read with utf8 encoding', ( done ) => {
			const fileContent = 'abcdsddjksf';
			fs.writeFile( filepath, fileContent	).then( ( ) => {
				const file = new SpecFile( filepath );
				file.readFileContent( ).then( ( content ) => {
					expect( content ).to.equal( fileContent );
					done();
				} );
			} );
		} );

	} );
} );

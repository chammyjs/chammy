const SpecFile = require( '../src/SpecFile' );
const chai = require( 'chai' );
const expect = chai.expect;
const fs = require( 'fs-then-native' );

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
			fs.mkdirSync( dir );
		} );

		afterEach( () => {
			fs.unlinkSync( filepath );
			fs.rmdirSync( dir );
		} );

		it( 'should return Promise', ( done ) => {
			file = new SpecFile( filepath, 'asssfdfadjkfaldnjklcnjdkgnv' );
			const out = file.createFile();
			expect( out ).to.be.instanceOf( Promise );
			done();
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
			fs.mkdirSync( dir );
		} );

		afterEach( () => {
			fs.unlinkSync( filepath );
			fs.rmdirSync( dir );
		} );

		it( 'should return promise', ( done ) => {
			const fileContent = 'abcdsddjksf';
			const file = new SpecFile( filepath, fileContent );
			fs.writeFileSync( filepath, fileContent	);
			const out = file.readFileContent( 'utf8' );
			expect( out ).to.be.instanceOf( Promise );
			out.then( () => {
				done();
			} );
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
	describe( 'deleteFile', () => {

		const dir = 'fixture';
		const filepath = `${dir}/test.txt`;

		beforeEach( () => {
			fs.mkdirSync( dir );

		} );

		afterEach( () => {
			fs.rmdirSync( dir );
		} );

		it( 'should return promise', ( done ) => {
			fs.writeFileSync( filepath, '' );
			const file = new SpecFile( filepath );
			const out = file.deleteFile();
			expect( out ).to.be.instanceof( Promise );
			out.then( () => {
				done();
			} );
		} );

		it( 'should delete file', ( done ) => {
			fs.writeFileSync( filepath, '' );
			const file = new SpecFile( filepath );
			file.deleteFile().then( () => {
				done();
			} );
		} );

	} );

} );

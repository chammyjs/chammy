const fs = require( 'fs-then-native' );

class SpecFile {

	constructor( path, content = '' ) {
		this.path = path;
		this.content = content;
	}

	createFile() {
		return fs.writeFile( this.path, this.content );
	}

	readFileContent( encoding = 'utf8' ) {
		return fs.readFile( this.path, encoding );
	}

	deleteFile() {
		return fs.unlink( this.path );
	}

}

module.exports = SpecFile;

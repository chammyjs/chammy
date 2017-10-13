const fs = require( 'fs-then-native' );
class SpecFile {

	constructor( path, content ) {
		this.pat = path;
		this.content = content;
		this.createFile = this.createFile.bind( this );
		this.readFileContent = this.readFileContent.bind( this );
	}

	createFile() {
		return fs.writeToFile( this.path, this.content );
	}

	readFileContent( encoding ) {
		return fs.readFile( this.path, encoding );
	}

}

module.exports = SpecFile;

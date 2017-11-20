const fs = require( 'fs-then-native' );

/**
 * Represents a file with I/0 methods
 *	@class
 */
class SpecFile {

	/**
	 * constructor - description
	 *
	 * @param  {string} path         a specyfic path to file
	 * @param  {string} content = '' a specyfic content (text) of file,
	 * 															if not given, there is empty string by default
	 */

	constructor( path, content = '' ) {
		this.path = path;
		this.content = content;
	}

	/**
	 * createFile - description
	 *
	 * @return {type}  description
	 */
	createFile() {
		return fs.writeFile( this.path, this.content );
	}

	/**
	 * readFileContent - description
	 *
	 * @param  {type} encoding = 'utf8' description
	 * @return {type}                   description
	 */
	readFileContent( encoding = 'utf8' ) {
		return fs.readFile( this.path, encoding );
	}

	/**
	 * deleteFile - description
	 *
	 * @return {type}  description
	 */
	deleteFile() {
		return fs.unlink( this.path );
	}

}

module.exports = SpecFile;

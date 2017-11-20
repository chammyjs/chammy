const Option = require( './CLIOption' );
/**
 *
 */
class CLIApi {

	/**
	 * constructor - description
	 *
	 * @param  {type} name description
	 * @return {type}      description
	 */
	constructor( name ){
		this.name = name;
		this.options = [];
	}

	/**
	 * addOption - description
	 *
	 * @param  {type} name          description
	 * @param  {type} question      description
	 * @param  {type} answertype    description
	 * @param  {type} defaultanswer description
	 * @return {type}               description
	 */
	addOption( name, question, answertype, defaultanswer ) {
		this.options.push( new Option( name, question, answertype, defaultanswer ) );
	}

	/**
	 * get options - description
	 *
	 * @return {type}  description
	 */
	get options(){
		return this.options;
	}
}

module.exports = CLIApi;

class CLIOption {

	/**
	 * constructor - description
	 *
	 * @param  {type} name               description
	 * @param  {type} question           description
	 * @param  {type} answertype         description
	 * @param  {type} defaultanswer = '' description
	 * @return {type}                    description
	 */
	constructor( name, question, answertype, defaultanswer = '' ) {
		this.name = name;
		this.question = question;
		this.answertype = answertype;
		this.defaultanswer = defaultanswer;
	}
}
module.exports = CLIOption;

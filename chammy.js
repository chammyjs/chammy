require( 'babel-register' );
const meow = require( 'meow' );
const chammy = require( './src/main' );

const cli = meow( `
	Usage:
		$	chammy <option>
	Options:
		chammy new - Creating new template
			-name, --n=<template name>
		chammy edit <template name> - Editing existing template
			-name, --n=<template name>
		chammy delete <template name> - Deleting existing template
			-name, --n=<template name>
		chammy init <template name> - Generating new project
			-name, --n=<template name>
			-path, --p=<path to repository> - into given path
		chammy get <username>/<repository> - download template from GH repository
	`, // TODO:Plugin installation syntax
	{
		input: [ 'new', 'edit', 'delete', 'init', 'get' ],
		flags: {
			name: { type: 'string' },
			path: { type: 'string' }
		}
	} );

chammy( cli );

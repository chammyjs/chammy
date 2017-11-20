require( 'babel-register' );
const term = require( 'terminal-kit' ).terminal ;

term.grabInput( { mouse: 'button' } ) ;

term.on( 'mouse', ( name, data ) => {
	    console.log( '\'mouse\' event:', name, data ) ;
} ) ;

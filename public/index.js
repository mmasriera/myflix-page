const React    = require( 'react' ),
      ReactDOM = require( 'react-dom' ),
      List     = require( './components/List/List' );

const App = React.createClass({

    render() {

        return(
            <div>
            	<List />
        	</div>
        );
    }
});

ReactDOM.render( <App />, document.getElementById( 'app' ) );
import React from 'react';
import ReactDOM from 'react-dom';

class HeadLogo extends React.Component {
	render() {
		return(
            <div className="navbar-header" style={{"WebkitAppRegion": "drag"}}>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html" style={{"WebkitAppRegion": "no-drag"}}>SB Admin v2.0</a>
            </div>

		);
	}
}

export default HeadLogo;


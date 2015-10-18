import React from 'react';
import ReactDOM from 'react-dom';

class HeadBar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
<div className="navbar navbar-default">
	<div className="container-fluid">
		<div className="navbar-header">
			<a className="navbar-brand" href="#">
				<img alt="Brand" src={'resources/ShanLi.png'} />
			</a>
		</div>
		<div className="collapse navbar-collapse">
			<div className="btn-group nav navbar-nav">
				<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Action <span className="caret"></span>
				</button>
				<ul className="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" className="divider"></li>
					<li><a href="#">Separated link</a></li>
				</ul>
			</div>
			<div className="btn-group nav navbar-nav">
				<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Action <span className="caret"></span>
				</button>
				<ul className="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" className="divider"></li>
					<li><a href="#">Separated link</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
		);
	}
}

export default HeadBar;

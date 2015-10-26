import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown,Button,ButtonGroup} from 'react-bootstrap';
import { UIActionType } from '../constants/EDisConstants';
import EDisDispatcher from '../dispatcher/EDisDispatcher';

export default class ContextMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type : '',
			left : 0,
			top : 0
		};

		this.showMenu = this.showMenu.bind(this);
		this.hideMenu = this.hideMenu.bind(this);
		this.outsideClickHandler = this.outsideClickHandler.bind(this);
		EDisDispatcher.register(this.showMenu);
	}

	showMenu(action) {
		switch( action.actionType ) {
		case UIActionType.SHOW_CONTEXT_MENU :
			var pos = this.getMenuPosition(action.x,action.y);
			this.setState( { type : action.menuType, left : pos.left , top : pos.top} );
			break;
		default:
		}
	}

	hideMenu() {
		this.setState( { type : '' } );
	}

	shouldComponentUpdate(nextProps,nextState) {
		return this.state.type !== nextState.type; 
	}
	componentDidMount() {
    }

	componentDidUpdate() {
        if (this.state.type.length > 0 ) {
			console.log('bindHandlers');
           this.bindHandlers();
        } else {
			console.log('unbindHandlers');
			this.unbindHandlers();
		}
    }
    componentWillUnmount() {
//        this._unbindHandlers();
    }

	render() {
		switch( this.state.type ) {
			case 'member' :
				console.log('render Member ContextMenu at ' + this.state.left + ',' + this.state.top);
				var style = {
					left : this.state.left,
					top : this.state.top,
					position : 'fixed',
					open : true,
					backgroundColor: '#EEE',
					boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
					border: '1px solid #CCC',
					borderRadius: 3,
					marginLeft: -5,
					marginTop: 5,
					padding: 0
				};
				return(
						<div className="context-menu open" style={ style }>
							<ul ref="menu" className="dropdown-menu">
								<li><a href="#">Red</a></li>
								<li><a href="#">Blue</a></li>
								<li><a href="#">Orange</a></li>
								<li><a href="#">Red-Orange</a></li>
							</ul>
						</div>
					  );
				break;
			default:
				break;
		}

		return <div></div>
	}

	outsideClickHandler(event) {
        var _props = this.props;

        if( this.state.type.length > 0 ) {
			var localNode = ReactDOM.findDOMNode(this.refs.menu);
            var source = event.target;
            var found = false;

            while (source.parentNode) {
                found = (source === localNode);

                if (found) {
                    return;
                }
                source = source.parentNode;
            }

            this.hideMenu();
        }
    }
	
	bindHandlers() {
        var fn = this.outsideClickHandler,
            fn2 = this.hideMenu;
        document.addEventListener("mousedown", fn);
        document.addEventListener("touchstart", fn);
        window.addEventListener("resize", fn2);
        document.addEventListener("scroll", fn2);
    }
    unbindHandlers() {
        var fn = this.outsideClickHandler,
            fn2 = this.hideMenu;
        document.removeEventListener("mousedown", fn);
        document.removeEventListener("touchstart", fn);
        window.addEventListener("resize", fn2);
        document.addEventListener("scroll", fn2);
    }
    getMenuPosition(x, y) {
        //var menu = ReactDOM.findDOMNode(this.refs.menu);
        var scrollX = document.documentElement.scrollTop;
        var scrollY = document.documentElement.scrollLeft;
        //var screen = window.screen;
        //var AvailWidth = screen.AvailWidth;
        //var AvailHeight = screen.AvailHeight;
        //var offsetWidth = menu.offsetWidth;
        //var offsetHeight = menu.offsetHeight;
        var pos = {};

        pos.top = y + scrollY;

        //if (y + offsetHeight > AvailHeight) {
        //    pos.top -= offsetHeight;
        //}

        pos.left = x + scrollX;

        //if (x + offsetWidth > AvailWidth) {
        //    pos.left -= offsetWidth;
        //}

        return pos;
    }
}



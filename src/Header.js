import React , {Component} from 'react';


class Header extends Component {

    constructor(props) {
        super(props);
        this.handleHeaderClicked = this.handleHeaderClicked.bind(this);
    }

    handleHeaderClicked() {
        alert(this.props.currentUser);
    }
    render() {
        let {currentUser} = this.props;
        currentUser = "Logged in as " + currentUser;
        return(
            <div onClick={this.handleHeaderClicked}>Header {currentUser}</div>
        );
    }
}

export default Header
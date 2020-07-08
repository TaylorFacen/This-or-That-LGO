import React, { Component } from 'react';

class Home extends Component {
    state = {
        isLoading: true
    }

    componentDidMount(){
        const { user } = this.props;

        this.setState({ user, isLoading: false})
    }

    render(){
        const { isLoading, user } = this.state;
        return !isLoading && (
            <div className = "Home page">
                <h2>Welcome { user.userName }!</h2>
                <p>Welcome to "This or That" - LGO edition. Select which option you like best and see who else in the class you match with!</p>
            </div>
        )
    }
}

export default Home;
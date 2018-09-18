import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout'

class Header extends Component {
    logout() {
        this.props.mutate({

        }).then(() => this.props.data.refetch());
    }

    renderButtons() {

        const { loading, user } = this.props.data;

        if (loading) { return <div></div>; }

        if (user) {
            return (
                <li><a onClick={this.logout.bind(this)}>Logout</a></li>
            );
        }

        return (
            <div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </div>
        );
    }

    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul className="right">
                        <Link to="/" className="brand-logo left">Home</Link>
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(query)(
    graphql(mutation)((Header))
);
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

import AuthForm from './AuthForm';
class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = { errors: [] };
    }

    login({ email, password }){
        this.props.mutate({
            variables: {
                email,
                password,
            },
            refetchQueries: [{ query }],
        })
        .catch((error) => {
            const errors = error.graphQLErrors.map(error => error.message);
            this.setState({errors});
        });
    }

    render() {

        return (
            <div>
                <h3>Login</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.login.bind(this)}/>
            </div>
        );
    }
}

export default graphql(mutation)(LoginForm);
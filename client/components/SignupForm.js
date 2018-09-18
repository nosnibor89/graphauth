import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

import AuthForm from './AuthForm';
class SignupForm extends Component {

    constructor(props){
        super(props);
        this.state = { errors: [] };
    }

    signup({ email, password }){
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
                <h3>Signup</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.signup.bind(this)}/>
            </div>
        );
    }
}

export default graphql(mutation)(SignupForm);
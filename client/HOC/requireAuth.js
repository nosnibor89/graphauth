import React, { Component } from   'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

function requireAuth(WrappedComponent, data = null) {
    class RequiredAuth extends Component {
        componentWillUpdate(nextProps) {
            const { user, loading } = nextProps.data;
            if(!loading && !user) {
                // return to dashboard
                hashHistory.push('/login');
            }
        }

        render(){
            return <WrappedComponent {...this.props} />;
        }
    }

    return graphql(query)(RequiredAuth);
}

export default requireAuth;
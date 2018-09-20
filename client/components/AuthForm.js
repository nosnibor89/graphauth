import React, { Component } from 'react';


class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    displayErrors() {
        return this.props.errors.map((error, key) => <li key={key}>{error}</li>)
    }

    onSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        this.props.onSubmit({ email, password });
    }

    render() {

        return (
            <div className="row">
                <form className="col s5" onSubmit={this.onSubmit.bind(this)} autoComplete="off">
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <ul className="errors">
                        {this.displayErrors()}
                    </ul>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;
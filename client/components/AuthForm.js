import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            value={this.state.email}
                            onChange={({ target }) => this.setState({ email: target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={({ target }) => this.setState({ password: target.value })}
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm
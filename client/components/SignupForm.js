import React, { Component } from 'react';
import AuthForm from './AuthForm'
import mutation from '../mutations/Signup'
import query from '../queries/CurrentUser'
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = { errors: [] }
    }

    componentWillUpdate(nextProps) {
        // this.props // the old, curret set of props
        // nextProps //the next set of props that will be inplace when the component rerenders
        console.log("SignupXXXX", this.props, nextProps)
        if (!this.props.data.user && nextProps.data.user) {
            //redirect to dashboard
            hashHistory.push('/dashboard')
        }
    }

    onSubmit = ({ email, password }) => {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        })
            .catch(res => {
                const errors = res.graphQLErrors.map(error => error.message)
                this.setState({ errors })
            })

    }

    render() {
        return (
            <div>
                <h3>Signup</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default graphql(query)(
    graphql(mutation)(Signup)
)
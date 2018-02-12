import React, { Component } from 'react';

import { connect } from 'react-redux';

class Author extends Component {
    render() {
        return (
            <div>{this.props.author.name}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        author: state.author.author
    }
}

export default connect(mapStateToProps)(Author);
import React, { Component } from 'react';

import './Blog.css'

class Blog extends Component {
    render() {
        return <div>
            <PostItem></PostItem>
        </div>
    }
}

function PostItem() {
    return <div>Test</div>
}

export default Blog
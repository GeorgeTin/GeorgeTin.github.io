import React, { Component } from 'react';

import './NotFound.css';

class NotFound extends Component {
    render() {
        return <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Pagina nu a fost gasita!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default NotFound
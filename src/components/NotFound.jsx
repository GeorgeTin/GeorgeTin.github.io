import React, { Component } from 'react';

import './NotFound.css';

class NotFound extends Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Pagina nu a fost gasita!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default NotFound
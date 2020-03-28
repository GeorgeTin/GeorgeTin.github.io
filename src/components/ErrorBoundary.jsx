import React from 'react';
import NotFound from './NotFound';

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    render() {
        if (this.state.hasError) {
            return <NotFound></NotFound>;
        }
            return this.props.children;
    }
}

export default ErrorBoundary;
import React from "react";

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // You can log error info here
        // console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
                    <h2>Something went wrong.</h2>
                    <pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{this.state.error?.message}</pre>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

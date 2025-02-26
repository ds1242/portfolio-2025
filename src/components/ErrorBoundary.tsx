import { Component, ReactNode } from 'react';

// Define types for props and state
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo: string | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error info:', info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong! Please try again later.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

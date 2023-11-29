import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Response | undefined;
}

abstract class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  abstract renderErrorComponent(error: Response): ReactNode;

  static getDerivedStateFromError(err: Response): ErrorBoundaryState {
    return { hasError: true, error: err };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.renderErrorComponent(this.state.error!);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

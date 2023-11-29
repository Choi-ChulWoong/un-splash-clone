import ErrorBoundary from '@/components/error/errorBoundary/ErrorBoundary';
import { ReactNode } from 'react';
import NetworkError from '@/components/error/networkError/NetworkError';

class GlobalErrorBoundary extends ErrorBoundary {
  renderErrorComponent(error: Response): ReactNode {
    if (error?.status === 500) {
      return (
        <NetworkError onRetry={() => this.setState({ hasError: false })} />
      );
    }
    throw error;
  }
}

export default GlobalErrorBoundary;

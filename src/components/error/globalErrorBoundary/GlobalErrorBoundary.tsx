import ErrorBoundary from '@/components/error/errorBoundary/ErrorBoundary';
import { ReactNode } from 'react';
import SystemError from '@/components/error/systemError/SystemError';

class GlobalErrorBoundary extends ErrorBoundary {
  renderErrorComponent(): ReactNode {
    return <SystemError onRetry={() => this.setState({ hasError: false })} />;
  }
}

export default GlobalErrorBoundary;

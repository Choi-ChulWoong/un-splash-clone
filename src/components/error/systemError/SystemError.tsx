import ErrorBox from '@/components/error/errorBox/ErrorBox';
import RetryButton from '@/components/common/retryButton/RetryButton';

interface SystemErrorProps {
  onRetry: () => void;
}

function SystemError({ onRetry }: SystemErrorProps) {
  return (
    <ErrorBox>
      <h3>시스템 에러가 발생했습니다.</h3>
      <p>문제를 해결하기 위해 열심히 노력하고 있습니다.</p>
      <p>잠시 후 다시 확인해 주세요.</p>
      <RetryButton type="button" onClick={onRetry}>
        다시 시도하기
      </RetryButton>
    </ErrorBox>
  );
}

export default SystemError;

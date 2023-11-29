import ErrorBox from '@/components/error/errorBox/ErrorBox';
import RetryButton from '@/components/common/retryButton/RetryButton';

interface NetworkErrorProps {
  onRetry: () => void;
}
function UnknownError({ onRetry }: NetworkErrorProps) {
  return (
    <ErrorBox>
      <h3>알 수 없는 에러가 발생했습니다.</h3>
      <p>문제가 지속될 시 고객센터로 연락부탁드립니다.</p>
      <RetryButton type="button" onClick={onRetry}>
        다시 시도하기
      </RetryButton>
    </ErrorBox>
  );
}

export default UnknownError;

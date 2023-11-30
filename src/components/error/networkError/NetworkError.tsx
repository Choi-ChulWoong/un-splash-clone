import ErrorBox from '@/components/error/errorBox/ErrorBox';
import RetryButton from '@/components/common/retryButton/RetryButton';

interface NetworkErrorProps {
  onRetry: () => void;
}
function NetworkError({ onRetry }: NetworkErrorProps) {
  return (
    <ErrorBox>
      <div>
        <h3>현재 접속이 원활하지 않아요..</h3>
        <p>일시적인 서버오류가 발생했습니다.</p>
        <p>잠시 후 다시 시도해 주세요.</p>
      </div>
      <RetryButton type="button" onClick={onRetry}>
        다시 시도하기
      </RetryButton>
    </ErrorBox>
  );
}

export default NetworkError;

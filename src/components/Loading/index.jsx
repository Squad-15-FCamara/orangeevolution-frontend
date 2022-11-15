import { LoadingWrapper, Dot, BounceAnimation } from './style';

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
  );
};

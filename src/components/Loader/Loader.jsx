import { ProgressBar } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => (
  <LoaderStyled>
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#36a6de"
      barColor="#2b99d0"
    />
  </LoaderStyled>
);

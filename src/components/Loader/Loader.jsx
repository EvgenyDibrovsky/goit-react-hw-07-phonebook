import { ColorRing } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => (
  <LoaderStyled>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#36a6de', '#43b0e7', '#2c8cbc', '#43b0e7', '#36a6de',]}
    />
  </LoaderStyled>
);

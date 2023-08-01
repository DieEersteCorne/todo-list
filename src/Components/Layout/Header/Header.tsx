import { FC } from 'react';
import Navbar from './Navbar/Navbar';
import ButtonNavigation from './ButtonNavigation/ButtonNavigation';

const Header: FC = () => {
  return (
    <div>
      <Navbar />
      <ButtonNavigation />
    </div>
  );
};

export default Header;

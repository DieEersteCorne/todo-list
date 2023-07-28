import { FC } from 'react';
import './_Navbar.scss';
import NavigationItems from './NavigationItems';
import todolistappLogoTransparentBackground from '../../../../assets/todolist-app-Logo-Transparent-Background.svg';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className='NavbatContainer'>
      <div>
        <Link to='/'>
          <img className='Logo' src={todolistappLogoTransparentBackground} />
        </Link>
      </div>

      <div>
        <ul className='Navbar-Menu'>
          {NavigationItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i>{item.title}</i>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

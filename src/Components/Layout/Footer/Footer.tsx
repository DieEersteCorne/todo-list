import { FC } from 'react';
import './_FooterStyle.scss';

interface FooterProps {}

const AllRightsReserved = '{type}O+ All Rights Reserved.';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className='footer'>
      <ul>
        <li>
          © {new Date().getFullYear()} {AllRightsReserved}
        </li>
      </ul>
    </div>
  );
};

export default Footer;

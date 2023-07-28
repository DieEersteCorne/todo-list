import { FC } from 'react';

import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import './_Contactpage.scss';

interface ContactUsPageProps {}

const ContactUsPage: FC<ContactUsPageProps> = ({}) => {
  return (
    <div>
      <Header />
      <main>
        <div className='ContactUsPage'>
          <h1>Contact us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <span> Tellephone number: ##########</span>
          <span> Email Adress: 123@email.com</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsPage;

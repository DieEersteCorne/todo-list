import { FC, useState } from 'react';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import './_FeedbackPage.scss';

interface FeedbackPageProps {}

const FeedbackPage: FC<FeedbackPageProps> = ({}) => {
  const [text, setText] = useState('');

  const user = 'User feedback: ';

  const submitform = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    alert(user + text);
  };

  return (
    <div>
      <Header />
      <main>
        <div className='feedbackPage'>
          <h1>We would love your feedback</h1>
          <form onSubmit={submitform}>
            {' '}
            <textarea
              placeholder='Your feedback'
              className='Feedback-Input'
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button type='submit' className='submitButton'>
              Submit
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeedbackPage;

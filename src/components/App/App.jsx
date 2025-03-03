import css from './App.module.css';
import Product from '../Product/Product';
import Alert from '../Alert/Alert';
import { HiUser } from 'react-icons/hi';
import LoginButton from '../LoginButton/LoginButton';
import FollowButton from '../FollowButton/FollowButton';
const App = () => {
  return (
    <div className={css.container}>
      <h1>
        <HiUser />
        Best selling
      </h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>

      <LoginButton />
      <FollowButton />
    </div>
  );
};

export default App;

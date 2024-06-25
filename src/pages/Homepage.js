import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPosts } from '../redux/Action/action';
import CardList from '../component/CardList';
import Navbar from '../component/Navbar';
import ToggleButton from '../component/ToggleButton';
import FeedbackForm from '../component/FeedbackForm';
import '../styles/styles.css';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          dispatch(setPosts(response.data));
        });
    }, 5000); // Simulate loading time
  }, [dispatch]);

  return (
    <div>
       <Navbar />
      <ToggleButton />
      <CardList />
      <FeedbackForm />
      {/* <PaginationComponent/> */}
    </div>
  );
};

export default HomePage;

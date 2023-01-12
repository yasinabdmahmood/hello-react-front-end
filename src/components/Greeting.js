import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions';

const Greeting = () => {
  const greeting = useSelector((state) => state.data.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <h1>Greeting:</h1>
      <p>{greeting}</p>
    </>
  );
};

export default Greeting;

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    const response = await fetch('https://rails-hello-back-end.onrender.com');
    const data = await response.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error });
  }
};

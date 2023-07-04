const fetchUsers = () => {
  return (dispatch) => {
    // Here, you can perform asynchronous operations

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        // Once the data is received, dispatch an action to update the state
        dispatch({ type: "SET_POST", payload: posts });
      })
      .catch((error) => {
        // Dispatch an error action if something goes wrong
        dispatch({ type: "FETCH_FAILURE", payload: error });
      });
  };
};

export default fetchUsers;

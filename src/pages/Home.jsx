import React, { useEffect, useState } from 'react';

const getData = async () => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/v1/content`, {
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  const data = await res.json();
  return data;
};

const Home = () => {
  const [data, setData] = useState();

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );

  if (!data) {
    return <div>Loading</div>;
  }

  if (data) {
    return <div>{data.msg}</div>;
  }
};

export default Home;

import React from 'react';
import { useQuery } from '@apollo/client';
import TEST_FIELD from './querys/index';

interface AppProps {
  idToken: String
}

const App: React.FC<AppProps> = ({ idToken }) => {

  const { loading, error, data } = useQuery(TEST_FIELD);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  console.log(data);

  return (
    <div>Hello World</div>
  );
}

export default App;

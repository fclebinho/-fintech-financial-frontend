import React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import ENTRIES_QUERY from '../../graphql/queries/index';
import { EntryProps } from '../../types';
import { EntryCard } from '../../components';
import { Container, Button } from '@chakra-ui/react';
import EntryCreatePage from './create';

const EntryList = () => {
  const { push } = useHistory();
  const { loading, error, data } = useQuery(ENTRIES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  const { entries } = data;

  return (
    <Container maxW="container.lg">
      <Button onClick={ () => push('/entries/create') }>Create</Button>
      {entries.map((entry: EntryProps) => (<EntryCard entry={entry} />))}
      <EntryCreatePage />
    </Container>
  )
}

export default EntryList;
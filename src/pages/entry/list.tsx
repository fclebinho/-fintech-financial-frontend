import React from 'react';
import { useQuery } from '@apollo/client';
import ENTRIES_QUERY from '../../querys/index';
import { EntryProps } from '../../types';
import { EntryCard } from '../../components';
import { Container } from '@chakra-ui/react';

const EntryList = () => {
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
      {entries.map((entry: EntryProps) => (<EntryCard entry={entry} />))}
    </Container>
  )
}

export default EntryList;
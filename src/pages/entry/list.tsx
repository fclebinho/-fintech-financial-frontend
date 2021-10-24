import React from 'react';
import { useQuery } from '@apollo/client';
import ENTRIES_QUERY from '../../querys/index';
import { EntryProps } from '../../types';
import { EntryCard } from '../../components';

const EntryList = () => {
  const { loading, error, data } = useQuery(ENTRIES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  const { entries } = data;

  return entries.map((entry: EntryProps) => (<EntryCard entry={entry} />))
}

export default EntryList;
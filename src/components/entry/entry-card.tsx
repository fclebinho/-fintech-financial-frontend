import React from 'react';
import { EntryProps } from '../../types';

interface EntryCardProps {
  entry: EntryProps;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  return (
    <div>
      <span>{entry.dueDate}</span>
      <span>{entry.description}</span>
      <span>{entry.status}</span>
      <span>{entry.amount}</span>
    </div>
  );
}

export default EntryCard;
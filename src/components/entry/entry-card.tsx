import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { EntryProps } from '../../types';

interface EntryCardProps {
  entry: EntryProps;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <Box w="100%" h="10">
        {entry.dueDate}
      </Box>
      <Box w="100%" h="10">
        {entry.description}
      </Box>
      <Box w="100%" h="10">
        {entry.status}
      </Box>
      <Box w="100%" h="10">
        {entry.amount}
      </Box>
    </Grid>
  );
}

export default EntryCard;
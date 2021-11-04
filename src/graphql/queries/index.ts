import { gql } from "@apollo/client";

const ENTRIES_QUERY = gql`
  query {
    getEntries {
      id
      description
      dueDate
      kind
      status
      amount
      createdAt
      updatedAt
    }
  }
`;

export default ENTRIES_QUERY;
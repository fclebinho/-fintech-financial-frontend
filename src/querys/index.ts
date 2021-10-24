import { gql } from "@apollo/client";

const ENTRIES_QUERY = gql`
  query {
    entries {
      amount
      createdAt
      description
      dueDate
      id
      kind
      status
      updatedAt
    }
  }
`;

export default ENTRIES_QUERY;
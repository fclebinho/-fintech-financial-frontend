import { gql } from "@apollo/client";

export const ADD_ENTRY = gql`
  mutation addEntry($input: AddEntryInput!) {
  entry(input: $input) {
    entry {
      id
      kind
      description
      dueDate
      status
      amount
      createdAt
      updatedAt
    }
  }
}
`;
import { gql } from "@apollo/client";

const TEST_FIELD = gql`
  query {
    testField
  }
`;

export default TEST_FIELD;
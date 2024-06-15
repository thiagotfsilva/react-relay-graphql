import { gql } from "@apollo/client";

const FIND_ACCOUNT = gql`
  query FindAccount($userId: ID!) {
    accountById(userId: $userId) {
      _id
      balance
      numberAccount
      userId {
        name
        taxId
      }
    }
  }
`;

const FIND_USER = gql`
  query FindUser($taxId: String!) {
    userTaxId(taxId: $taxId) {
      _id
      taxId
      name
    }
  }
`;

export { FIND_ACCOUNT, FIND_USER };

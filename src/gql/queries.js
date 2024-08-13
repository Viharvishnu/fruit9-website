import { gql } from "graphql-request";

export const fruitsDataQuery = gql`
  query {
    fruitsCollection {
      items {
        name
        fruitImage {
          url
        }
      }
    }
  }
`;

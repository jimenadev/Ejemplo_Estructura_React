import { gql } from '@apollo/client'


export const OBTENER_PRODUCTO = gql`{
  products {
    id
    title
    img
  }
}
`;
/* global graphql */

import React from 'react';
import Products from '../components/products';

const IndexPage = props =>
  (<main>
    <Products data={props.data.allProductsJson.edges[0].node} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query ProductsQuery {
    allProductsJson {
      edges {
        node {
          name
          }
        }
      }
    }
  }
`;

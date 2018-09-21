import React from 'react';

import './_products.scss';

const Products = props =>
  (<section className="products" id="products">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="products-title">Products</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="products-list">
            {props.data.map((item, i) =>
              (<li className="products-list-item" key={i}>
                {item.name}
              </li>),
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>);

export default Products;

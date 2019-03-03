import React from 'react';
import { connect } from 'react-redux';
import ProductForm from '../components/productForm';
import { startAddProduct } from '../actions/product';

export class AddProductPage extends React.Component {
  onSubmit = (product) => {
    this.props.startAddProduct(product);
    this.props.history.push('/create');
  };
  render() {
    return (
      <div>
        <h1>Add Product</h1>
        <ProductForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddProduct: (product) => dispatch(startAddProduct(product))
});

export default connect(undefined, mapDispatchToProps)(AddProductPage);

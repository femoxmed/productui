import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    Name : '',
    Description:'',
    Category : '',
    Price :'',
    Color :'',
    calendarFocused: false,
    createdAt: moment()
    };
  }

  onNameChange = (e) => {
    const Name = e.target.value;
    this.setState(() => ({ Name }));
  };
  onDescriptionChange = (e) => {
    const Description = e.target.value;
    this.setState(() => ({ Description }));
  };
  onCategoryChange = (e) => {
    const Category = e.target.value;
    this.setState(() => ({ Category }));
  };
  onPriceChange = (e) => {
    const Price = e.target.value;

    if (!Price || Price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ Price }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.Description || !this.state.Name) {
      this.setState(() => ({ error: 'REquired fields' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        Name  : this.state.Name,
        Description: this.state.Description,
        Price: parseFloat(this.state.Price, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
       
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>

        <input type = 'file' name='image'></input>
          <input
            type="text"
            placeholder="Name"
            autoFocus
            value={this.state.Name}
            onChange={this.onNameChange}
          />
          <input
            type="text"
            placeholder="Price"
            value={this.state.Price}
            onChange={this.onPriceChange}
          />

          

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.Description}
            onChange={this.onDescriptionChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.expense ? props.expense.id : null,
      timestamp: props.expense ? props.expense.timestamp : new Date(),
      name: props.expense ? props.expense.name : '',
      categoryID: props.expense ? props.expense.categoryID : this.props.category.id,
      price: props.expense ? props.expense.price : null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.expense) {
      this.setStte(props.expense);
    }
  }

  handleChange(e){
    let {name, value, type} = e.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});
  }
}

export default ExpenseForm;

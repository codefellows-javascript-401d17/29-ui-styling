import './_category-item.scss';

import React from 'react';
import {connect} from 'react-redux';

import {expenseCreate as expenseActionCreate} from '../../action/expense-actions.js';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class CategoryItem extends React.Component {
  render() {
    let categoryID = this.props.category.id;

    return (
      <section className='category-item'>
        <div className='category-container'>
          <h2>{this.props.category.name}</h2>
          <p className='money'>${this.props.category.budget}</p>
          <button className='remove'
          onClick={() => this.props.categoryDelete(this.props.category)}>x</button>



          <CategoryForm
            buttonText='update'
            onComplete={this.props.categoryUpdate}
            category={this.props.category}
          />
        </div>

        <div className='expense-container'>
          <h3>{this.props.category.name} expenses:</h3>
          <ExpenseForm
            buttonText='add'
            onComplete={this.props.expenseCreate}
            category={this.props.category}
          />

          {this.props.expenses[categoryID].length > 0 ? this.props.expenses[categoryID].map(item =>
            <ExpenseItem key={item.id} expense={item} />
          ) : <p>* add an expense *</p>}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: (expense) => dispatch(expenseActionCreate(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

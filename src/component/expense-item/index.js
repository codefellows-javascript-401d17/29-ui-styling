import './_expense-item.scss'

import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    console.log('props:', this.props);
    let {expense, expenseUpdate, expenseDelete} = this.props;

    return (
      <section className='expense-item'>
        <div>
          <div className='content'>
            <h2>{expense.name}</h2>
            <p className='money'>${expense.price}</p>
            <button className='remove'
            onClick={() => expenseDelete(expense)}>x</button>
          </div>
          <div className='editing'>
            <ExpenseForm
              buttonText='update'
              onComplete={expenseUpdate}
              expense={expense}
            />
          </div>
        </div>
      </section>
    )
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);

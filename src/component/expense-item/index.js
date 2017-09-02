import './_expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete, expenseCreate, expenseEdit} from '../../action/expense-actions.js'


class ExpenseItem extends React.Component {
  render() {
    let {expenseUpdate, expenseDelete, expenseEdit, expense, category} = this.props;
    return(
      <section>
        {expense.editing === false ?
          <li className='expense-item' onDoubleClick={()=>expenseEdit(expense)}>
            <h2>{expense.title}</h2>
            <h3>{expense.price}</h3>
            <button className='deleteButton' onClick={()=>expenseDelete(expense)}>x</button>
          </li> :
          <li className='expense-item'>

            <div className='editing'>
              <ExpenseForm
                expense={expense}
                buttonText='update expense'
                onComplete={expenseUpdate}
                />
            </div>
          </li>
        }
      </section>
    )
  }
}

let mapStateToProps = () =>({});
let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseEdit: (expense) => dispatch(expenseEdit(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);

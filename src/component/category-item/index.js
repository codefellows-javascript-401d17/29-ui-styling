import './_category-item.scss';

import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js'


class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete, expenseCreate, expense, expenses} = this.props;
    let totalSpent = this.props.expenses.reduce((p, c) => {
      return p + c.price;
    }, 0)

    let remaining = category.budget - totalSpent;
    return(
      <div className='categoryItem'>

        <li className='categoryli'>
          <h2>{category.title}</h2>
          <h3>total budget: ${category.budget}</h3>
          <h3>total spent: ${totalSpent}</h3>
          <h3>total budget left: ${remaining}</h3>
          <button className='deleteButton' onClick={()=>categoryDelete(category)}>x</button>
          <div className='editing'>
            <CategoryForm
              buttonText='update category'
              category={category}
              onComplete={categoryUpdate}
              />
          </div>
          <div className='exbutton'>

            <ExpenseForm
              buttonText='add expense'
              categoryID={category.id}
              onComplete={expenseCreate}
              />
          </div>
          <section>

            <ul>
              {expenses.map((item) => {
                return (
                  <ExpenseItem
                    key={item.id}
                    expense={item}
                    />
                )
              })}
            </ul>
          </section>
        </li>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id]
  }
}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

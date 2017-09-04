import uuid from 'uuid/v1';

export const expenseCreate = (expense) => {
  return {
    type: 'EXPENSE_CREATE',
    payload: {...expense, id: uuid(), timestamp: new Date(), editing: false}
  }
}

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: {...expense}
})

export const expenseDelete = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: {...expense}
})

export const expenseEdit = (expense) => ({
  type: 'EXPENSE_EDIT',
  payload: {...expense}
})

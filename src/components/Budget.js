import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { dispatch, budget, expenses, currency } = useContext(AppContext);    

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (value) => {
        if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than spending");
            return
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ size: 10}}
                    step="10"
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};

export default Budget;

// react-router-dom imports
import { Form, Link } from "react-router-dom"

// library imports
import { BanknotesIcon } from "@heroicons/react/24/outline"

// helper functions
import { calculateSpentByBudget, formatCurrency, formatPercentage } from "../helpers"

const BudgetItem = ({ budget , showDelete = false }) => { 
   const { id, name, amount, color } = budget
   const spent = calculateSpentByBudget(id)

  return ( 
    <div 
      className="budget"
      style={{
        "--accent": color
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)}</small>
      </div>
      {
        showDelete ? (
          <Form>
            <p>hi</p>
          </Form>
        ) : (
          <Link>
            <span>View Details</span>
            <BanknotesIcon width={20} />
          </Link>
        ) 
      }
    </div>
  )
}
export default BudgetItem
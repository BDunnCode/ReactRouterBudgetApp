// react-router-dom imports
import { useLoaderData } from "react-router-dom"

// loader
export function dashboardLoader() {
  const expenses = fetchData("expenses")
  return { expenses }
} 

export const ExpensesPage = () => { 
  const { expenses } = useLoaderData

  return <div>ExpensesPage</div>
}


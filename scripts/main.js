import { getCustomers } from "./customers.js"
import { getEmployees } from "./employees.js"

const render = () => {
    let mainContainer = document.querySelector("#mainContainer")

    let employeesHTML = getEmployees()
    let customersHTML = getCustomers()

    mainContainer.innerHTML += 
    `
    ${employeesHTML}
    ${customersHTML}
    `

    return mainContainer
}

render()
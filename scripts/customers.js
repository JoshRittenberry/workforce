import { getCustomerEmployees } from "./employeeCustomers.js"

const customerList = await fetch("http://localhost:8088/customers")
const customers = await customerList.json()

export const getCustomers = () => {
    let customersHTML = `
    <section id="customerSection">
        <h2>Customers</h2>
    `

    let customerDivs = customers.map(
        (customer) => {

            let employeeList = getCustomerEmployees(customer.id)
            
            return `
                <div class="customer">
                    <header class="customer__name">
                        <h1>${customer.name}</h1>
                    </header>
                    <section class="customer__employee">
                        Has worked for this customer
                        ${employeeList}
                    </section>
                </div>
            `
        }
    )

    customersHTML += customerDivs.join("") + `</section>`

    return customersHTML
}
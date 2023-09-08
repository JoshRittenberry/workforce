const employeeCustomersList = await fetch("http://localhost:8088/employeeCustomers?_expand=customer&_expand=employee")
const employeeCustomers = await employeeCustomersList.json()

// Gets a list of customers an employee has worked for
export const getEmployeeCustomers = (employeeId) => {
    let customersHTML = `<ul>`

    let custList = employeeCustomers.map(
        
        (employeeCustomer) => {
            if (employeeId === employeeCustomer.employeeId) {
                return `
                <li>${employeeCustomer.customer.name}</li>
                `
            }
        }
    )

    customersHTML += custList.join("") + `</ul>`
    return customersHTML
}

// Get a list of employees a customer has worked with
export const getCustomerEmployees = (customerId) => {
    let customersHTML = `<ul>`

    let custList = employeeCustomers.map(
        
        (employeeCustomer) => {
            if (customerId === employeeCustomer.customerId) {
                return `
                <li>${employeeCustomer.employee.firstName} ${employeeCustomer.employee.lastName}</li>
                `
            }
        }
    )

    customersHTML += custList.join("") + `</ul>`
    return customersHTML
}
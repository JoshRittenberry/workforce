import { getEmployeeCustomers } from "./employeeCustomers.js"

const employeeList = await fetch("http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location")
const employees = await employeeList.json()

export const getEmployees = () => {
    let employeesHTML = `
    <section id="employeeSection">
        <h2>Employees</h2>
    `
    
    let employeeDivs = employees.map(
        (employee) => {

            let employeeAge = (new Date().getFullYear()) - employee.yearOfBirth

            let customerList = getEmployeeCustomers(employee.id)

            if (employee.department.id === 2) {
                return `
                    <div class="employee">
                        <header class="employee__name">
                            <h1>${employee.firstName} ${employee.lastName}</h1>
                        </header>
                        <section class="employee__computer">
                            Currently using a ${employee.computer.year} ${employee.computer.model}
                        </section>
                        <section class="employee__department">
                            Works in the ${employee.department.name} department
                        </section>
                        <section class="employee__location">
                            Works at the ${employee.location.name} office
                        </section>
                        <section class="employee__customer">
                            Has worked for the following customers.
                            ${customerList}
                        </section>
                    </div>
                `
            } else {
                return `
                <div class="employee">
                    <header class="employee__name">
                        <h1>${employee.firstName} ${employee.lastName}</h1>
                    </header>
                    <section class="employee__computer">
                        Currently using a ${employee.computer.year} ${employee.computer.model}
                    </section>
                    <section class="employee__department">
                        Works in the ${employee.department.name} department
                    </section>
                    <section class="employee__location">
                        Works at the ${employee.location.name} office
                    </section>
                </div>
            `
            }
        }
    )

    employeesHTML += employeeDivs.join("") + `</section>`

    return employeesHTML
}
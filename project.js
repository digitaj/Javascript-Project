const signup = e => {
    e.preventDefault();
    let formData = {
        fname: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('moble').value,
        gender: document.getElementById('gender').value,
        dob: document.getElementById('dob').value,
        department: document.getElementById('department').value,
        job: document.getElementById('job').value,
        state: document.getElementById('state').value,
        salary: document.getElementById('salary').value,
        nationality: document.getElementById('nationality').value
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    // console.log(localStorage.getItem('formData'))
    displayData();
}
  var salary_val;

function displayData() {
    if (localStorage.getItem('formData')) {
        let { fname, email, number, gender, dob, department, job, state, salary, nationality } =
        JSON.parse(localStorage.getItem('formData'))
        var output = document.getElementById('output');
        
        salary_val = salary;

        var sal_div = document.querySelector(".salary");
    output.innerHTML = `
    <table>
        <tbody>
            <tr>
                 <td>Full Name</td>
                 <td>${fname}</td>
            </tr>
            <tr>
                 <td>Email Address</td>
                 <td>${email}</td>
            </tr>
            <tr>
                 <td>Moble Number</td>
                 <td>${number}</td>
            </tr>
            <tr>
                 <td>Gender</td>
                 <td>${gender}</td>
            </tr>
            <tr>
                 <td>DOB</td>
                 <td>${dob}</td>
            </tr>
            <tr>
                 <td>Department</td>
                 <td>${department}</td>
            </tr>
            <tr>
                 <td>Job</td>
                 <td>${job}</td>
            </tr>
            <tr>
                 <td>Salary</td>
                 <td>${salary}</td>
            </tr>
            <tr>
                 <td>State</td>
                 <td>${state}</td>
            </tr>
            <tr>
                 <td>Nationality</td>
                 <td>${nationality}</td>
            </tr>
        </tbody>
    </table>
     ` 
    }

    sal_div.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <td id="basic">Basic Salary</td>
                    <td>${salary_val * 0.6}</td>
                </tr>
                <tr>
                <td id="transport">Transport</td>
                <td>${salary_val * 0.1}</td>
            </tr>
            <tr>
                <td id="feeding">Feeding</td>
                <td>${salary_val * 0.1}</td>
            </tr>
            <tr>
                <td id="health">Health</td>
                <td>${salary_val * 0.1}</td>
            </tr>
            <tr>
                <td id="utility">Utility</td>
                <td>${salary_val * 0.1}</td>
            </tr>
            </tbody>
        </table>
    `

    // var salary = sal * 0.6;
    //     document.getElementById('basic').innerHTML = salary;
    //     var transport = sal * 0.6;
    //     document.getElementById('transport').innerHTML = transport;
    //     var feeding = sal * 0.2
    //     document.getElementById('feeding').innerHTML = feeding
    //     var health = sal * 0.1
    //     document.getElementById('health').innerHTML = health
    //     var utility = sal * 0.3
    //     document.getElementById('utility').innerHTML = utility
}
//  <button onclick="document.getElementById('clear').value = ''">clear</button>


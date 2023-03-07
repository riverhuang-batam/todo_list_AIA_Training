const datas = []
let number = 0;
let submitForm = document.getElementById('submitForm')
let tableValue = document.getElementById('tableValue')
submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const description = e.target['description'].value;
    const status = e.target['status'].value;
    submitData(description, status)
    e.target['description'].value =''
    e.target['status'].value = ''
})
const submitData = (description, status) => {
    number++
    const objectData = {
        id: number,
        description,
        status
    }
    datas.push(objectData)
    showData()
}
const showData = () => {
    tableValue.innerHTML = `
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    `
    datas.map(data => {
        return tableValue.innerHTML += `
            <tr>
            <td>${data.id}</td>
            <td>${data.description}</td>
            <td>${data.status}</td>
            </tr>
          `
        }
    )
}
showData()
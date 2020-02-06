let users = [];
let n = 0;
let selectedRow = null;


let formSubmit = (event) =>{
    event.preventDefault();
    users[n] = {}
   
    if(selectedRow === null){
        if(validate()){
            createUser();
        }
    }
    else{
        updateUser();
    }   

}

let createUser = () => {
    users[n].name = document.getElementById('name').value;
    users[n].email = document.getElementById('email').value;
    users[n].age = document.getElementById('age').value;
    users[n].skills = document.getElementById('skills').value;
    clearForm();

    n += 1;
    insertTable();
}

let updateUser = () => {
    selectedRow.cells[0].innerHTML = document.getElementById('name').value;
    selectedRow.cells[1].innerHTML = document.getElementById('email').value;
    selectedRow.cells[2].innerHTML = document.getElementById('age').value;
    selectedRow.cells[3].innerHTML = document.getElementById('skills').value;
    clearForm();
    selectedRow = null;
}

let clearForm = () =>{
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('skills').value = "";
}

const validate = () => {

    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value; 
    let idade = document.getElementById('age').value ;
    let tecnologias = document.getElementById('skills').value;
    if(nome === "" || email === "" ||idade === "" || tecnologias  === "") {
        alert("Você não pode efetuar o cadastro, existe algum campo vazio")
        return false;
    }
    else {
        createUser(nome,email,idade,tecnologias);
        return true;
    }
}

let onDelete = (linha) => {
    if(confirm("Quer deletar o registro?")){
          let i=linha.parentNode.parentNode.rowIndex;
          document.getElementById('myTable').deleteRow(i);
    }
}

let insertTable = () => {
    // Find a <table> element with id="myTable":
    let table = document.getElementById("myTable");
    var rowCount = table.rows.length;

    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = table.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = users[n-1].name;
    cell2.innerHTML = users[n-1].email; 
    cell3.innerHTML = users[n-1].age;
    cell4.innerHTML = users[n-1].skills;
    cell5.innerHTML = `<a onClick="onEdit(this)" class="action-btn green">U</a>
                   <a onClick="onDelete(this)" class="action-btn red">X</a>`; 
}

let onEdit = (td) => {

    isValid = true;

    selectedRow = td.parentElement.parentElement;
    
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("skills").value = selectedRow.cells[3].innerHTML;

}

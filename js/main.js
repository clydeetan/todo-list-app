var btnSubmit = document.getElementById('btnSubmit');
var table = document.getElementById('emptyList');
var userInput = document.getElementById('txtBox');
var row = document.createElement('div');
var charCount = document.getElementById('counter');

function inputLength(){
	return userInput.value.length;
} 


function createList(e){
    
    if (inputLength() === 0){
        return e.preventDefault();
    }
    
    var row = document.createElement('div');
    row.classList.add('row');
    var p = document.createElement('p');
    p.classList.add('parag');
    row.appendChild(p);
    p.appendChild(document.createTextNode(userInput.value));
    table.appendChild(row);
    userInput.value = "";

    function crossOut() {
    row.classList.toggle('done');
    }
    //add click event to row, cross out clicked row
    row.addEventListener('click',crossOut);
    
    //add delete button
    var btnDelete = document.createElement('button');
    btnDelete.innerHTML = '<i class="fas fa-times-circle fa-2x"></i>';
    btnDelete.classList.add('btnRemove');
    row.appendChild(btnDelete);
    
    btnDelete.addEventListener('click', removeList);

    function removeList(){
        row.classList.add('delete');
    }
    
    e.preventDefault();
}

btnSubmit.addEventListener('click', createList);

userInput.addEventListener('keyup', function(){
    charCount.innerText = 50 - inputLength();
});
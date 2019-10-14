function display(){

//getting name, password and dob
let name = document.getElementById("name").value;
let password = document.getElementById("password").value;
let dob = document.getElementById('dob').value;

//initiating div and p where data has to be written
let detailsDiv = document.getElementById('details');
let pTag = document.getElementById('pTag');

//checking which radio box is selected
let radioSelected = "";

if(document.getElementById('male').checked){
    radioSelected = document.getElementById('male').value;
}
else if(document.getElementById('female').checked){ 
    radioSelected = document.getElementById('female').value;
}

// array for checkbox's options
let checkBoxOptions = [];

if(document.getElementById('option1').checked){
    checkBoxOptions.push(document.getElementById('option1').value);
}
if(document.getElementById('option2').checked){
    checkBoxOptions.push(document.getElementById('option2').value);
}

//getting data from select tag;
let selectTag = document.getElementById('selectOptions');
let activeOption = selectTag.options[selectTag.selectedIndex].value;


//writing data in div and p tag
details.innerHTML = '';
pTag.innerHTML = '';
detailsDiv.innerHTML += ''+ name +'<br>'+ password + '<br>' + radioSelected + '<br>' + dob + '<br>' + activeOption + '<br>';
pTag.innerHTML +=  name + '<br>'+ password + '<br>'+radioSelected + '<br>' + dob + '<br>' + activeOption + '<br>';

for (option in checkBoxOptions){
    detailsDiv.innerHTML+=checkBoxOptions[option] + '<br>';
    pTag.innerHTML+=checkBoxOptions[option] + '<br>';
}


}



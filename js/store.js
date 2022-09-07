const getElementById = id => {
    const valueField = document.getElementById(id);
    const valueInput = valueField.value;
    return valueInput;
}
const setValueToLocalStorage = (key, valueField) =>{
    const value = getElementById(valueField);
    if(value.length != 0){
        localStorage.setItem(key,value);
    }
    else{
        alert('Please Fill-up the  Field....');
    }
};

const deteteValueFromLocalStorage = (key) =>{
    localStorage.removeItem(key);
};

document.getElementById('reset').addEventListener('click', function(){
    localStorage.clear();
    const nameField = document.getElementById('name-field');
    nameField.value = '';

    const emailField = document.getElementById('email-field');
    emailField.value = '';

    const messageField = document.getElementById('message-field');
    messageField.value = '';
    location.reload();
});


const getDataFromLocalStorage = () =>{
    const savedData = localStorage.getItem('person');
    let person = {};
    if(savedData){
        person = JSON.parse(savedData);
    }
    return person
}
const saveDataToLocalStorage = () => {
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
    nameField.value = '';

    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    emailField.value = '';

    const messageField = document.getElementById('message-field');
    const message = messageField.value;
    messageField.value = '';
    
    if(name.length != 0 && email.length != 0 && message.length != 0){
        const person = getDataFromLocalStorage();
        person['name'] = name;
        person['email'] = email;
        person['message'] = message;
        
        const personStringify = JSON.stringify(person);
        localStorage.setItem('person', personStringify);
        displayDataFromLocalStorage();
    }
    else{
        alert('Please Fill-up the all Field....');
    }
    
}
const displayDataFromLocalStorage = () =>{
    const people = getDataFromLocalStorage();
    const infoContainer = document.getElementById('info-container');
    const div = document.createElement('div');
    if(Object.keys(people).length === 0){
        infoContainer.classList.add('hidden');
    }
    else{
        div.innerHTML = `
        <P class='text-lg font-semibold'>Name : ${people.name}</P>
        <P class='text-lg font-semibold'>Email : ${people.email}</P>
        <P class='text-lg font-semibold'>Message : ${people.message}</P>
        `
        infoContainer.appendChild(div);
        infoContainer.classList.remove('hidden');
        console.log(people);
    }
}
displayDataFromLocalStorage();
const form = document.querySelector('.login-form')
console.log(form)

form.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((name, value) => {
        console.log( name);
        console.log(value);
        if (name === "" || value === "") {
    window.alert("Всі поля повинні бути заповнені!");
    }
    })  
};


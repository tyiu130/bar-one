//hamburger menu: followed code from the Ecommerce Code Along in Module 1


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('#hamburger');

    const menuCloseButton = document.querySelector('#menuClose');

    const menu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    });

    })


// Blog Form


    const form = document.querySelector('form');
    const userInput = document.querySelector('input[type=text]');
    const userEmail = document.querySelector('#email');
    const userComment = document.querySelector('#comment');
    const postComment = document.querySelector('newComments');
    const submitButton = document.querySelector('.formButton');
    const date = new Date();
    const dateSubmitted = date.toDateString();
    

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(userInput.value);
        console.log(userEmail.value);
        console.log(userComment.value);
        
        //Display name, date and comment ontop of form
        //create li element to add to ul div
        //add text to li element
        //append the li to div
        //display the new content with .innerhtml? onto page
        const newList = document.createElement('li');
        newList.innerHTML = `${dateSubmitted} by ${userInput.value}<li>${userComment.value}</li>`;
        document.querySelector('.newComments').appendChild(newList);

        userInput.value = '';
        userEmail.value = '';
        userComment.value = '';
        
        
    })




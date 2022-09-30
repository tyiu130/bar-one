//followed code from the Ecommerce Code Along in Module 1


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
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form');
    const userInput = document.querySelector('input[type=text]');
    const userEmail = document.querySelector('#email');
    const userComment = document.querySelector('#comment');
    const postComment = document.querySelector('newComments')
    const submitDate = Date();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(userInput.value);
        console.log(userEmail.value);
        console.log(userComment.value);
        
        //Display name, date and comment ontop of form

        //make a ul in the comment div
        const newList = document.createElement('ul');
        
        //create li element to add to ul div

        //add text to li element

        //append the ul to the div

        //display the new content with .innerhtml? onto page
        
    })

});


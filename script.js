// let ulItem = document.querySelector('.ul-list');

// let liItem = document.createElement('li');
// liItem.textContent = 'javascript';

// let liItem2 = document.createElement('li');
// liItem2.textContent = 'html';


// ulItem.appendChild(liItem);
// ulItem.appendChild(liItem2);

// let input = document.querySelector('.input-form');
// let addButton = document.querySelector('button');
// let ul = document.querySelector('.ul-list');
// let delateButton = document.querySelector('.clearlist');
// let form = document.querySelector('form-wrapper');

// form.addEventListener('submit', function(event) {
//     // 1) get input value

//     let value = input.value;
//     // 2) add input value in ul

//     let li = document.createElement('li');
//     li.classList.add('item')
//     // let btn = document.createElement ('button');
//     // btn.textContent = 'Delate';
//     // btn.addEventListener('click', function() {
//     //     li.remove();
//     // })
    

//     let span = document.createElement('span');
//     span.textContent = 'x';
//     span.classList.add('delete-icon')
//     span.addEventListener('click', function() {
//         li.remove();
//     })


//     li.textContent = value;
//     li.appendChild(btn);
//     ul.appendChild(li);
    
// // 3) clear input

// input.value = '';
// })

// delateButton,addEventListener('click', function () {
//     ul.innerHTML = '';
// })

/// example 2 burger bar

// let navigationItem = document.getElementById('links');
// let toggleButton = document.getElementById('toggleButton');

// toggleButton.addEventListener('click', function() {
//     navigationItem.classList.toggle('activeNavigation');
// })

/// exapmle3 - ajax request
// 1. xml. http request
// 2. fetch

//1. 

// let requist = new XMLHttpRequest();

// requist.addEventListener('load', function() {
//     console.log(this);
// })

// requist.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// let requist = new XMLHttpRequest();

// requist.addEventListener('load', function() {
//     console.log(this);
// })

// requist.open('POST', 'https://jsonplaceholder.typicode.com/posts');

// let requist = new XMLHttpRequest();

// requist.addEventListener('load', function() {
//     console.log(this);
// })

// requist.open('DELETE', 'https://jsonplaceholder.typicode.com/posts');

// let requist = new XMLHttpRequest();

//     requist.addEventListener('load', function() {
//         console.log(this.responseText);
//     })

//     requist.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//     requist.send();

let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})



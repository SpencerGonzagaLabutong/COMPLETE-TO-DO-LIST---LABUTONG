// STRING METHOD TOPIC 

let samplestring = "Spencer Labutong";
let samplearray = ['spencer','gonzaga','labutong'];
let samplearraynumbers = [4,5,7,8];


// alert(samplestring.length);

//1) in string it count the number of characters
//   in array it counts the number of item inside array

// alert(samplestring.toUpperCase());
// alert(samplestring.toLowerCase());

//2) toUppercase turns the string to capitalized word
//   toLowercase turns the string to lowercase

// alert(samplestring.replace('Spencer','Juan'));

//3) .replace - help u to replacce the selected part of tha string

// alert(samplestring.slice(1,4));
// alert(samplestring.substring(7,1));

//4) slice -extract a part of ur string two paramaters (start,end)
//   substring - same as slice but more flexible

// ARRAYS METHOD TOPIC 

// let checknumbers = (num) => {
//     return num < 21;
// }
// alert(samplearraynumbers.every(checknumbers));

// 1) check if each item in the array satsifies the given condiiotn

// alert(samplearray.fill("Errol"));
// alert(samplearray.fill("Errol", 0,1));

// 2) fill for the selected item


// let checknumbers = (num) => {
//     return num < 21;
// }
// alert(samplearraynumbers.filter(checknumbers));
// normal filter mode

// alert(samplearraynumbers.filter(
//     (num) => {
//         return num < 8;
//     }
// ))

// 3) filter depends on the  condition


// let checknumbers = (num) => {
//     return num < 21;
// }
// alert(samplearraynumbers.find(checknumbers));

// normal find method

// alert(samplearraynumbers.find(
//     (num) => {
//         return num < 8;
//     }
// ))

// 4) finds - only first value will show base on the condition

let animals = ['dog','cat','dinosaur','rat'];

// for (let i = 0; i < animals.length; i++) {
//     alert(animals[i]);  
// }
// using normal loop



// let showanimals = (name,number) => {
//     alert(`${number} ${name}`);
// }

// animals.forEach(showanimals);

// animals.forEach(
//     (name) => {
//         alert(`${name}`);
//     }    
// )


// animals.push('kangaroo');
// animals.push('godzilla');
// // .ppush allow u to add in ur array

// animals.pop();
// animals.pop();
// animals.pop();
// //.pop removes the last item in ur array
// alert(animals);

// let todo = ['Eat','Sleep','Code','Play'];
// let todo = localStorage.getItem("todo").split(",");

let todo = [];

if(localStorage.getItem("todo")){
    todo = localStorage.getItem("todo").split(",");
}

let container = document.querySelector("#todolist");

const showlist = () => {
    container.innerHTML = '';
    todo.forEach(
        (task,index) => {
            container.innerHTML += `<li>${task} 
            <button class="btn btn-secondary" onclick="removespecific(${index});">REMOVE</button>
            </li>`;
        }
    );   // Add a button for each item to remove it
}

// Function to remove a specific item from the to-do list
const removespecific = (index) => {
    todo.splice(index, 1); // Remove the item at the specified index
    showlist(); // Update the display
    localStorage.setItem("todo", todo); // Save to local storage
}

const addtodo = () => {
    let newitem = document.querySelector("#createtodo").value;
    todo.push(newitem);
    // alert(todo);
    // container.innerHTML += `<li>${newitem}</li>`;
    // container.innerHTML = '';
    // todo.forEach(
    //     (task) => {
    //         container.innerHTML += `<li>${task}</li>`;
    //     }
    // );
    showlist();
    localStorage.setItem("todo", todo)
}

const removetodo = () => {
    todo.pop();
    // container.innerHTML = '';
    // todo.forEach(
    //     (task) => {
    //         container.innerHTML += `<li>${task}</li>`;
    //     }
    // );
    showlist();
    localStorage.setItem("todo", todo)
}

const searchtodo = () => {
    let searchtext = document.querySelector("#searchtext").value.toLowerCase(); // Retrieve the search text and convert it to lowercase
    let filterlist = todo.filter(task => task.toLowerCase().includes(searchtext)); // Filter the to-do list based on the search text
    container.innerHTML = ''; // Clear the existing content of the container
    filterlist.forEach(task => {
        container.innerHTML += `<li>${task}</li>`; // Display the filtered todo list
    });
};


showlist();

// localStorage.setItem('name', 'samplename');

// let data = localStorage.getItem('name');
// alert(data);
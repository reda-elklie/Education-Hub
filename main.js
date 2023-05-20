let allLines = document.querySelectorAll(".line");
let activeLine = allLines[0];

const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function() {
    navigation.classList.toggle("nav");
});

navigation.addEventListener("click", function() {
    navigation.classList.remove("nav");
});





// activeLine.classList.add("active");

allLines.forEach(function(line) {
    line.addEventListener("click", function() {
        if (activeLine !== line) {
            activeLine.classList.remove("active");
            line.classList.add("active");
            activeLine = line;
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Get the date input element
    var dateInput = document.getElementById('dateInput');

    // Get today's date
    var today = new Date();

    // Initialize flatpickr with defaultDate option
    flatpickr(dateInput, {
        // Specify the options and customization here
        // For example:
        defaultDate: today, // Set default date to today
        dateFormat: 'Y-m-d', // Date format
        minDate: 'today', // Minimum selectable date
        maxDate: new Date().fp_incr(30), // Maximum selectable date (30 days from today)
        disableMobile: true // Disable mobile-friendly calendar
            // ... more options ...
    });
});

function redirectToPage(destination) {
    window.location.href = destination;
}
// to do list


const add = document.querySelector("#add");
const taskContainer = document.querySelector(".task-container");
const inputTask = document.getElementById("input-task");


// Event listener for add Button
add.addEventListener("click", function() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerText = "check"
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "delete"
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)


    if (inputTask.value === "") {
        e.preventDefault();
    } else {
        taskContainer.appendChild(task)
    }
    inputTask.value = ""
    inputTask.focus()
        // checkButton.addEventListener("click", function() {
        //     checkButton.classList.toggle('active');

    //     checkButton.parentElement.style.textDecoration = "underline"


    // })
    checkButton.addEventListener("click", function() {
        li.style.textDecoration = "line-through"
        checkButton.style.backgroundColor = "rgba(51, 8, 8, 0.349)"
        checkButton.innerHTML = "checked"
    })
    deleteButton.addEventListener("click", function() {
        task.remove()
    })
});
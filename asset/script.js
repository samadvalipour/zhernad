function callNumber() {
    window.location.href = "tel:05836423797"; // Replace with your phone number
}
function openMap() {
    window.location.href = "geo:37.22678262597227, 58.213310406178145"; // Replace with the actual latitude and longitude
}
function openInstagram() {
    window.open("https://www.instagram.com/username/"); // Replace 'username' with the actual Instagram username
}
function openStudentForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdwy7UBv2oTAh426kvzes3tjNmUQQy4Chd-JIg3UPe0sycYwQ/viewform?usp=sf_link"); // Replace 'username' with the actual Instagram username
}

function openTeacherForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScQcajiM2jre9nlZmtVVZgTYp3DUWLcIVRaMzFLLUnN9plTzQ/viewform?usp=sf_link"); // Replace 'username' with the actual Instagram username
}
document.addEventListener('DOMContentLoaded', function() {
    const scrollButtons = document.querySelectorAll('.scroll-to-register-button');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('#register').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollButtons = document.querySelectorAll('.see-courses');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' });
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {

    // Get all the tab buttons and tab content
    const tabButtons = document.querySelectorAll('[role="tab"]');
    const tabContents = document.querySelectorAll('[role="tabpanel"]');
    // Add event listener to each tab button
    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the target tab content ID
            const targetID = button.getAttribute('data-tabs-target');

            // Hide all tab contents
            tabContents.forEach(function (content) {
                content.classList.add('hidden');
            });
            tabButtons.forEach(function (button) {
                button.classList.remove('border-b-2', 'border-black', 'text-black');
                button.setAttribute('aria-selected', 'false');
            });

            // Show the target tab content
            document.querySelector(targetID).classList.remove('hidden');

            // Add 'active' class to the clicked tab button
            button.classList.add('border-b-2', 'border-black', 'text-black');
            button.setAttribute('aria-selected', 'true');

            // Remove 'active' class from all tab buttons
            
        });
    });
});

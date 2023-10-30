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

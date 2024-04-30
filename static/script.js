/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const confirmation = confirm('Are you sure you want to delete this note?');
            if (confirmation) {
                const form = button.parentElement;
                form.submit();
            }
        });
    });
});


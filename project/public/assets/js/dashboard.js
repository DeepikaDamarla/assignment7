// Function to toggle sidebar visibility

// Function to remove a match card
function removeMatch(event) {
    const matchCard = event.target.closest('.match-card');
    if (matchCard) {
        matchCard.remove();
    }
}

// Attach event listeners to remove buttons after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeMatch);
    });
});
// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    console.log('drawer')
    sidebar.classList.toggle('active'); // Toggle the active class
    sidebar.classList.toggle('deActive'); // Toggle the active class
}

// Attach event listener to toggle button
document.getElementById('toggleButton').addEventListener('click', toggleSidebar);

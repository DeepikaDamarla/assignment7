document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    // Input fields
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const mobile = document.getElementById("mobile");

    // Error message spans
    const firstnameError = document.getElementById("firstnameError");
    const lastnameError = document.getElementById("lastnameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const mobileError = document.getElementById("mobileError");
    const playerError = document.getElementById("playerError"); // New error span for player input

    // Helper functions for validation
    function validateName(name) {
        return /^[A-Za-z]+$/.test(name); // Only alphabets
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple email validation
    }

    function validatePassword(password) {
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password); // Password rules
    }

    function validateMobile(mobile) {
        return /^\d{10}$/.test(mobile); // 10-digit mobile number
    }

    // Form submission event listener
    form.addEventListener("submit", function (event) {
        // Clear all error messages
        firstnameError.textContent = "";
        lastnameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        mobileError.textContent = "";
        playerError.textContent = ""; // Clear player input error message

        let valid = true;

        // Firstname validation
        if (!validateName(firstname.value)) {
            firstnameError.textContent = "Firstname should only contain letters.";
            valid = false;
        }

        // Lastname validation
        if (!validateName(lastname.value)) {
            lastnameError.textContent = "Lastname should only contain letters.";
            valid = false;
        }

        // Email validation
        if (!validateEmail(email.value)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Password validation
        if (!validatePassword(password.value)) {
            passwordError.innerHTML = `
            <ul>
                <li>Password must be at least 8 characters</li>
                <li>Contain one uppercase letter</li>
                <li>Contain one number</li>
                <li>Contain one special character</li>
            </ul>`;
            valid = false;
        }

        // Confirm password validation
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        }

        // Mobile number validation
        if (!validateMobile(mobile.value)) {
            mobileError.textContent = "Please enter a valid 10-digit mobile number.";
            valid = false;
        }

        // If the form is invalid, prevent submission
        if (!valid) {
            event.preventDefault();  // Prevent form submission if invalid
        }
    });

    // Add Player Button functionality
//     const addPlayerButton = document.getElementById("add-player");
//     const playerList = document.getElementById("player-list");
//     const favoritePlayerInput = document.getElementById("favoritePlayer");

//     addPlayerButton.addEventListener("click", function () {
//         // event.preventDefault();  // Prevent default form submission

//         const newValue = favoritePlayerInput.value.trim();

//         // Clear previous player input error message
//         playerError.textContent = "";

//         // Check if the input is empty
//         if (newValue === '') {
//             playerError.textContent = "Player name cannot be empty.";
//             return;
//         }

//         // Check for duplicate player names
//         const existingPlayers = Array.from(playerList.children).map(li => li.innerText.replace('Remove', '').trim());
//         if (existingPlayers.includes(newValue)) {
//             playerError.textContent = 'This player is already in the list.';
//             favoritePlayerInput.value = ''; // Clear the input if duplicate
//             return;
//         }

//         // Create a new list item for the player
//         const playerItem = document.createElement('li');
//         playerItem.innerHTML = `
//             ${newValue}
//             <button class="remove-btn" type="button">Remove</button>
//         `;

//         // Add event listener for the remove button
//         playerItem.querySelector('.remove-btn').addEventListener('click', function () {
//             playerList.removeChild(playerItem);
//         });

//         // Append the player item to the list and clear the input
//         playerList.appendChild(playerItem);
//         favoritePlayerInput.value = '';
//     });
const addPlayerButton = document.getElementById("add-player");
    const playerList = document.getElementById("player-list");
    const favoritePlayerInput = document.getElementById("favoritePlayer");

    addPlayerButton.addEventListener("click", function () {
        const newValue = favoritePlayerInput.value.trim();

        // Check for duplicate player names
        const existingPlayers = Array.from(playerList.children).map(li => li.innerText.replace('Remove', '').trim());
        if (newValue === '') return;
        if (existingPlayers.includes(newValue)) {
            alert('This player is already in the list.');
            favoritePlayerInput.value = ''; // Clear the input if duplicate
            return;
        }

        const playerItem = document.createElement('li');
        playerItem.innerHTML = `${newValue}<button class="remove-btn">Remove</button>`;
        playerItem.querySelector('.remove-btn').addEventListener('click', () => {
            playerList.removeChild(playerItem);
        });
        playerList.appendChild(playerItem);
        favoritePlayerInput.value = '';
    });
});


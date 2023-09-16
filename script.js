// Function to generate a random password
function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_-+=";
    
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}

// Update the password input field with the generated password
function updatePassword() {
    const passwordField = document.getElementById("password");
    passwordField.value = generatePassword();
}

// Event listener for the "Generate Password" button
document.getElementById("generate-btn").addEventListener("click", updatePassword);

// Initial password generation
updatePassword();

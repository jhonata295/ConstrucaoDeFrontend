const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const emailError = document.getElementById("emailError");
const senhaError = document.getElementById("senhaError");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    emailError.textContent = "";
    senhaError.textContent = "";

    let isValid = true;

    if (email.value.trim() === "") {
        emailError.textContent = "O campo de email é obrigatório.";
        isValid = false;
    }

    if (senha.value.trim() === "") {
        senhaError.textContent = "O campo de senha é obrigatório.";
        isValid = false;
    }

    if (!isValid) return;

    
    window.location.href = "/";
});


email.addEventListener("input", () => {
    if (email.value.trim() !== "") {
        emailError.textContent = "";
    }
});

senha.addEventListener("input", () => {
    if (senha.value.trim() !== "") {
        senhaError.textContent = "";
    }
});
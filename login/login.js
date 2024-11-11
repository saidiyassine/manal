const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Récupérer les éléments du DOM
const signupForm = document.getElementById('sign-up-form');
const loginForm = document.getElementById('login-form');
const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const loginEmail= document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

// Fonction pour gérer l'inscription
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire d'inscription
    const username = signupUsername.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
    
    // Créer un objet utilisateur
    const user = {
        username: username,
        email: email,
        password: password
    };
    
    // Vérifier si un utilisateur existe déjà dans localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser) {
        // Si l'utilisateur existe déjà, écraser les données avec le nouveau
        localStorage.setItem('user', JSON.stringify(user));
        alert('Votre compte a été mis à jour.');
    } else {
        // Si l'utilisateur n'existe pas, enregistrer un nouvel utilisateur
        localStorage.setItem('user', JSON.stringify(user));
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
    }
    
    // Réinitialiser le formulaire
    signupForm.reset(); 
    window.location.href = 'login.html';
});


// Fonction pour gérer la connexion
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire de connexion
    const useremail = loginEmail.value;
    const password = loginPassword.value;
    
    // Vérifier si l'utilisateur existe dans localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(storedUser);
    
    if (storedUser && storedUser.email === useremail && storedUser.password === password) {
        alert('Connexion réussie !');
        window.location.href = '../test/index.html'; // Rediriger vers une autre page (par exemple home.html)
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
});

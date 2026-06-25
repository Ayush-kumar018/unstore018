// Register
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const user = {
            name,
            email,
            phone,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        console.log(localStorage.getItem("user"));

        alert("Registration Successful");

        window.location.href = "login.html";
    });

} // <-- Register block ends here


// Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (
            user &&
            user.email === email &&
            user.password === password
        ) {

            localStorage.setItem("loggedIn", "true");

            alert("Login Successful");

            window.location.href = "01.html";;

        } else {

            alert("Invalid Email or Password");

        }

    });

}
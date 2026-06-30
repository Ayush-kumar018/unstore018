const client = window.client;

console.log("Supabase object:", client);
console.log("Supabase auth:", client.auth);
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        console.log("Register button clicked");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            const { data, error } = await client.auth.signUp({
    email,
    password,
    options:{
        data:{
            full_name:name,
            phone:phone
        }
    }
});

            console.log(data);
            console.log(error);

            if (error) {
                alert(error.message);
                return;
            }

            alert("Registration Successful!");
            window.location.href = "login.html";

        } catch (err) {

            console.error(err);
            alert(err.message);

        }

    });
    

}
const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("loginPassword");

if(togglePassword){

togglePassword.onclick=()=>{

password.type=
password.type==="password"
?
"text"
:
"password";

};

}
// ==========================
// LOGIN
// ==========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document
            .getElementById("loginEmail")
            .value
            .trim();

        const password = document
            .getElementById("loginPassword")
            .value;

        const loginBtn =
            document.getElementById("loginBtn");

        const message =
            document.getElementById("loginMessage");

        loginBtn.disabled = true;
        loginBtn.innerText = "Signing In...";

        message.className = "message";
        message.innerHTML = "";

        const { data, error } =
await client.auth.signInWithPassword({

    email,
    password

});

        if (error) {

            message.classList.add("error");
            message.innerHTML = error.message;

            loginBtn.disabled = false;
            loginBtn.innerText = "Login";

            return;

        }

        message.classList.add("success");
        message.innerHTML = "Login Successful!";

        setTimeout(() => {

            const redirect =
                localStorage.getItem("redirectAfterLogin");

            if (redirect) {

                localStorage.removeItem(
                    "redirectAfterLogin"
                );

                window.location.href = redirect;

            } else {

                window.location.href = "index.html";

            }

        },1000);

    });

}
client.auth.signInWithOAuth({
    provider: "google"
});
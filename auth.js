console.log("Supabase object:", supabase);
console.log("Supabase auth:", supabase.auth);
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

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                        phone: phone
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
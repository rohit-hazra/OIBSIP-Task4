const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const panelTitle = document.getElementById("panelTitle");
const panelText = document.getElementById("panelText");

loginTab.onclick = () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  panelTitle.textContent = "Welcome Back";
  panelText.textContent = "Continue your learning journey with a clear view of your progress. Access your dashboard to resume modules and track achievements.";
};

registerTab.onclick = () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");

  panelTitle.textContent = "Create Account";
  panelText.textContent = "Create your learning profile and start building skills step by step. Track progress, complete modules, and grow with structured learning.";
};

function login() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    loginMsg.textContent = "Please register first.";
    return;
  }

  if (
    loginEmail.value === user.email &&
    loginPassword.value === user.password
  ) {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    loginMsg.style = "color: red";
    loginMsg.textContent = "Invalid credentials.";
  }
}

function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

function isStrongPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  return regex.test(password);
}


function register() {
  if (
    !regName.value ||
    !regEmail.value ||
    !regPassword.value ||
    !regConfirmPassword.value
  ) {
    registerMsg.textContent = "All fields are required.";
    return;
  }
  if (!isStrongPassword(regPassword.value)) {
    registerMsg.style.color = "#ef4444";
    registerMsg.textContent =
      "Password must include uppercase, lowercase, number, special character and be at least 6 characters long.";
    return;
  }

  if (regPassword.value !== regConfirmPassword.value) {
    registerMsg.textContent = "Passwords do not match.";
    return;
  }

  localStorage.setItem(
    "user",
    JSON.stringify({
      name: regName.value,
      email: regEmail.value,
      password: regPassword.value,
    })
  );

  registerMsg.style.color = "#22c55e";
  registerMsg.textContent = "Account created successfully.";

  setTimeout(() => {
    regName.value = "";
    regEmail.value = "";
    regPassword.value = "";
    regConfirmPassword.value = "";
    registerMsg.textContent = "";

    alert("Registration successful. Please login.");
    loginTab.click();
  }, 1200);

}
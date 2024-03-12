function login() {
    const loginName = document.querySelector("#name");
    localStorage.setItem("userName", loginName.value);
    window.location.href = "report.html";
}
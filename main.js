function insertUnsername() {
    const userName = localStorage.getItem("userName");
    const userElement = document.getElementById("username");
    userElement.innerHTML = `User: ${userName}`;
}

insertUnsername();
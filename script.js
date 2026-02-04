let completed = 0;

function login() {
    alert("Login Successful!");
}

function complete() {
    completed += 50;
    document.getElementById("progress").innerText =
        "Completed: " + completed + "%";

    if (completed >= 100) {
        alert("All Courses Completed!");
    }
}

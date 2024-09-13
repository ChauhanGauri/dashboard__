document.getElementById('loginButton').addEventListener('click', function() {
    const username = prompt("Enter your username:");
            const password = prompt("Enter your password:");
            const designation = prompt("Enter your designation (admin or employee):").toLowerCase();

            if (username && password && (designation === 'admin'||designation=='employee') ){
                window.location.href='admin.html';
            } 

            else {
                alert("Invalid input. Please try again.");
                promptLogin();
            }


});

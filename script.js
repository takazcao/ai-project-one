// script.js
document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var portfolio = document.getElementById('portfolio').value;

    var response = `Thank you, ${name}. We will review your portfolio at ${portfolio} and get back to you at ${email}.`;

    // Simulate AI checking the portfolio link (this is just a placeholder)
    if (portfolio.startsWith("http")) {
        document.getElementById('aiResponse').innerText = response;
    } else {
        document.getElementById('aiResponse').innerText = "Please enter a valid portfolio URL.";
    }
});

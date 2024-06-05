document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitdetails();
});

function submitdetails() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    localStorage.setItem('name', name);
    localStorage.setItem('number', number);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);

    window.location.href = "order.html";
}
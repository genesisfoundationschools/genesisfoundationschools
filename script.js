// Simple form submission simulation
document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thank you! Your message has been submitted.";
    this.reset();
});
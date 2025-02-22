function generateResume() {
    document.getElementById("res-name").textContent = document.getElementById("name").value;
    document.getElementById("res-email").textContent = document.getElementById("email").value;
    document.getElementById("res-phone").textContent = document.getElementById("phone").value;
    document.getElementById("res-skills").textContent = document.getElementById("skills").value;
    document.getElementById("res-experience").textContent = document.getElementById("experience").value;
    document.getElementById("res-education").textContent = document.getElementById("education").value;
}

function downloadResume() {
    const element = document.getElementById("resume");
    html2pdf().from(element).save("resume.pdf");
} 
document.getElementById("updateProfileBtn").addEventListener("click", function() {
    const nameInput = document.getElementById("nameInput").value.trim();
    const bioInput = document.getElementById("bioInput").value.trim();
    const imageInput = document.getElementById("imageInput").value.trim();
    const bgColorInput = document.getElementById("bgColorInput").value;

    if (nameInput) {
        document.getElementById("profileName").textContent = nameInput;
    }

    if (bioInput) {
        document.getElementById("profileBio").textContent = bioInput;
    }

    if (imageInput) {
        document.getElementById("profileImage").src = imageInput;
    }

    document.getElementById("profileCard").style.backgroundColor = bgColorInput;
});

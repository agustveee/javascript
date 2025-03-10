function updateName() {
    const newName = document.getElementById("name-input").value;
    if (newName) document.getElementById("profile-name").textContent = newName;
}

function updateBio() {
    const newBio = document.getElementById("bio-input").value;
    if (newBio) document.getElementById("profile-bio").textContent = newBio;
}

function updateProfilePic() {
    const newImage = document.getElementById("image-input").value;
    if (newImage) document.getElementById("profile-pic").src = newImage;
}

function updateBackground() {
    const color = document.getElementById("bg-color").value;
    document.querySelector(".profile-header").style.backgroundColor = color;
}

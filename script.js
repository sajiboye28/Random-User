const refreshBtn = document.getElementById("refresh-btn");
const profileImage = document.getElementById("profile-image");
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const locationElement = document.getElementById("location");

function generateProfile() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const profileData = data.results[0];
            profileImage.src = profileData.picture.large;
            nameElement.textContent = `${profileData.name.title} ${profileData.name.first} ${profileData.name.last}`;
            emailElement.textContent = `Email: ${profileData.email}`;
            phoneElement.textContent = `Phone: ${profileData.phone}`;
            locationElement.textContent = `Location: ${profileData.location.street.number} ${profileData.location.street.name}, ${profileData.location.city}, ${profileData.location.state}, ${profileData.location.country}`;
        });
}

generateProfile();

refreshBtn.addEventListener("click", generateProfile);

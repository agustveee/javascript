const showNotifButton = document.getElementById("shownotif");
const notificationContainer = document.getElementById("notification-container");

showNotifButton.addEventListener("click", addNotification);

function addNotification() {
    const notification = document.createElement("article");
    notification.classList.add("notification");
    notification.innerHTML = `
        <span>You have a new message!</span>
        <button class="close-btn" aria-label="Close Notification">&times;</button>
    `;

    notification.querySelector(".close-btn").addEventListener("click", () => {
        notification.remove();
    });

    notificationContainer.prepend(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

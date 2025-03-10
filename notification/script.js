document.getElementById("showNotification").addEventListener("click", function() {
    addNotifications();
});

let notificationCount = 1;

function addNotifications() {
    const notificationContainer = document.getElementById("notificationContainer");

    for (let i = 0; i < notificationCount; i++) {
        createNotification("You have a new message!");
    }

    notificationCount++;
}

function createNotification(message) {
    const notificationContainer = document.getElementById("notificationContainer");

    // notification list item
    const notification = document.createElement("li");
    notification.className = "notification";
    notification.textContent = message;

    // close button
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";
    closeBtn.onclick = function() {
        notification.remove();
    };

    // elements
    notification.appendChild(closeBtn);
    notificationContainer.insertBefore(notification, notificationContainer.firstChild);
}

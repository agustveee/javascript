let balance = 1000;
let dailyWithdrawalLimit = 500;
let dailyWithdrawn = 0;

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    const message = document.getElementById("message");
    const history = document.getElementById("transaction-history");

    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        document.getElementById("balance").textContent = balance;
        message.style.color = "green";
        message.textContent = `Successfully deposited $${amount}.`;

        const listItem = document.createElement("li");
        listItem.textContent = `Deposit: $${amount}`;
        history.prepend(listItem);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid deposit amount.";
    }

    document.getElementById("amount").value = "";
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    const message = document.getElementById("message");
    const history = document.getElementById("transaction-history");

    if (!isNaN(amount) && amount > 0) {
        if (amount > balance) {
            message.style.color = "red";
            message.textContent = "Insufficient balance.";
        } else if (dailyWithdrawn + amount > dailyWithdrawalLimit) {
            message.style.color = "red";
            message.textContent = "Daily withdrawal limit reached!";
        } else {
            balance -= amount;
            dailyWithdrawn += amount;
            document.getElementById("balance").textContent = balance;
            message.style.color = "green";
            message.textContent = `Successfully withdrew $${amount}.`;

            const listItem = document.createElement("li");
            listItem.textContent = `Withdraw: $${amount}`;
            history.prepend(listItem);
        }
    } else {
        message.style.color = "red";
        message.textContent = "Invalid withdrawal amount.";
    }

    document.getElementById("amount").value = "";
}

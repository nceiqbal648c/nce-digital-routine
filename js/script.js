document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("ece-body");
    const schedule = [
        { day: "Saturday", slots: ["Theory I", "Theory II", "Lab I", "Lab II"] },
        { day: "Tuesday", slots: ["Class A", "Class B", "Class C", "Class D"] }
    ];

    schedule.forEach(item => {
        let row = `<tr><td>${item.day}</td><td>${item.slots[0]}</td><td>${item.slots[1]}</td><td>${item.slots[2]}</td><td>${item.slots[3]}</td></tr>`;
        tableBody.innerHTML += row;
    });
});

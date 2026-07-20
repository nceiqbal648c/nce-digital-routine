// =======================================
// NCE Digital Routine v3.0
// Part 1 - Room Switch
// =======================================

const roomButtons = document.querySelectorAll(".room-btn");
const roomCards = document.querySelectorAll(".room-card");
roomButtons.forEach(button => {

    button.addEventListener("click", () => {

        roomButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const targetRoom = button.dataset.room;

        roomCards.forEach(card => {

            if (card.id === targetRoom) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

document.addEventListener("DOMContentLoaded", () => {

    roomCards.forEach(card => {
        card.style.display = "none";
    });

    document.getElementById("oab210").style.display = "block";

});
const routineData = {

    oab210: {
        Saturday: [],
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: []
    },

    oab202e: {
        Saturday: [],
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: []
    },

    oab209: {
        Saturday: [],
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: []
    },

    pmre: {
        Saturday: [],
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: []
    },

    ece: {
    Saturday: [],
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: []
    },


{   if
   (!tbody) return;
const tbody = document.getElementById(roomId);
    tbody.innerHTML = "";

    const roomData = routineData[roomId];

    Object.keys(roomData).forEach(day => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${day}</td>
            ${roomData[day].map(item => `<td>${item}</td>`).join("")}
        `;

        tbody.appendChild(tr);

    });

}

loadRoom("oab210");
function updateCurrentClass() {

    const now = new Date();

    const currentDay = now.toLocaleDateString("en-US", {
        weekday: "long"
    });


    const currentTime =
        now.getHours() * 60 + now.getMinutes();

    document.getElementById("currentClass").textContent =
        "No Class";

    document.getElementById("nextClass").textContent =
        "No Class";

    const activeRoom =
        document.querySelector(".room-btn.active")
        .dataset.room;

    const todayRoutine =
        routineData[activeRoom]?.[currentDay];

    if (!todayRoutine) return;

    todayRoutine.forEach(cls => {

        if (
            currentTime >= cls.start &&
            currentTime < cls.end
        ) {

            document.getElementById("currentClass").textContent =
                `${cls.subject} (${cls.teacher})`;

        }

        if (
            currentTime < cls.start &&
            document.getElementById("nextClass").textContent ===
            "No Class"
        ) {

            document.getElementById("nextClass").textContent =
                `${cls.subject} (${cls.teacher})`;

        }

    });

}

setInterval(updateCurrentClass, 60000);

updateCurrentClass();
const editButton = document.getElementById("editRoutineBtn");

if (editButton) {

    editButton.addEventListener("click", () => {

        const password = prompt("Admin Password");

        if (password !== "nceadmin") {
            alert("Access Denied");
            return;
        }

        const room =
            document.querySelector(".room-btn.active").dataset.room;

        localStorage.setItem("editingRoom", room);

        window.location.href = "admin/index.html";

    });

}

window.addEventListener("storage", () => {

    const activeRoom =
        document.querySelector(".room-btn.active").dataset.room;

    loadRoom(activeRoom);

    updateCurrentClass();

});

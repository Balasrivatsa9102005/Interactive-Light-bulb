// Track the bulb state (ON/OFF)
let isOn = false;

function toggleBulb() {
    const bulb = document.getElementById("bulb");

    if (isOn) {
        bulb.src = "bulb-off.png"; // Change to OFF image
    } else {
        bulb.src = "bulb-on.png"; // Change to ON image
    }

    isOn = !isOn; // Toggle state
}

document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // biar gak reload

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    class: document.getElementById("class").value,
    schedule: document.getElementById("schedule").value
  };

  try {
    const response = await fetch("https://hook.eu2.make.com/haydsbuvlojoo8ikbt469fhpw71r1gt9", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      document.getElementById("statusMsg").innerText = "Booking sent successfully!";
      document.getElementById("bookingForm").reset();
    } else {
      document.getElementById("statusMsg").innerText = "Failed to send booking.";
    }
  } catch (error) {
    document.getElementById("statusMsg").innerText = "Error sending booking.";
  }
});
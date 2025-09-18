document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // biar gak reload

   const submitBtn = document.getElementById("submitBtn");
  const statusMsg = document.getElementById("statusMsg");

  // set loading state
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";
  statusMsg.style.color = "blue";
  statusMsg.innerText = "⏳ Sedang mengirim booking...";

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
      statusMsg.style.color = "green";
      statusMsg.innerText = "✅ Booking berhasil dikirim!";
      document.getElementById("bookingForm").reset();
    } else {
      statusMsg.style.color = "red";
      statusMsg.innerText = "❌ Gagal mengirim booking.";
    }
   } catch (error) {
    console.error(error);
    statusMsg.style.color = "red";
    statusMsg.innerText = "⚠️ Error saat kirim booking.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit";
  }
});
import { useState } from "react";

function App() {
  // ✅ Step 6: State for error message
  const [error, setError] = useState("");

  // ✅ Step 12: Improved validation logic
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <main>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        
        {/* ✅ Accessible error message */}
        <p role="alert" aria-live="assertive" style={{ color: "red" }}>
          {error}
        </p>

        {/* Name Field */}
        <label htmlFor="name">Name</label><br />
        <input id="name" type="text" required aria-required="true" />
        <br /><br />

        {/* Email Field */}
        <label htmlFor="email">Email</label><br />
        <input
          id="email"
          type="email"
          required
          aria-required="true"
          aria-describedby="email-info"
        />
        <br />
        <small id="email-info">
          We will not share your email
        </small>
        <br /><br />

        {/* Message Field */}
        <label htmlFor="message">Message</label><br />
        <textarea
          id="message"
          rows="4"
          required
          aria-required="true"
        ></textarea>
        <br /><br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
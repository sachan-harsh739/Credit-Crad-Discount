function handleGetStarted() {
    alert("Thanks for your interest! We'll be in touch.");
  }
  



document.querySelectorAll('.faq-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(card.textContent.trim());
    });
  });
  






function handleSubscribe(event) {
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    alert(`Subscribed successfully with email: ${email}`);
    event.target.reset();
  }
  









function handleContact(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    event.target.reset();
  }
  
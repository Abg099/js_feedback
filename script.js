document.querySelectorAll('.feedback-option').forEach(option => {
    option.addEventListener('click', () => {
        // Remove 'selected' class from all options
        document.querySelectorAll('.feedback-option').forEach(opt => opt.classList.remove('selected'));
        
        // Add 'selected' class to the clicked option
        option.classList.add('selected');
    });
});

document.getElementById('sendReview').addEventListener('click', () => {
    const selectedOption = document.querySelector('.feedback-option.selected');
    const feedbackContainer = document.querySelector('.feedback-container');
    
    if (selectedOption) {
        // Get the selected feedback text (e.g., "Unhappy", "Neutral", or "Satisfied")
        const feedbackText = selectedOption.querySelector('p').innerText;
        
        // Replace feedback options with a thank-you message and style the box accordingly
        feedbackContainer.style.width = '350px';
        feedbackContainer.style.height = '250px'; // Make the box smaller
        feedbackContainer.innerHTML = `
            <h2>Thank you!</h2>
            <p><strong style="color: #2f7a3e;">Feedback: ${feedbackText}</strong></p>
            <p style="color: #2f7a3e;">We'll use your feedback to improve our customer support.</p>
        `;
    } else {
        alert("Please select an option before submitting.");
    }
});

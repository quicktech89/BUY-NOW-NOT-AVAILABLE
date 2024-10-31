document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll(".rainbow-text");
    paragraphs.forEach((p, index) => {
        p.style.animationDelay = `${index * 0.5}s`; // Add staggered animation
    });

    // Play the background music
    const audio = document.getElementById("background-music");
    audio.volume = 0.85; // Set volume to 85%

    // Function to play music with a delay
    function playMusic() {
        audio.currentTime = 0; // Reset to start
        audio.play(); // Play the audio

        // Set a timeout based on the audio duration plus the wait time
        setTimeout(playMusic, (audio.duration * 1000) + 1500); // Wait for the audio to complete + 1.5 seconds
    }

    // Start playing music immediately
    playMusic();
});

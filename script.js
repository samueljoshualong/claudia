// Function to Show Message & Hide Present When Clicked
function showMessage() {
    let audio = document.getElementById("birthdaySong");
    let message = document.getElementById("message");
    let present = document.querySelector(".present");

    // Play the song when the gift is clicked
    audio.play();

    // Hide the present
    present.style.display = "none";

    // Reveal the hidden message
    message.style.display = "block";
}

// Confetti Animation
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function createConfettiPiece() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 75%)`,
    };
}

// Create 100 pieces of confetti
for (let i = 0; i < 100; i++) {
    confetti.push(createConfettiPiece());
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((piece) => {
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
        ctx.fillStyle = piece.color;
        ctx.fill();

        piece.y += piece.speed;

        if (piece.y > canvas.height) {
            piece.y = -piece.size;
            piece.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();

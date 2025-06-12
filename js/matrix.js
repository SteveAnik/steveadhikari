// Matrix Background Effect
function createMatrixEffect() {
    const container = document.querySelector('.matrix-bg');
    if (!container) return; // Exit if no container found
    
    // Clear any existing canvas
    container.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Matrix characters - only 0's and 1's
    const matrix = '01';
    const fontSize = 14;
    let columns = 0;
    let drops = [];
    
    // Set canvas to full container size
    function resizeCanvas() {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        // Recalculate columns when resizing
        columns = Math.floor(canvas.width / fontSize);
        
        // Reset drops array with new column count
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start drops at random positions
        }
    }
    
    // Initialize canvas styles
    canvas.style.display = 'block';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    
    // Set initial size
    resizeCanvas();
    
    // Add resize listener with debounce
    let resizeTimer;
    const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            resizeCanvas();
        }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Drawing the characters
    function draw() {
        // Darker background with opacity for trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set style for the characters (bright blue)
        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px monospace';
        
        // Loop over drops
        for (let i = 0; i < drops.length; i++) {
            // Random character (0 or 1)
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            
            // x = i * fontSize, y = value of drops[i] * fontSize
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            // Only draw if the character would be visible
            if (y > 0 && y < canvas.height) {
                // Add slight opacity variation for depth effect
                ctx.globalAlpha = Math.random() * 0.5 + 0.5;
                ctx.fillText(text, x, y);
                ctx.globalAlpha = 1;
            }
            
            // Reset drop to top when it reaches bottom or randomly
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move the drop down (smaller increment = slower fall)
            if (Math.random() > 0.7) {
                drops[i] += 0.5;
            }
        }
        
        // Call the animation loop
        requestAnimationFrame(draw);
    }
    
    // Start the animation
    draw();
}

// Initialize matrix effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.matrix-bg')) {
        createMatrixEffect();
    }
}); 
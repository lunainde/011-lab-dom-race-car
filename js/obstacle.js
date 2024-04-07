class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      // Define width and height before using them in calculations
      this.width = 100; //of the obstacle
      this.height = 150; //of the obstacle
      //calculate left after width
      this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - this.width));
      this.top = 0; // Start off-screen above the game area
  
      this.element = document.createElement("img");
      this.element.src = "./images/redCar.png"; // Obstacle image
      this.element.style.position = "absolute"; // Position absolutely within the game area
      this.element.style.width = `${this.width}px`; // Set width
      this.element.style.height = `${this.height}px`; // Set height
      this.element.style.left = `${this.left}px`; // Set horizontal position
      this.element.style.top = `${this.top}px`; // Set vertical position
  
      this.gameScreen.appendChild(this.element); // Add to the game screen
    }
  
    updatePosition() {
      // Updates the obstacle's position on the screen
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      // Move the obstacle down by 3px
      this.top += 3;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
  }
  
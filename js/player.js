class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement('img');
  
      this.element.src = imgSrc;
      this.element.style.position = 'absolute';
      // Set up the default element's property values
      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    move() {
      this.left += this.directionX * 5; //speed
      this.updatePosition(); //boundery
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    didCollide(obstacle) {
      // Your code for checking collision with an obstacle
    }
  }
  
class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");

        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;


        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
           
     
        if(this.left <0){
            this.left = 0;
        }
        
        if(this.top <0){
            this.top = 0;
        }

        if (this.left > this.gameScreen.offsetWidth - this.width) {
            this.left = this.gameScreen.offsetWidth - this.width;
        }

        if (this.top > this.gameScreen.offsetHeight - this.height) {
            this.top = this.gameScreen.offsetHeight - this.height;
        }
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    didCollide(obstacle) {
        const playerHitBox = this.element.getBoundingClientRect();
        const obstacleHitBox = obstacle.element.getBoundingClientRect();

        if (
            playerHitBox.left < obstacleHitBox.right &&
            playerHitBox.right > obstacleHitBox.left &&
            playerHitBox.top < obstacleHitBox.bottom &&
            playerHitBox.bottom > obstacleHitBox.top
        ) {
            return true;
        } else {
            return false;
        }
    }
}
class Game {
    constructor() {
    this.startScreen = document.getElementById("game-intro")
    this.gameScreen = document.getElementById("game-screen")
    this.gameEndScreen = document.getElementById("game-end")
    this.player = null;
    this.height = "600px";
    this.width = "500px";
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    }

    start(){
        this.gameScreen.style.width = this.width;
        this.gameScreen.style.height = this.height;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }

    gameLoop(){
        if(this.gameIsOver){
            return
        }

        this.update();

    // window.requestAnimationFrame(function() {
    // return gameLoop() }) --- SAME AS LINE 32
        window.requestAnimationFrame(()=> this.gameLoop());
    }

    update(){

    }
}

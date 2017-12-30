/**
 * Created by rubenkrueger on 12/28/17.
 */
function Paddle() {
    this.width = 10;
    this.height = 60;
    this.dy = 15;
    this.x = canvas.width - this.width;
    this.y = canvas.height/ 2 - this.height/2;

    this.draw = function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    };

    this.move = function() {
        if(upPressed && this.y >= 0){
            this.y -= this.dy;
        }
        else if(downPressed && this.y + this.height <= canvas.height) {
            this.y += this.dy;
        }
    };

}
/**
 * Created by rubenkrueger on 12/28/17.
 */
function Computer() {
    this.width = 10;
    this.height = 60;
    this.dy = 10;
    this.x = this.width;
    this.y = canvas.height/ 2 - this.height/2;

    this.draw = function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    };

    this.move = function() {
        if(ball.y > this.y) {
            this.y += this.dy;
        }
        else if(ball.y < this.y) {
            this.y -= this.dy;
        }
    };
}
/**
 * Created by rubenkrueger on 12/28/17.
 */
function Ball() {
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.radius = 10;
    this.dx = 7;
    this.dy = 7;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    };

    this.move = function() {
        if(this.y < this.radius) {
            this.dy = -this.dy;
        }
        else if(this.y > canvas.height - this.radius*2) {
            this.dy = -this.dy;
        }
        else if(this.x + this.radius >= canvas.width - player.width) {
            if(this.y + this.radius > player.y && this.y - this.radius < player.y + player.height) {
                this.dx = -this.dx;
            }
            else {
               lives --;
               gameReset();
            }
        }
        else if(this.x - this.radius < player.width) {
            if(this.y + this.radius > computer.y && this.y - this.radius < computer.y + computer.height) {
                this.dx = -this.dx;
            }
            else {
                score ++;
                gameReset();
            }
        }
        this.y += this.dy;
        this.x += this.dx;
    };


}



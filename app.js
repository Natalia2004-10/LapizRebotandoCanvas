import {IMAGES as images} from './initialize.js'
// palabra "as" = importar algo de otro archivo con un nombre y en el archivo donde lo importo lo llamo de otro modo 
//import = importar 
import {ctx, drawObj, run, start, dT} from './initialize.js'
// el contexto se hace en otro archivo y se importa cuano se necesite 

//Creación del objeto balón
//PROPIEDADES > x,y,vX,vY, r, imagen
//METODOS> dibujarse --> que el balón sepa como dibujarse a si mismo

let lapiz={//objeto porque tiene {}
    x: 5,
    x2:0,
    x3:10,
    y: 340,
    y4: 345,
    y2: 385,
    y3:398,
    r: 5,
    vX: 35,
    vY: -30,
    //METODOS
    dibujarse: function(){
        ctx.fillStyle = "#FFB6C1"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI, true);
        ctx.stroke();
        ctx.fill();
        
        ctx.fillStyle = "#e3e4e5"
        ctx.fillRect(this.x2, this.y, 10, 5);
        ctx.strokeRect(this.x2, this.y, 10, 5);
        
        ctx.fillStyle = "#FFDB58"
        ctx.fillRect(this.x2, this.y4, 10, 40);
        ctx.strokeRect(this.x2, this.y4, 10, 40);
        
        ctx.fillStyle = "#ffecb8"
        ctx.beginPath();
        ctx.moveTo(this.x2, this.y2);
        ctx.lineTo(this.x, this.y3);
        ctx.lineTo(this.x3, this.y2);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.fill();
        
        
        ctx.fillStyle = "black"
        ctx.beginPath();
        ctx.arc(this.x, this.y3, 1, 0, Math.PI*2, true);
        ctx.stroke();
        ctx.fill();

    },
    moverse: function(){
        this.x = this.x + this.vX *dT/1000;
        this.x2 = this.x2 + this.vX *dT/1000;
        this.x3 = this.x3 + this.vX *dT/1000;
        this.y = this.y + this.vY *dT/1000;
        this.y2 = this.y2 + this.vY *dT/1000;
        this.y3 = this.y3 + this.vY *dT/1000;
        this.y4 = this.y4 + this.vY *dT/1000;
        if(400 - this.y < -10){
            this.vY = -this.vY}
        if (400 - this.y3 < -10){
            this.vY = -this.vY
        }
        if(400 - this.x < -10 ){
            this.vX = -this.vX}
        if(this.y - 400 < -10) {
            this.vY = -this.vY}
        if(this.y3 - 400 < -10){
            this.vY = -this.vY
        }
        if(this.x - 400 < -10 ){
            this.vX = -this.vX}
    }
}


let lapiz2 = Object.create(lapiz)
lapiz2.x= 200;
lapiz2.x2 = 195;
lapiz2.x3 = 205;
lapiz2.y= 170;
lapiz2.y2 = 215;
lapiz2.y3 = 228;
lapiz2.y4 = 175;

let lapiz3 = Object.create(lapiz)
lapiz3.x= 5;
lapiz3.x2 = 0;
lapiz3.x3 = 10;
lapiz3.y= 5;
lapiz3.y2 = 50;
lapiz3.y3 = 63;
lapiz3.y4 = 10;
lapiz3.vX = 80;
lapiz3.vY = 30;


drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    lapiz.dibujarse();
    lapiz.moverse();
    lapiz2.dibujarse();
    lapiz3.dibujarse();
    lapiz3.moverse();
  }
run()
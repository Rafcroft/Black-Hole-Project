const universe = document.getElementById("universe");
const ctx = universe.getContext('2d');

let AstroX = 2000
let AstroY = 2000
let VelX = 3
let VelY = -5.91

let BuracoX = 4000
let BuracoY = 3000

let Loop = function () {

    DeltaX = BuracoX - AstroX
    DeltaY = BuracoY - AstroY

    let Distance = Pythagoras(DeltaX, DeltaY)
    let accel = gravitational_acceleration(Distance)

    let accelX = accel * (DeltaX / Distance)
    let accelY = accel * (DeltaY / Distance)

    VelX += accelX
    VelY += accelY

    AstroX += VelX
    AstroY += VelY


    ctx.clearRect(0, 0, 800, 600)

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(BuracoX, BuracoY, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(AstroX, AstroY, 25, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(Loop);
};

Loop();

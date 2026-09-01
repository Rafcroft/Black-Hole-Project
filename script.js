const universe = document.getElementById("universe");
const variaveis = document.getElementById("variaveis");
const ctx = universe.getContext('2d');
const vCtx = variaveis.getContext('2d');

let AstroX = 2000
let AstroY = 2000
let VelX = 1
let VelY = 1.0

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

    vCtx.clearRect(0, 0, 8000, 6000)

    vCtx.fillStyle = 'white';
    vCtx.beginPath();
    vCtx.arc(BuracoX, BuracoY, 50, 0, Math.PI * 2);
    vCtx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(AstroX, AstroY, 25, 0, Math.PI * 2);
    ctx.fill();

    // ----- Textos (variaveis) -----

    // ----- Velocidade -----

    vCtx.fillStyle = "white"
    vCtx.font = "90px monospace";
    vCtx.fillText("Velocity:", 100, 600);

    vCtx.fillStyle = "white"
    vCtx.font = "80px monospace"
    vCtx.fillText(`(rounded: ${Math.floor(VelX)}) velocity (x): ${VelX}`, 100, 700)

    vCtx.fillStyle = "white"
    vCtx.font = "80px monospace"
    vCtx.fillText(`(rounded: ${Math.floor(VelY)}) velocity (y): ${VelY}`, 100, 800)

    // ----- Position -----

    vCtx.fillStyle = "white"
    vCtx.font = "90px monospace"
    vCtx.fillText("Position:", 5600, 600)

    vCtx.fillStyle = "white"
    vCtx.font = "80px monospace"
    vCtx.fillText(`(rounded: ${Math.floor(AstroX)}) position (x): ${AstroX} `, 5600, 700)

    vCtx.fillStyle = "white"
    vCtx.font = "80px monospace"
    vCtx.fillText(`(rounded: ${Math.floor(AstroY)}) position (y): ${AstroY} `, 5600, 800)


    // ----- Direction -----

    vCtx.fillStyle = "white"
    vCtx.font = "90px monospace"
    vCtx.fillText("Direction (x): ", 5600, 1000)

    vCtx.fillStyle = "white"
    vCtx.font = "90px monospace"
    vCtx.fillText("Direction (y): ", 5600, 1100)

    if (VelX < 0) {
        vCtx.fillStyle = "white"
        vCtx.font = "200px monospace"
        vCtx.fillText("⟶", 6400, 1023)
    } else {
        vCtx.font = "200px monospace"
        vCtx.fillText("⟵", 6400, 1023)
    }

    if (VelY < 0) {
        vCtx.fillStyle = "white"
        vCtx.font = "200px monospace"
        vCtx.fillText("⟶", 6400, 1123)
    } else {
        vCtx.font = "200px monospace"
        vCtx.fillText("⟵", 6400, 1123)
    }

    // ------------------------------

    requestAnimationFrame(Loop);
};

Loop();

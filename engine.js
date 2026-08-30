console.log(`
┌──────────────────────────────────────────────────────────────┐
│                    BLACK HOLE PROJECT                        │
│                                                              │
│  >                    SINGULARITY                            │
│                                                              │
│[ SYSTEM ONLINE ] [ Math & Phisics ] [ SINGULARITY DETECTED ] │
└──────────────────────────────────────────────────────────────┘
`);

// ──── Leis da física ────

const ConstGravitacional = 1; // a = [G] * M / r²
const mass_black_hole = 100000;

// ──── Termino das leis da física ────


const ΔX = 8;
const ΔY = 6;


// Resulta em um r: r = √(Δx² + Δy²)

let Pythagoras = function (a, b) {
    let stream_step_1 = a ** 2 + b ** 2;
    return Math.sqrt(stream_step_1);
}

let r = Pythagoras(ΔX, ΔY);
console.log(`A distancia entre os corpos é: ${r}`);

// Resulta em um a: a = GM / r², onde G é a constante gravitacional e M é a massa do Buraco Negro

let gravitational_acceleration = function (a) {

    if (a == 0) {
        console.log("\x1b[31mThe distance between the celestial body and the black hole is zero; for mathematical reasons, the calculation must be stopped to avoid division by zero.\x1b[0m")
        return;
    }

    let stream_step_1 = (ConstGravitacional * mass_black_hole) / a ** 2;
    return stream_step_1;
}

let a = gravitational_acceleration(r);
if (a == undefined) {
    console.log("Error")
} else {
    console.log(`A aceleração gravitacional é: ${a}`)
}
// Arquivo para aprender a estrutura para criar vários corpos.

let array = [
    { AstroX: 2000, AstroY: 2000 },
    { Velx: 5.91, AstroX: -5.91 }
]

const position_numbers = [1000, 1500, 2000, 2500, 3000, 3500, 4000]
const velocity_numbers = []

for (i = 1; i < 1001; i++) {
    velocity = ((i / 100).toFixed(2))
    velocity_numbers.push(velocity)
}

function random_item_position() {
    return Math.floor(Math.random() * position_numbers.length)
}

function random_item_velocity() {
    return Math.floor(Math.random() * velocity_numbers.length)
}

for (i = 1; i < 4; i++) {

    let random_item_X = random_item_position()
    let random_item_Y = random_item_position()

    let random_item_X_velocity = random_item_velocity()
    let random_item_Y_velocity = random_item_velocity()

    new_astro = `Astro_${i}`
    new_vel = `Vel_${i}`
    array.push({ [new_astro + "_X"]: position_numbers[random_item_X], [new_astro + "_Y"]: position_numbers[random_item_Y] })
    array.push({ [new_vel + "_X"]: velocity_numbers[random_item_X_velocity], [new_vel + "_Y"]: velocity_numbers[random_item_Y_velocity] })
}

console.log(array)
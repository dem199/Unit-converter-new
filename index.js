/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




const inputText = document.getElementById("input-text")
const convertBtn = document.getElementById("convert-btn")
const lengthValue = document.getElementById("length-value")
const volumeValue = document.getElementById("volume-value")
const massValue = document.getElementById("mass-value")



convertBtn.addEventListener("click", function() {
    let value = inputText.value
    let feet = fromMeterToFeet(value)
    let meter = fromFeetToMeter(value)
    let gallon = fromLiterToGallon(value)
    let liter = fromGallonToLiter(value)
    let pound = fromKiloToPound(value)
    let kilo = fromPoundToKilo(value)
    render(value, feet, meter, gallon, liter, pound, kilo)
})

function fromMeterToFeet(val) {
    return (val * 3.281).toFixed(3)
}

function fromFeetToMeter(val) {
    return (val/3.281).toFixed(3)
}

function fromLiterToGallon(val) {
    return (val * 0.264).toFixed(3)
}

function fromGallonToLiter(val) {
    return (val/0.264).toFixed(3)
}

function fromKiloToPound(val) {
    return (val * 2.204).toFixed(3)
}

function fromPoundToKilo(val) {
    return (val/2.204).toFixed(3)
}

function render(v, f, m, g, l, p, k) {
    lengthValue.textContent = `
            ${v} meters = ${f} feet | ${v} feet = ${m} meters`
    volumeValue.textContent = `
            ${v} liters = ${g} gallons | ${v} gallons = ${l} liters`
    massValue.textContent = `
            ${v} kilograms = ${p} pounds | ${v} pounds = ${k} kilograms`
}
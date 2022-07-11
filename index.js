var count = 0

function increment() {
    count += 1
    document.getElementById("count-el").textContent = count

}

function save() {
    var countDisplay = count + " - "
    console.log(countDisplay)
    var savePara = document.getElementById('save-el')
    savePara.textContent += countDisplay
    count = 0
    document.getElementById("count-el").textContent = count
}
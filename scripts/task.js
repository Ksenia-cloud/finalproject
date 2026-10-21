function verify() {
    const S = parseFloat(document.getElementById('S').value)
    const R = parseFloat(document.getElementById('R').value)
    const K = parseFloat(document.getElementById('abc').value)
    console.log(S, R, K)
    let result
    if (isNaN(S) || isNaN(R) || isNaN(K) || S <= 0 || R <= 0 || K < 0) {
        result = "Введите положительные S и R и неотрицательное K"
    } else {
        const side = Math.sqrt(S)
        const passage = (side - 2 * R) / 2
        if (passage >= K) {
            result = "Можно разместить. Проход " + passage.toFixed(3) + " >= K"
        } else {
            result = "Нельзя разместить. Проход " + passage.toFixed(3) + " < K"
        }
    }
    document.getElementById("result").value = result
}

const elementVerify = document.getElementById("verify")
elementVerify.addEventListener('click', verify)

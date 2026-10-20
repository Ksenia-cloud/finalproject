const change = document.getElementById("change")
change.addEventListener("click", change_all)

const map = {'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l',
    'м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch',
    'ъ':'ie','ы':'y','ь':'','э':'e','ю':'iu','я':'ia'}

function translit(text) {
    let result = ""
    const upper = text === text.toUpperCase()
    for (const ch of text) {
        const low = ch.toLowerCase()
        let t = map[low]
        if (t === undefined) {
            result += ch
        } else if (ch !== low && !upper) {
            result += t.charAt(0).toUpperCase() + t.slice(1)
        } else {
            result += t
        }
    }
    return upper ? result.toUpperCase() : result
}

function toRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const signs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let result = ""
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += signs[i]
            num -= values[i]
        }
    }
    return result
}

function change_all() {
    const p = document.getElementsByTagName("p")
    const year = p[4].getElementsByTagName("b")[0]
    const fields = [0, 1, 2, 3, 5, 6]
    if (change.innerHTML === " Заменить ") {
        for (const i of fields) {
            p[i].dataset.old = p[i].innerHTML
            p[i].innerHTML = translit(p[i].dataset.old)
        }
        year.dataset.old = year.innerHTML
        year.innerHTML = toRoman(parseInt(year.dataset.old))
        change.innerHTML = " Вернуть "
    } else {
        for (const i of fields) {
            p[i].innerHTML = p[i].dataset.old
        }
        year.innerHTML = year.dataset.old
        change.innerHTML = " Заменить "
    }
}

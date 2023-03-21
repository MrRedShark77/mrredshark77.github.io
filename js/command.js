let cmd, cout

function enterCommand() {
    let v = cmd.value
    let vd = v.split(' ')

    cout.innerHTML += ">"+v+"<br>"

    setTimeout(() => {
        let vf = vd[0]
        let AGY_vf = convertStringIntoAGY(vf)

        if (vf == 'clear') {
            cout.innerHTML = ""
        }
        else if (vf == 'help') {
            cout.innerHTML += `
                 clear - clears all command outputs.
            <br> secret [code] - "what does secret mean?"
            `
            // For more information on a specific command, type HELP command-name
        }
        else if (AGY_vf == `h!]PZJ?ii]`) {
            cout.innerHTML += `<img src="https://media.tenor.com/U1dgzSAQk8wAAAAS/kys.gif">`
        }
        else if (vf == 'secret') {
            let s = vd[1]
            let AGY_s = convertStringIntoAGY(s)

            cout.innerHTML += `nobody happened...`.spanClass('warning')
        }
        else cout.innerHTML += `'${vf}' didn't find an existing command`.spanClass('error')

        if (vf != 'clear') cout.innerHTML += "<br><br>"
    }, 100);
}

let SEED = [42421n, 18410740n, 9247923n]

String.prototype.spanClass = function (className) { return className ? `<span class='${className}'>${this}</span>` : String(this) }

function convertStringIntoAGY(s) {
    let ca = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?!/<>@#$%^&*()_-+=~№;:'"[]{}|`, cl = BigInt(ca.length), r = 0n, sd = SEED[0], result = ''

    for (let i = BigInt(s.length)-1n; i >= 0n; i--) {
        let q = BigInt(ca.indexOf(s[i])), w = q >= 0n ? cl**(BigInt(s.length)-i-1n)*q : 0

        if (i % 2n == 0n && w % 3n == i % (w % 4n + 2n)) w *= (w % 4n + 2n) * (i + 1n)

        r += w * sd

        sd = (sd + SEED[2]**(i % 3n + i * (q + 2n) % 3n)) % SEED[1]
    }

    while (r > 0n) {
        result += ca[r % cl]

        r /= cl
    }

    return result.length < 10 ? convertStringIntoAGY(result) : result
}
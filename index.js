class Dice {
    constructor(sorteio) {
        this.sorteio = sorteio
    }

    dado() {
        let d = document.getElementsByClassName("btn")[0]

        d.onclick = _ => {
            if (this.sorteio === 1) {
                document.getElementById("face").src = "one.png"
            } else if (this.sorteio === 2) {
                document.getElementById("face").src = "two.png"
            } else if (this.sorteio === 3) {
                document.getElementById("face").src = "three.png"
                document.getElementById("face").style.height = "170px"
            } else if (this.sorteio === 4) {
                document.getElementById("face").src = "four.png"
            } else if (this.sorteio === 5) {
                document.getElementById("face").src = "five.png"
                document.getElementById("face").style.height = "170px"
            } else if (this.sorteio === 6) {
                document.getElementById("face").src = "six.png"
            } else {
                document.error("Erro")
            }
        }
    }

    again() {
        let r = document.getElementsByClassName("btn2")[0]

        r.onclick = _ => document.getElementById("face").src = "one.png"
    }
}

const s = Math.floor(Math.random() * 6 + 1)
const jogo = new Dice(s)
jogo.dado()
jogo.again()

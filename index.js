class Dice {
    constructor(sorteio) {
        this.sorteio = sorteio
    }

    dado() {
        let d = document.getElementsByClassName("btn")[0]

        d.onclick = () => {
            if (this.sorteio === 1) {
                document.getElementById("face").src = "one.png"
            } else if (this.sorteio === 2) {
                document.getElementById("face").src = "two.png"
            } else if (this.sorteio === 3) {
                document.getElementById("face").src = "three.png"
            } else if (this.sorteio === 4) {
                document.getElementById("face").src = "four.png"
            } else if (this.sorteio === 5) {
                document.getElementById("face").src = "five.png"
            } else if (this.sorteio === 6) {
                document.getElementById("face").src = "six.png"
            } else {
                document.error("Erro")
            }
        }
    }
}

const s = Math.floor(Math.random() * 6 + 1)
const jogo = new Dice(s)
jogo.dado()

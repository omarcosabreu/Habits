var name = prompt("Olá!! Qual o seu nome?")

const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert( 'Hey ' + name + ', esse dia já foi registrado!✋🏽')
    return
  }

  console.log("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("ToolsKey", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("ToolsKey")) || {}
nlwSetup.setData(data)
nlwSetup.load()

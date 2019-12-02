const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

//app.appendChild(logo)
app.appendChild(container)

strings = ["duckduckgo", "youtube", "facebook", "google", "amazon", "github"]

//mebbe: add images?

for(i = 0; i < 6; i++)
{
	const card = document.createElement('div')
	card.setAttribute('class', 'card')
	const buttons = document.createElement('button')
	buttons.setAttribute('class', 'stupid')
	buttons.textContent = strings[i]
	buttons.onclick = funct;
	card.append(buttons)
	container.append(card)
}

function funct() {
  lmao = this.textContent
  window.open("https://" + lmao + ".com", "_self")
}

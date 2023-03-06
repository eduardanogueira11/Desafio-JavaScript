const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000086

const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const currencyValueText = document.getElementById('currency-value-text')

  realValueText.innerHTML = inputReais

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL',
  }).format(inputReais)


  
  if (select.value === "₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BTC',
    }).format(inputReais * bitcoin)
  }


  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputReais / dolar)
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputReais / euro)
  }
}

changeCurrency = () => {

  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === 'US$ Dólar americano') {
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = "./assets/estados-unidos (1) 1.jpg"
  }


  if (select.value === '€ Euro') {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/Euro.png"
  }

  if (select.value === '₿ Bitcoin') {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/Bitcoin.png"
  }
  convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

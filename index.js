let input = document.createElement('input')
input.setAttribute('type', 'text')
input.className = 'brewery'

let button = document.createElement('button')
button.setAttribute('input', 'text')
button.innerHTML = 'click me'
let dataDiv = document.createElement('div')

let container = document.createElement('div')
container.className = 'container'

let row = document.createElement('div')
row.className = `d-flex mt-4 gap-2 flex-wrap justify-content-center`
document.body.append(input, button, dataDiv, container);
container.append(row)

async function getdata() {
  let res = document.querySelector('.brewery').value
  try {
    let response = await fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${res}`)
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {

      createParaContent(data[i])
    }
  } catch (error) {
    console.log('error');
  }
}
function createParaContent(data) {
  row.innerHTML += `
  <div class="card border-primary mb-1" style="width: 18rem; border : solid 4px"; m-2;p-2; >
  <div class="card-body">
    <h5 class="card-title">Name : ${data.name}</h5>
  <p class="card-text">${' Address : ' + data['address_1']}</p>   
    <p class="card-text">${'type : ' + data['brewery_type']
    }</p>
    <p class="card-text">${'phone : ' + data["phone"]
    }</p>
    <a href="${'website : ' + data["website_url"]
    }" class="btn btn-primary">${'Website URL ' + data["website_url"]}</a>
  </div>
</div>`

}
button.addEventListener('click', getdata)


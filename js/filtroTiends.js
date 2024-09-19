let inventario = [
  {
    id: 1,
    producto: "chompa1",
    desc: "Chompa gris tejido a lana con botones en el pecho y capucha",
    src: "../assets/chompa1.png",
    precio: 91.97,
    categoria: "chompas"
  },
  {
    id: 2,
    producto: "chompa2",
    desc: "Chompa marron formal a rayas",
    src: "../assets/chompa2.png",
    precio: 81.25,
    categoria: "chompas"
  },
  {
    id: 3,
    producto: "chompa3",
    desc: "Chompa tricolor: negro, crema, marron slim fit, cuello redondo",
    src: "../assets/chompa3.png",
    precio: 105.78,
    categoria: "chompas"
  },
  {
    id: 4,
    producto: "chompa4",
    src: "../assets/chompa4.png",
    desc: "Chompa gradiente Bicolor: vino y blanco slim fit, tejido a lana",
    precio: 70.77,
    categoria: "chompas"
  },
  {
    id: 5,
    producto: "pant1",
    desc: "Jogger Verde militar, bolsillos en los muslos",
    src: "../assets/pant1.png",
    precio: 93.95,
    categoria: "pantalones"
  },
  {
    id: 6,
    producto: "pant2",
    desc: "Pantalon azul marino extra large",
    src: "../assets/pant2.png",
    precio: 82.31,
    categoria: "pantalones"
  },
  {
    id: 7,
    producto: "pant3",
    desc: "Jean clasico azul claro wide legs",
    src: "../assets/pant3.png",
    precio: 113.54,
    categoria: "pantalones"
  },
  {
    id: 8,
    producto: "pant4",
    src: "../assets/pant4.png",
    desc:"Pantalon de vestir verde militar suelto",
    precio: 97.54,
    categoria: "pantalones"
  },
  {
    id: 9,
    producto: "pant5",
    src: "../assets/pant5.png",
    desc:"Pantalon de vestir formal color crema",
    precio: 87.74,
    categoria: "pantalones"
  },
  {
    id: 10,
    producto: "pijama1",
    src: "../assets/pijama1.png",
    desc: "Conjunto Pijama con short oscuro",
    precio: 102.21,
    categoria: "pijamas"
  },
  {
    id: 11,
    producto: "pijama2",
    src: "../assets/pijama2.png",
    desc:"Conjunto Pijama blanco/celeste",
    precio: 106.31,
    categoria: "pijamas"
  },
  {
    id: 12,
    producto: "pijama3",
    src: "../assets/pijama3.png",
    desc:"Conjunto Pijama de verano camisa/short verde/azul",
    precio: 103.51,
    categoria: "pijamas"
  },
  {
    id: 13,
    producto: "polera1",
    desc:"Polera negra, marron interna con capucha y un bolsillo tipo canguro",
    src: "../assets/polera1.png",
    precio: 87.43,
    categoria: "poleras"
  },
  {
    id: 14,
    producto: "polera2",
    desc: "Sobrecamisa con botones marrones, interior cobertor blanco con capucha",
    src: "../assets/polera2.png",
    precio: 118.45,
    categoria: "poleras"
  },
  {
    id: 15,
    producto: "polera3",
    desc: "Polera Gris, con bordes negros y un bolsillo tipo canguro",
    src: "../assets/polera3.png",
    precio: 90.42,
    categoria: "poleras"
  },
  {
    id: 16,
    producto: "polera4",
    desc:"Sobrecamisa gris a rayas marrones con capucha",
    src: "../assets/polera4.png",
    precio: 59.89,
    categoria: "poleras"
  },
  {
    id: 17,
    producto: "polo1",
    desc: "Camiseta Deportiva con cuello en V, Chigago verde",
    src: "../assets/polo1.png",
    precio: 43.19,
    categoria: "polos"
  },
  {
    id: 18,
    producto: "polo2",
    desc: "Polo rosado cuello redondo, marshmello logo",
    src: "../assets/polo2.png",
    precio: 45.17,
    categoria: "polos"
  },
  {
    id: 19,
    producto: "polo3",
    desc: "Polo gris con cuello redondo y estampado de Dj Bl3nd",
    src: "../assets/polo3.png",
    precio: 52.07,
    categoria: "polos"
  },
  {
    id: 20,
    producto: "polo4",
    desc:"Camiseta Deportiva con cuello en V, Wondertu azul",
    src: "../assets/polo4.png",
    precio: 65.87,
    categoria: "polos"
  },
  {
    id: 21,
    producto: "polo5",
    desc:"Polo negro estampado alien verde",
    src: "../assets/polo5.png",
    precio: 65.87,
    categoria: "polos"
  }
]

//get contenedor
const container = document.getElementById('productos-container')
//get all buttons
const btns = document.querySelectorAll('button.filter-btn')

function filtrarDatos() {
  //CleanUp active class
  btns.forEach(btn => btn.classList.remove('active'))
  //console.log(this.innerText.toLowerCase())
  // "this" el boton clickeado
  this.classList.add('active')
  let filtro = this.innerText.toLowerCase()

  // Mapeo de categorías válidas
  const categoriasValidas = {
    chompas: true,
    pantalones: true,
    pijamas: true,
    poleras: true,
    polos: true
  };

  // Si la categoría está en el objeto, filtra, de lo contrario muestra todo
  let filterData = categoriasValidas[filtro] 
    ? inventario.filter(item => item.categoria === filtro) 
    : inventario;

  container.innerHTML = displayContent(filterData);
}

function displayContent(arr) {
  let content = arr.map(item => {
    const {desc, src, precio} = item;
    let newPrecio = precio.toString().split(".");

    return (
      `<div class="producto card mb-3">
            <figure class="mb-0">
              <img src="${src}" alt="${desc}">
            </figure>
            <div class="card-body d-flex justify-content-between flex-wrap align-items-center">
              <h5 class="card-title">${desc}</h5>
              <p class="card-text mb-0"><span class="text-up">$</span><span>${newPrecio[0]}</span><span class="text-up">${newPrecio[1]}</span></p>
              <button class="btn btn-primary"><span>Agregar</span> <i class="bi bi-cart-fill"></i></button>
            </div>
        </div>`
    )
  }).join(" ")
  //console.log(content)
  //container.innerHTML = content;
  return content
}

window.addEventListener("DOMContentLoaded", ()=>{
  let content = displayContent(inventario);
  container.innerHTML = content;

  //darle funcionalidad a los botones despues de cargar el contenido
  btns.forEach(button => button.addEventListener('click', filtrarDatos))
})
const baseDeDatos = [
    {
      id: 1,
      nombre: 'Torre Eiffel',
      descripcion: 'Disfruta de una visita guiada a la emblemática Torre Eiffel. Sube a lo más alto de esta icónica estructura de hierro y admira las impresionantes vistas panorámicas de París.',
      precio: 20,
      imagen: './Images/torre_go.jpg'
    },
    {
      id: 2,
      nombre: 'Museo del Louvre',
      descripcion: "Sumérgete en la historia del arte con un recorrido por el Museo del Louvre. Descubre obras maestras como la Mona Lisa de Leonardo da Vinci y el famoso Código de Hammurabi.",
      precio: 15,
      imagen: './Images/louvre.webp'
    },
    {
      id: 3,
      nombre: 'Crucero por el rio Sena',
      descripcion: "Navega por el pintoresco río Sena en un relajante crucero. Disfruta de las vistas de los emblemáticos monumentos parisinos, como la Catedral de Notre-Dame y el Museo de Orsay.",
      precio: 25,
      imagen: "./Images/crucero.jpg"
    },
    {
      id: 4,
      nombre: 'Tour por el Barrio de Montmartre',
      descripcion: "Explora el encantador barrio de Montmartre, famoso por su ambiente bohemio y sus calles empedradas. Descubre el Moulin Rouge, la Basílica del Sagrado Corazón y artistas callejeros.",
      precio: 15,
      imagen: './Images/monmatre.jpg'
    },
    {
      id: 5,
      nombre: 'Excursión a Versalles',
      descripcion: "Viaja al lujoso Palacio de Versalles y explora sus magníficos jardines. Descubre la opulencia de la vida cortesana y admira los impresionantes salones y habitaciones del palacio.",
      precio: 30,
      imagen: './Images/versalles.jpg'
    },
    {
      id: 6,
      nombre: 'Tour gastronómico por París',
      descripcion: "Deléitate con una experiencia culinaria única en un tour gastronómico por París. Prueba sabrosos quesos franceses, croissants recién horneados y vinos exquisitos en encantadores bistros.",
      precio: 25,
      imagen: './Images/tour.jpg'
    }
  ];
  
let carrito = [];
const divisa = '€';
const DOMproductos = document.querySelector('#productos');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonFinalizar = document.querySelector('#boton-finalizar');
const DOMbotonSeguirComprando = document.querySelector('#boton-seguir-comprando');

DOMbotonSeguirComprando.addEventListener('click', function() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDesdeLocalStorage() {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    renderizarCarrito();
  }
}

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('closed');
});



function renderizarProductos() {
  baseDeDatos.forEach((info) => {
    const miNodo = document.createElement('div');
    miNodo.classList.add('card');
    miNodo.style.flexBasis = '30%';
    miNodo.dataset.id = info.id;

    const miNodoImagen = document.createElement('img');
    miNodoImagen.classList.add('card-img-top');
    miNodoImagen.setAttribute('src', info.imagen);
    miNodoImagen.style.height = '200px';
    miNodoImagen.style.width = '100%';

    const miNodoCardBody = document.createElement('div');
    miNodoCardBody.classList.add('card-body');

    const miNodoTitle = document.createElement('h5');
    miNodoTitle.classList.add('card-title');
    miNodoTitle.textContent = info.nombre;

    const miNodoDescripcion = document.createElement('p');
    miNodoDescripcion.classList.add('card-text');
    miNodoDescripcion.textContent = info.descripcion;

    const miNodoPrecio = document.createElement('p');
    miNodoPrecio.classList.add('card-text');
    miNodoPrecio.textContent = divisa + info.precio;

    const miNodoBoton = document.createElement('button');
    miNodoBoton.classList.add('btn', 'btn-primary');
    miNodoBoton.textContent = 'Añadir al carrito';
    miNodoBoton.style.marginRight = '5px';
    miNodoBoton.setAttribute('marcador', info.id);
    miNodoBoton.addEventListener('click', añadirProductoAlCarrito);

    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoDescripcion);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoImagen);
    miNodo.appendChild(miNodoCardBody);
    DOMproductos.appendChild(miNodo);
  });
}

function renderizarCarrito() {
  DOMcarrito.textContent = '';

  carrito.forEach((item) => {
    const miNodo = document.createElement('li');
    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
    miNodo.textContent = `${item.nombre} - ${divisa}${item.precio} x ${item.cantidad}`;
    miNodo.style.marginTop = '10px';
    miNodo.style.marginBottom = '10px';

    const miNodoBoton = document.createElement('button');
    miNodoBoton.classList.add('btn', 'btn-danger', 'mx-5');
    miNodoBoton.textContent = 'Eliminar';
    miNodoBoton.style.marginRight = '5px';
    miNodoBoton.dataset.item = item.id;
    miNodoBoton.addEventListener('click', borrarItemCarrito);

    miNodo.appendChild(miNodoBoton);
    DOMcarrito.appendChild(miNodo);
  });

  const total = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
  DOMtotal.textContent = 'Total: ' + divisa + total.toFixed(2);
}

function añadirProductoAlCarrito(evento) {
  const idProducto = evento.target.getAttribute('marcador');
  const productoEnCarrito = carrito.find((item) => item.id === parseInt(idProducto));

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({
      id: baseDeDatos[idProducto - 1].id,
      nombre: baseDeDatos[idProducto - 1].nombre,
      precio: baseDeDatos[idProducto - 1].precio,
      cantidad: 1
    });
  }

  guardarCarritoEnLocalStorage();
  renderizarCarrito();
}

function borrarItemCarrito(evento) {
  const idProducto = evento.target.dataset.item;
  const productoEnCarrito = carrito.find((item) => item.id === parseInt(idProducto));

  if (productoEnCarrito.cantidad > 1) {
    productoEnCarrito.cantidad--;
  } else {
    carrito = carrito.filter((item) => item.id !== parseInt(idProducto));
  }

  guardarCarritoEnLocalStorage();
  renderizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarritoEnLocalStorage();
  renderizarCarrito();
}

function finalizarCompra() {
  vaciarCarrito();
  alert('¡Gracias por tu compra!');
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMbotonFinalizar.addEventListener('click', finalizarCompra);

cargarCarritoDesdeLocalStorage();
renderizarProductos();
renderizarCarrito();


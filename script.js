const productos = [
  { id: 1, nombre: "Camisa", categoria: "ropa" },
  { id: 2, nombre: "Pantalón", categoria: "ropa" },
  { id: 3, nombre: "Celular", categoria: "tecnologia" }
];

let carrito = [];
function mostrarProductos() {
  const contenedor = document.getElementById("productos");

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${producto.nombre}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

mostrarProductos();

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  mostrarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${producto.nombre}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    lista.appendChild(li);
  });

  actualizarContador();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

function actualizarContador() {
  document.getElementById("contador-carrito").textContent = carrito.length;
}

function contadorVisitas() {
  let visitas = localStorage.getItem("visitas");

  if (visitas) {
    visitas++;
  } else {
    visitas = 1;
  }

  localStorage.setItem("visitas", visitas);
  document.getElementById("contador-visitas").textContent = visitas;
}

contadorVisitas();

function filtrarCategoria(categoria) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  const filtrados = productos.filter(p => p.categoria === categoria);

  filtrados.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${producto.nombre}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

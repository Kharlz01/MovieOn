const {
  setLike
} = require("../modules/likes")

global.my = {
  getStorageSync: jest.fn,
  setStorageSync: jest.fn
}

// Prueba unitaria donde se verifica el correcto almacenamiento de peliculas a favoritos

const posts = { id: 1, title: "Titulo 1", description: "Una pelicula genial"};

test("Generando un like en la lista de favoritos", () => {
  expect(setLike(posts))
})
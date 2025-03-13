const {
  getData
} = require("../modules/api")

global.my = {
  request: jest.fn(),
}

// Prueba unitaria donde se verifica la respuesta de la API a las palabras clave

test("Consultando palabras clave en el buscador de la API", () => {
  expect(getData("club"))
})

test("Consultando palabras clave en el buscador de la API", () => {
  expect(getData("proyecto"))
})
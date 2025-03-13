/**
 * Realiza una solicitud a la API de The Movie DB para obtener películas basadas en una palabra clave y un número de página.
 *
 * @function getData
 * @param {string} word - La palabra clave para buscar películas.
 * @param {number} [page=1] - El número de página de los resultados (por defecto es 1).
 * @returns {Promise} Una promesa que resuelve con la respuesta de la API o rechaza con un mensaje de error.
 */

function getData(word, page=1) {
  // Genera una promesa, para poder darle espacio a la solicitud de traer la informacion
  return new Promise((resolve, reject) => {
    // Se consulta a la API, con la palabra clave y el numero de pagina solicitados por el usuario
    my.request({
      url: `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=es-CO&page=${page}`,
      method: "GET",
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmU3MGI3MzcxNTY0NmI2MzI2ZTcxZDYxZjJlMDQ2OSIsIm5iZiI6MTc0MTczODcwNC41Nzc5OTk4LCJzdWIiOiI2N2QwZDJkMDc3NjFhM2E2OGY2MGFkZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3hCV03RIMivxQ5ZXKkgs1w5HoLDXXIvfNZSJBa5bJQM'
      },
      data: {
        from: 'Mini Program',
        production: 'JSAPI',
      },
      dataType: 'json',
      success: function (res) {
        // Devuelve la informacion con todos los datos
        resolve(res);
      },
      fail: function (res) {
        // En caso de algun problema con la API genera el mensaje de error.
        my.alert({
          content: 'Lo sentimos, no pudimos conectar con la base de datos. Intente mas tarde.'
        });
        console.error("Ocurrio un error con la API. Error: " + res.errorMessage);
        reject(res.errorMessage);
      },
    });
  });
}

// API generos: https://api.themoviedb.org/3/genre/movie/list?language=es

/**
 * Mapea los IDs de géneros de películas a sus nombres correspondientes.
 *
 * @constant genreMap
 * @type {Object}
 * @property {string} 28 - Acción
 * @property {string} 12 - Aventura
 * @property {string} 16 - Animación
 * @property {string} 35 - Comedia
 * @property {string} 80 - Crimen
 * @property {string} 99 - Documental
 * @property {string} 18 - Drama
 * @property {string} 10751 - Familiar
 * @property {string} 14 - Fantasía
 * @property {string} 36 - Historia
 * @property {string} 27 - Terror
 * @property {string} 10402 - Música
 * @property {string} 9648 - Misterio
 * @property {string} 10749 - Romance
 * @property {string} 878 - Ciencia Ficción
 * @property {string} 10770 - Película de TV
 * @property {string} 53 - Suspenso
 * @property {string} 10752 - Bélica
 * @property {string} 37 - Western
 */

const genreMap = {
  28: "Acción",
  12: "Aventura",
  16: "Animación",
  35: "Comedia",
  80: "Crimen",
  99: "Documental",
  18: "Drama",
  10751: "Familiar",
  14: "Fantasía",
  36: "Historia",
  27: "Terror",
  10402: "Música",
  9648: "Misterio",
  10749: "Romance",
  878: "Ciencia Ficción",
  10770: "Película de TV",
  53: "Suspenso",
  10752: "Bélica",
  37: "Western"
};

/**
 * Convierte un array de IDs de géneros en un array de nombres de géneros.
 *
 * @function changeGenre
 * @param {number[]} e - Un array de IDs de géneros.
 * @returns {string[]} Un array de nombres de géneros correspondientes a los IDs proporcionados.
 */

function changeGenre (e) {
  // Se toman los codigos correspondientes a los generos y se transforma a su equivalente.
  return e.map(id => genreMap[id] || "Desconocido");
}

module.exports = {
  getData,
  changeGenre
};
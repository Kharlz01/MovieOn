/**
 * Agrega o elimina un elemento de la lista de favoritos almacenada en el local storage.
 *
 * @function setLike
 * @param {Object} e - El objeto que representa el elemento a agregar o eliminar de favoritos.
 * @param {string|number} e.id - El identificador único del elemento.
 * @example
 * setLike({ id: 123, title: "Película 1" }); // Agrega o elimina la película con ID 123 de favoritos.
 */

function setLike(e) {
  // Obtener los favoritos actuales del local storage
  const bookmarks = likeList();
  const options = ownList();

  // Buscar si el elemento ya está en la lista de favoritos segun su id
  const index = bookmarks.findIndex(item => item.id === e.id);

  if (index === -1) {
    // Si no está en la lista, agregarlo
    bookmarks.push(e);
    options.push({id: e.id, title: e.title, comment: "", myRate: 0});
  } else {
    // Si ya está en la lista, eliminarlo
    bookmarks.splice(index, 1);
    options.splice(index, 1);
  }

  // Guardar la lista actualizada en el local storage
  my.setStorageSync({
    key: "bookmarks",
    data: bookmarks
  });

  my.setStorageSync({
    key: "localInfo",
    data: options,
  });
}

/**
 * Verifica si un elemento específico está en la lista de favoritos.
 *
 * @function isLiked
 * @param {string|number} e - El identificador único del elemento a verificar.
 * @returns {boolean} `true` si el elemento está en la lista de favoritos, `false` en caso contrario.
 * @example
 * const liked = isLiked(123); // Verifica si el elemento con ID 123 está en favoritos.
 */

function isLiked(e) {
  // Obtener la lista de favoritos del local storage
  const bookmarks = likeList();

  // Verificar si la card está en la lista de favoritos
  const isMovieLiked = bookmarks.some(item => item.id === e);

  return isMovieLiked;
}

/**
 * Agrega o elimina comentarios o valoraciones de la lista de favoritos almacenada en el local storage.
 *
 * @function changeLocal
 * @param {Object} e - El objeto que representa el elemento a agregar modificar de la pelicula en especifico de favoritos.
 * @param {string|number} e.id - El identificador único del elemento.
 * @param {string} e.data - El valor del dato a reemplazar.
 * @param {string|number} e.flag - El identificador del elemento a reemplazar (1 para comentario o 2 para valoracion).
 * @example
 * setLike({ id: 123, data: 8, flag: 2 }); // Modifica la valoracion a 8 de la pelicula con el id 123.
 */

function changeLocal(e) {
  const options = ownList();
  // Encontrar el índice del elemento que coincide con el id recibido
  const index = options.findIndex(item => item.id === e.id);

  // Si se encuentra el índice (es decir, si el elemento existe)
  if (index !== -1) {
    // Verificar la flag para saber si es un comentario o una valoración
    if (e.flag === 1) {
      // Reemplazar el comentario
      options[index].comment = e.data;
    } else if (e.flag === 2) {
      // Reemplazar la valoración
      options[index].myRate = e.data;
    }
    // Guardar la lista actualizada en el almacenamiento local
    my.setStorageSync({
      key: "localInfo",
      data: options,
    });
  } else {
    console.error("Elemento no encontrado");
  }
}
/**
 * Obtiene la lista de favoritos almacenada en el local storage.
 * Si no hay datos, devuelve un array vacío.
 *
 * @function likeList
 * @returns {Array} La lista de favoritos almacenada en el local storage.
 * @example
 * const favorites = likeList(); // Obtiene la lista de favoritos.
 */

function likeList () {
  // Funcion que trae los datos de guardados de las peliculas favoritas
  return my.getStorageSync({ key: "bookmarks" }).data || [];
}

function ownList () {
  // Funcion que trae los datos de guardados de los datos del usuario respecto a las peliculas
  return my.getStorageSync({ key: "localInfo" }).data || [];
}

module.exports = {
  setLike,
  isLiked,
  changeLocal,
  likeList,
  ownList
};
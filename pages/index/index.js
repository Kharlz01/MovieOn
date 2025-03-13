const {
  getData
} = require('../../modules/api')

Page({

  data: {
    results: [],
    currentPage: 1,
    searchValue: "",
    pages: 0,
    keyword: "",
  },

  onInputChange(e) {
    // console.log(e.detail.value);
  },

  showDetails(e){
    const movieData = JSON.stringify(this.data.results[e]);
    my.navigateTo({
      url: '/pages/details/details?data='+movieData
    })
  },

  async onEnterPress (word, page) {

    let currentPage = 1;
    if (page) {
      currentPage = page
    }

    try {
      // Llama a getData para obtener los datos
      const movies = await getData(word.detail.value , currentPage);

      // Actualiza el estado de la página con los datos obtenidos
      this.setData({
        results: movies.data.results,
        pages: parseInt(movies.data.total_pages),
        currentPage,
        keyword: word,
      });
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }

  },

  onLoad(query) {
    // Page load

    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'MovieOn',
      desc: 'Tu app para enlistar tus peliculas favoritas',
      path: 'pages/index/index',
    };
  },
});

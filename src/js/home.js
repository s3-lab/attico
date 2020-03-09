// // traer datos de un servidor externo
// console.log('holamundo')
//
// // variables
//
// // funciones piezas de código que se pueden reutilizar
// //
// // Promesa mandar una función si falla o hace lo que tiene que hacer
//
//   const noCambia = "sebastian";
//   let cambia = "@sebastián";
//
//   function cambiarNombre(nuevoNombre) {
//     cambia = nuevoNombre
//   }
//
//   const getUserAll = new Promise(function(todoBien, todoMal){
//    // llamar un api
//    setTimeout(function() {
//      // luego de 3 segundos
//    todoBien('se acabó el tiempo');
//   }, 5000)
//   })
//
//  const getUser = new Promise(function(todoBien, todoMal){
//  	// llamar un api
//   setTimeout(function() {
//     // luego de 3 segundos
//   todoBien('se acabó el tiempo');
//   }, 3000)
//  })
//
// // Promesa funciona
//  //
//  // .then(function() {
//  //  console.log('todo esta bien' )
//  // })
//  //
//  // // Promesa se rechaza o falla
//  //
//  // .catch(function(message) {
//  //   console.log(message);
//  // })
//
// Promise.all([
//   getUser,
//   getUserAll,
// ])
// .then(function(message) {
//   console.log(message);
// })
// .catch (function(message) {
//   console.log(message);
// })

// Servidor o servicio pedir datos (llama API) se utiliza una técnica llamada ajax

// Utilizando jquery
$.ajax('https://randomuser.me/api/kasjnvjkcdk',{
  method: 'GET' ,
  success: function(data) {
    console.log(data)
  },
  error: function (error) {
    console.log(error);
  }
})


// java vanila utilizando la función fetch para traer datos de un servidor externo

fetch('https://randomuser.me/api/jnsdvjnkd')
  .then(function (response) {
    // console.log(response)
    return response.json()
  })
  .then(function (user) {
    console.log('user', user.results[0].name.first)
  })
  .catch(function () {
    console.log('algo falló')
  });

  // // funciones asincronas
  // código asincrono que se lee de manera sincrona

  (async function load() {
    // await: poder esperar las peticiones de la API
    async function getData(url) {
      const response = await fetch(url)
      const data = await response.json()
      return data;
    }
    const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
    console.log(actionList, dramaList, animationList);




    const $artfilmContainer = document.querySelector('#artfilm');
    const $phContainer = document.getElementById('#ph');
    const $tvContainer = document.querySelector('#tv');
    const $modal = document.getElementById('modal');
    const $hideModal = document.getElementById('hide-modal');
    const $overlay = document.getElementById('overlay');

    const $form = document.getElementById('#form');
    const $home = document.getElementById('#home');

    const $modalTittle = $modal.querySelector('h1');
    const $modalImage = $modal.querySelector('img');
    const $modalDescription = $modal.querySelector('p');
  })()

 // selectores en jquery
 //  const $home = ('.home .list #item');

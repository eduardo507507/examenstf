const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    const info = imagen.getAttribute('data-info');
    imagen.addEventListener('click', () => {
      aparecerImagen(imagen.getAttribute('src'), info);
    });
});
  

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen, info) => {
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenLight.classList.toggle('showImage');
    hamburguer.style.opacity = '0';
  
    // Verificar si ya existe un elemento de información adicional
    let infoElement = contenedorLight.querySelector('.info-adicional');
    if (!infoElement) {
      // Si no existe, crear un nuevo elemento
      infoElement = document.createElement('p');
      infoElement.classList.add('info-adicional');
      contenedorLight.appendChild(infoElement);
    }
  
    infoElement.textContent = info;
    infoElement.style.textAlign = 'center'; // Alineación centrada
    infoElement.style.color = 'white'; // Color blanco
    infoElement.style.background = 'rgba(0, 0, 0, 0.7)'; // Fondo oscuro y transparente
    infoElement.style.padding = '10px'; // Espacio alrededor del texto
    infoElement.style.display = 'flex'; // Mostrar como flexbox
    infoElement.style.flexDirection = 'column'; // Apilar verticalmente los elementos dentro del contenedor
    infoElement.style.justifyContent = 'center'; // Centrar verticalmente los elementos
    infoElement.style.alignItems = 'center'; // Centrar horizontalmente los elementos
  
    contenedorLight.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Fondo oscuro y transparente
    contenedorLight.style.display = 'flex'; // Mostrar como flexbox
    contenedorLight.style.alignItems = 'center'; // Centrar verticalmente
    contenedorLight.style.justifyContent = 'center'; // Centrar horizontalmente
  
    imagenLight.style.maxHeight = '80%'; // Achicar la imagen
  };
  
  
  
  
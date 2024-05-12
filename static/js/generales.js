const verScroll = function() {
    const navbar = document.querySelector('header')
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
}

window.addEventListener('scroll', verScroll )

// Función para obtener el nombre del localStorage
const obtenerNombreLocalStorage = () => {
  const formDataString = localStorage.getItem('formData');
  if (formDataString) {
      const formData = JSON.parse(formDataString);
      return formData.firstname;
  } else {
      return null; // Si no hay información en localStorage
  }
}


const nombreGuardado = obtenerNombreLocalStorage();
if (nombreGuardado) {
  console.log(`¡Hola, ${nombreGuardado}!`);
  // const enlaceUsuario = document.querySelector('#usuario')
  // enlaceUsuario.innerHTML=""
  // enlaceUsuario.insertAdjacentText('afterbegin',nombreGuardado)
} else {
  console.log("No se encontró información en el localStorage.");
}

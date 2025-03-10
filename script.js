// Cambiar dirección de la animación al hacer clic
const cuadrado = document.querySelector('.cuadrado');

cuadrado.addEventListener('click', () => {
    cuadrado.style.animationDirection = cuadrado.style.animationDirection === 'normal' ? 'reverse' : 'normal';
});

console.log("¡Haz clic en el cuadrado para cambiar la dirección de la animación!");

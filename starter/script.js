'use strict';

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let puntuacion = 20;
let mejorPuntuacion = 0;

const mostrarMensaje = function (mensaje) {
  document.querySelector('.message').textContent = mensaje;
};

document.querySelector('.check').addEventListener('click', function () {
  const intento = Number(document.querySelector('.guess').value);
  console.log(intento, typeof intento);

  // Cuando no hay entrada
  if (!intento) {
    mostrarMensaje('⛔️ ¡Introduce un número!');

    // Cuando el jugador gana
  } else if (intento === numeroSecreto) {
    mostrarMensaje('🎉 ¡Número correcto!');
    document.querySelector('.number').textContent = numeroSecreto;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (puntuacion > mejorPuntuacion) {
      mejorPuntuacion = puntuacion;
      document.querySelector('.highscore').textContent = mejorPuntuacion;
    }

    // Cuando el intento es incorrecto
  } else if (intento !== numeroSecreto) {
    if (puntuacion > 1) {
      mostrarMensaje(
        intento > numeroSecreto ? '📈 ¡Demasiado alto!' : '📉 ¡Demasiado bajo!'
      );
      puntuacion--;
      document.querySelector('.score').textContent = puntuacion;
    } else {
      mostrarMensaje('💥 ¡Has perdido el juego!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  puntuacion = 20;
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;

  mostrarMensaje('¡Empieza a adivinar!');
  document.querySelector('.score').textContent = puntuacion;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

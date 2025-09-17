let text = " Start game versus a computer!";
let i=0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector("#heading").textContent +=text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
    if (i === text.length) {
      typeTwo()
    }
}
type();
let textTwo = "Enter a number from 1 to 20.";
let a=0;
let speed1 = 150;

function typeTwo() {
    if (a < textTwo.length) {
        document.querySelector("#heading1").textContent +=textTwo.charAt(a);
        a++;
        setTimeout(typeTwo,speed1);
    }
    if (a === textTwo.length) {
      typeThree()
    }
}
let textThree = "Who will win : You or the Computer?";
let b=0;
let speed2 = 150;

function typeThree() {
    if (b < textThree.length) {
        document.querySelector("#heading2").textContent +=textThree.charAt(b);
        b++;
        setTimeout(typeThree,speed2);
    }  
}
const input = document.querySelector ("#guess");
const button = document.querySelector ("#btn");
const answer = Math.floor(Math.random()* 20) +1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) 
    play();
})
button.addEventListener("click", play);

function play() {
  const userNumber = document.querySelector("#guess").value

  if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
      icon: 'error',
      title: 'Oh!',
      text: 'Enter a number from 1 to 20!',
    })
  }
  else if (isNaN (userNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Oh!',
      text: 'You need to enter a number!',
  })
}
  else {
    if (userNumber < answer) {
      Swal.fire ('Try a higher number!',
      'The computer is still winning!')
    }
    else {
        Swal.fire({
            title: 'Victory!',
            width: 600,
            padding: '5em',
            color: '#716add',
            background: '#fff url(victory.png)',
            confirmButtonColor:'rgb(11, 181, 59)'
          })
    }
  } 
  guess.value = '';
}

particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: false,
          value_area: 80
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
        width: 0,
        color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

let count_particles, stats, update;
stats = new stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
const selectPlane = document.getElementById('acSelect');
const seatMapDiv = document.getElementById('seatMapDiv'); // здесь будет схема
const titlePlane = document.getElementById('seatMapTitle'); // заголовок
const btnFull = document.getElementById('btnSetFull');
const btnMap = document.getElementById('btnSeatMap'); // отображаем схему
const btnEmpty = document.getElementById('btnSetEmpty');
const totalPax = document.getElementById('totalPax');
const totalAdult = document.getElementById('totalAdult');
const totalHalf = document.getElementById('totalHalf');
const planes = document.querySelectorAll('option');

let countPax = 0;
let countAdult = 0;
let countHalf = 0;


function el(tagName, attributes, children) {
  const element = document.createElement(tagName); // создаю нужный тег
  if (typeof attributes === 'object') {
    // для ключей объекта добавляем атрибут с названием самого ключа и значением, равному значению ключа
    Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
  }
  // если переданный аргумент - строка
  if (typeof children === 'string') {
    // добавляем её в тег
    element.textContent = children;
    // если аргумент - массив
  } else if (children instanceof Array) {
    // для каждого элемента массива добавляем его в качестве дочернего тега в вышесозданный тег
    children.forEach(child => element.appendChild(child));
  }
  return element;
}

// до выбора схемы, кнопки заблокированы
document.addEventListener('DOMContentLoaded', () => {
  btnFull.disabled = true;
  btnEmpty.disabled = true;
})


btnFull.addEventListener('click', function(event) {
event.preventDefault();
  const seats = document.querySelectorAll('div.seat');
  
  Array.from(seats).forEach(seat => {
    deleteSeat(seat);
  });
  
  Array.from(seats).forEach(seat => {
    addAdult(seat);
  });
});

btnEmpty.addEventListener('click', function(event) {
  event.preventDefault();
  const seats = document.querySelectorAll('div.seat');
  Array.from(seats).forEach(seat => {
    deleteSeat(seat);
  });
});


function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}

window.addEventListener('load', parseScheme)

// сначала парсим
function parseScheme(event) {
  btnFull.disabled = false;
  btnEmpty.disabled = false;
  
  event.preventDefault();
  fetch(`https://neto-api.herokuapp.com/plane/${selectPlane.value}`).then((scheme) => {
    return scheme.json();
    seatMapTitle.textContent = `${scheme.title} (${scheme.passengers} пассажиров)`
  })
  .then(showScheme);
}

    
// потом показываем    
function showScheme(scheme) {    
    const fragment = scheme.scheme.reduce(
    (fragment, currentValue, index) => {
      switch(currentValue) {
        case 4:
          fragment.appendChild(createRow(index++, scheme.letters4));
          break;
        case 6:
          fragment.appendChild(createRow(index++, scheme.letters6));
          break;
        default:
          fragment.appendChild(createRow(index++, []));          
      }
      return fragment;
    }, 
    document.createDocumentFragment()
  );
 
  removeChildren(seatMapDiv);
  seatMapDiv.appendChild(fragment);
  
  const seats = document.querySelectorAll('div.seat');
  Array.from(seats).forEach(seat => {
      seat.addEventListener('click', function(event) {
        if (seat.classList.contains('adult') || seat.classList.contains('half')) {
          deleteSeat(seat);
        } else {
          event.altKey ? addHalf(seat) : addAdult(seat);            
        }
      });
  });
}


function createRow(num, letters) {
  return el('div', {class: 'row seating-row text-center'}, [
    el('div', {class: 'col-xs-1 row-number'}, [
      el('h2', {class: ''}, num.toString())
    ]),
    el('div', {class: 'col-xs-5'}, [
      getSeat(letters, 'A'),
      getSeat(letters, 'B'),
      getSeat(letters, 'C')
    ]),
    el('div', {class: 'col-xs-5'}, [
      getSeat(letters, 'D'),
      getSeat(letters, 'E'),
      getSeat(letters, 'F')      
    ])    
  ]);
}

function getSeat(letters, needLetter) {
  if (letters.indexOf(needLetter) !== -1) {
    return el('div', {class: 'col-xs-4 seat'}, [
      el('span', {class: 'seat-label'}, needLetter)
    ]);
  }
  return el('div', {class: 'col-xs-4 no-seat'}, '');
}


function deleteSeat(seat) {
  if (seat.classList.contains('adult')) {
    seat.classList.remove('adult');
    countPax--;
    countAdult--;
    totalPax.textContent = countPax;
    totalAdult.textContent = countAdult;
    } else if (seat.classList.contains('half')) {
      seat.classList.remove('half');
      countPax--;
      countHalf--;
      totalPax.textContent = countPax;
      totalHalf.textContent = countHalf;
    }
}

function addAdult(seat) {
  seat.classList.add('adult');
  countPax++;
  countAdult++;
  totalPax.textContent = countPax;
  totalAdult.textContent = countAdult;
}

function addHalf(seat) {
  seat.classList.add('half');
  countPax++;
  countHalf++;
  totalPax.textContent = countPax;
  totalHalf.textContent = countHalf;
}
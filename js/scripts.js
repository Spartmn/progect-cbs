function Calendar2(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr class="bg-style">',
    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }else{
      calendar += '<td>' + i;
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr class="bg-style">';
    }
  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#'+id+' tbody').innerHTML += '<tr class="bg-style"><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
}
Calendar2("calendar", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month)+1);
}


/*-Modal-Map-*/
var link_map = document.querySelector("#js-view-map");
var overlay = document.querySelector(".overlay");
var modal_map = document.querySelector(".modal-map");
var map_close = document.querySelector(".map-close");

link_map.addEventListener("click", function (ev) {
  ev.preventDefault();
  modal_map.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});


map_close.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (modal_map.classList.contains("modal-show"))
  {
    modal_map.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  }
});

overlay.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (modal_map.classList.contains("modal-show"))
  {
    modal_map.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  }
});

window.addEventListener("keydown", function (ev) {
  if (ev.keyCode === 27) {
    if (modal_map.classList.contains("modal-show"))
    {
      modal_map.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

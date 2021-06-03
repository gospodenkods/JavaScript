var items = document.getElementsByClassName('item'),
  recycle = document.getElementById('recycle'),
  infotext = document.getElementById('infotext'),
  summ = document.getElementsByClassName('summ'),
  del_button = document.getElementsByClassName('del_button')
//Функция добавления элемента в корзину
function addItem() {
  //скрываем кнопку купить
  infotext.style.display = 'none';
  //добавляем элементы в корзину
  let item_clone = this.parentElement.cloneNode(true);
  recycle.appendChild(item_clone)

  //Считаем общую сумму покупок
  let prices = recycle.getElementsByClassName('price')
  totalprice = 0;
  for (let j = 0; j < prices.length; j++) {
    totalprice = totalprice + Number(prices[j].innerHTML);
    //console.log('Элемент N', j + 1, 'Сумма:', totalprice); 
  }
  console.log('TOTAL PRICE', totalprice);
  summ[0].innerHTML = 'TOTAL PRICE ' + totalprice;
}

//Обработка нажатия на кнопку для добавления элемента в корзину
let item_button = document.getElementsByClassName('item_button');
for (var i = 0; i < item_button.length; i++) {
  item_button[i].onclick = addItem;
};
//Очистка корзины 
let buttonClear = document.getElementById('clear');
buttonClear.onclick = function() {
  //очистка начального текста корзины
  recycle.innerHTML = ''
  recycle.appendChild(infotext)
  infotext.style.display = 'block';
  //очистка блока с общей суммой покупок
  summ[0].innerText = '';
}

//Функция удаления элемента из корзины
function delItem() {
  this.parentElement.remove()
}

//Обработка нажания на кнопку для удаления элементы из корзины
for (var i = 0; i < del_button.length; i++) {
  del_button[i].setAttribute('onclick', 'delItem.call(this)');
}
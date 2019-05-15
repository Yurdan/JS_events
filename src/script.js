//!!!!!!!!!!!!!!!!!!!!!!!!
/* Я не смог пофиксить события клавиш браузера
мои клавиши Enter, Ctrl, Esc  */
//!!!!!!!!!!!!!!!!!!!!!!!!!!!


//function create HTML tag
const createHtmlTag = (tag) => {
    return document.createElement(tag);
}

// function insert Container To 
const insertContainerTo = (element, to) => {
    to.appendChild(element);
    return element;
}

// create divContainer
const divContainer = createHtmlTag('div');

//create textarea
const textArea = createHtmlTag('textarea');

// insert div in body;
insertContainerTo(divContainer, document.body);

//!!!!!!!!!!! как написать одну функцию вместо двух???????????!!!!!!!!!!!!

const changeCont = () => {
    document.body.replaceChild(textArea, divContainer);
}

const changeContBack = () => {
    document.body.replaceChild(divContainer, textArea);
}

// push Enter
document.addEventListener('keyup', (event) => {
if (event.keyCode == 13) {
    changeCont(event);    /* зачем писать в скобках event без него работает */
  }
})

//push CTRL
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 17) {
        divContainer.innerText = textArea.value;
        changeContBack(event);
      }
    })
//push Esc
document.addEventListener('keyup', (event) => {
        if (event.keyCode == 27) {
            changeContBack(event);
            textArea.value = '';
            divContainer.innerText = '';
          }
        })




































// function summ() {
//     var firstElement = document.getElementById('first');  /* так вытягиваем инфу из HTML  */
//     var secondElement = document.getElementById('second');
//     var resultElement = document.getElementById('result');
//     resultElement = 'Result: ' + ((+firstElement.value) + (+secondElement.value));
//     result.innerText = resultElement;

// }

// function sub() {
//     var firstElement = document.getElementById('first');
//     var secondElement = document.getElementById('second');
//     var resultElement = document.getElementById('result');
//     resultElement = 'Result: ' + ((+firstElement.value) - (+secondElement.value));
//     result.innerText = resultElement;
// }

// function mult() {
//     var firstElement = document.getElementById('first');
//     var secondElement = document.getElementById('second');
//     var resultElement = document.getElementById('result');
//     resultElement = 'Result: ' + ((+firstElement.value) * (+secondElement.value));
//     result.innerText = resultElement;
// }
// function reset() {



















// function hello() {
//     prompt('how are you?', 'i am fine');
//     let mood = 'welcome to our site';
//     document.write(mood);
// }
// ;(function () {
//     let a = 0;
//     while ( a < 3 ) { /* пока а < 3 будет идти проверка */
//     alert( a );
//     a++; 
// }
// }) ();

// ;(function () {
//     let a = 0;
//     do { /* пока а < 3 будет идти проверка */
//     alert( a );
//     a++; 
// }
// while ( a < 3 );
// }) ();

// let sum = 0;
// let value = 0;
// while (true) {
//     if (!value) break;
//     sum += value;
// }
// alert(sum);

// 
// var string = 'check it out';




// alert(string.substring(0)); // 'che'
// alert(string.substr(2, 6)); // 'che'

// alert(string.substring(1)); // 'heck it out'
// alert(string.substr(1)); // 'heck it out'

    // alert( null || 2 || undefined );
//  !!!!!!!!!!! first home work !!!!!!!!!!!  
/*  function enter() {
     let login;
     login = prompt('Login', '');
     if (login === 'админ') {
         function adminPass() {
         let pass = prompt('Пароль', '');
         if (pass === 'черный властелин') {
             alert('Добро пожаловать');
         } else if (pass == undefined) {
             alert('Вход отменен');
         } else {
              let yesNot = confirm('Патоль неверен \nХотите попробовать еще раз?');
              if (yesNot == true) {
                 adminPass();
              } else {
             alert('Досвидания');
             }
         }
     }
     adminPass();
     }
     else if (login == undefined) {
         alert('Вход отменен');
     }
     else {
         let yesOrNot = confirm('Патоль неверен \nХотите попробовать еще раз?');
         if (yesOrNot == true) {
             enter();
         }
         else {
             alert('Досвидания');
         }
     }
 }   */
    //!!!!!!!!!!!!!!!! first home work END !!!!!!!!!!!!!!!!! 







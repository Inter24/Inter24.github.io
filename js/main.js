
text.addEventListener('input', (event) => {
    
    event.preventDefault();    
    console.log(text.value);   
   
});

submit.addEventListener('click', (event) => {

    event.preventDefault();  
    var message = document.querySelector('#text').value;  
    alert('Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — ' + message);

});

submitprompt.addEventListener('click', (event) => {

    event.preventDefault();  
    const rubl = 78;     
    let dollar = prompt('Введите доллары:');     
    var result = rubl * dollar;
    alert(result);

});

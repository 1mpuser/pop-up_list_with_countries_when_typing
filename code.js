'use strict';
let countries = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"];
let search=document.getElementById('countriesSearch');
let listOfCountries=document.getElementById('listOfCountries');
search.addEventListener('keyup', searching);
let flagOfFilledInput=false;
let filledWord=-1;



function fixListCoordinates(){
    let khui=search.getBoundingClientRect();
    let leftPad=khui.left;
    let bottomPad=khui.bottom-2;
    listOfCountries.style.left=leftPad+pageXOffset +"px";
    listOfCountries.style.top=bottomPad+pageYOffset+"px";
}

function searching(){
    let arrOfSameLettersWords=[];
    if (search.value=='') { arrOfSameLettersWords=[];
        listOfCountries.style.cssText="display: none;"  
    }
    else if(search.value.trim()==filledWord){ arrOfSameLettersWords=[];
        listOfCountries.style.cssText="display: none;"  
    }
    else{
        let letters=search.value;
        let j=0;
        for (let i=0; i<countries.length;i++ ) if( isOneLettersInword(letters, countries[i])){
            arrOfSameLettersWords[j]=countries[i];
            j++;
        }
    }
    if (arrOfSameLettersWords.length==0){listOfCountries.style.cssText="display: none;"}
    else{
        
        let div=document.createElement('div');
        //div.addEventListener('click', changeFilledWord);
        listOfCountries.innerHTML=getComliteHtml(arrOfSameLettersWords);
        fixListCoordinates();
        listOfCountries.style.cssText+="display: block;"
        let arrofdivs=listOfCountries.querySelectorAll('div');
        for (let elem of arrofdivs) elem.addEventListener('click', changeFilledWord);
    }

}



function isOneLettersInword(letters, word){
    let secondLetters=letters.toLowerCase();
    let secondWord=word.toLowerCase();
    let letterLength=letters.length;
    if(letterLength>1){
    let arrOfLettersInWord=secondWord.split('');
    let tmpWord=arrOfLettersInWord[0];
    for (let i=1;i<letterLength;i++){
        tmpWord+=arrOfLettersInWord[i];
    }
    if (secondLetters==tmpWord) return true;
    else return false;}
    else{ if(secondWord.charAt(0)==secondLetters) return true;
    else return false;
    }
}


function changeFilledWord(){
    filledWord=this.innerText;
    search.value=this.innerText;
    listOfCountries.style.cssText="display: none;"  
    
}

function getComliteHtml(words) {
    let html = "";
    for (let i = 0; i < words.length; i++) {
        html += '<div>' + words[i] + '</div>';
    }
    return html;
}
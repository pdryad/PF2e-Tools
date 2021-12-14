
let currencies = [];

//let Dropdown = document.getElementById("currencyType")
//console.log(Dropdown);

$("#currencyType option").each(function () {
    let newCurrency = {
        name: $(this).text(),
        value: $(this).val()
    };

    currencies.push(newCurrency);
});

//for debug purposes, will show up in every page when you f12 and check console
/*console.log(currencies);*/


//function resizeInput() {
//    console.log($(this).val());



//    //$(this).attr('size', $(this).val().length);
//}

function calculateResult() {
    let Dropdown = document.getElementById("currencyType")
    let currencyName = Dropdown.options[Dropdown.selectedIndex].text;
    let currencyABV = Dropdown.options[Dropdown.selectedIndex].dataset.abv;
    let currencyValue = Dropdown.value;

    let IntoDropdown = document.getElementById("currencyTypeInto")
    let IntocurrencyName = IntoDropdown.options[IntoDropdown.selectedIndex].text;
    let IntocurrencyABV = IntoDropdown.options[IntoDropdown.selectedIndex].dataset.abv;
    let IntocurrencyValue = IntoDropdown.value;

    let coinCount = document.getElementById("coinCount");
    let currencyCount = coinCount.value;

    let Container = document.getElementById("currencyOutput")
    Container.innerHTML = "";

    let CurrencyDisplay = document.createElement('div');

 /*   let currentValue = currencies[i].value;*/

    let resultingValue = (currencyCount * currencyValue) / IntocurrencyValue;
    //Parsefloat sorcery Below to make the lines not look like trash
    CurrencyDisplay.innerText = Number(currencyCount) + " " + currencyName + " " + currencyABV + " is worth " + parseFloat(resultingValue.toString().match(/^-?\d+(?:.\d{0,5})?/)[0]) + " " + " of " + IntocurrencyName + " " + IntocurrencyABV;

    Container.appendChild(CurrencyDisplay);

    //for (var i = 0; i < currencies.length; i++) {
    //    if (currencies[i].name == currencyName) {
    //        continue;
    //    }

    //    let CurrencyDisplay = document.createElement('div');

    //    let currentValue = currencies[i].value; 

    //    let resultingValue = (currencyCount * currencyValue) / currentValue;

    //    CurrencyDisplay.innerText = "$" + Number(currencyCount) + " " + currencyName + " is worth $" + parseFloat(resultingValue.toString().match(/^-?\d+(?:.\d{0,5})?/)[0]) + " " + " of " + currencies[i].name;

    //    Container.appendChild(CurrencyDisplay);
    //}
}

function calculateConvert() {
    //retrieves both dropdown menus to convert from one to the other with the convert button
    let Dropdown = document.getElementById("currencyType")
    let IntoDropdown = document.getElementById("currencyTypeInto")
    //let creates and sets a variable
    let Convert = Dropdown.selectedIndex;
    let IntoConvert = IntoDropdown.selectedIndex;
    //flip-flops selected indexes
    Dropdown.selectedIndex = IntoConvert;
    IntoDropdown.selectedIndex = Convert;
    calculateResult();
}

//below is listeners so the site responds to changes in menu

$('input[type="number"]').keyup(calculateResult);
$('#currencyType').change(calculateResult);
$('#currencyTypeInto').change(calculateResult);
$('#convertButton').click(calculateConvert);

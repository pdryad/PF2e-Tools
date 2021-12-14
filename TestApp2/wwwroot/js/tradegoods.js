//called everytime selectedTradegood is changed. args = arguments. gives data on what the event will do?
function FetchData(args) {
    /*    console.log(args);*/
    console.log($('#selectedTradegood').val());
}

//event listeners
//#region "Event Listeners"
//.change will only activate when the variable changes to something new (ex: selectedTradegood is a variable)
//FetchData is the function that will be called by the event .change
$('#selectedTradegood').change(FetchData);
//#endregion

FetchData();

//called everytime selectedTradegood is changed. args = arguments. gives data on what the event will do?
function FetchData(args) {
    /*    console.log(args);*/
    console.log($('#selectedTradegood').val());

    //ajax communicates with the backend after page is loaded
    $.ajax({
        url: '/Home/RetrieveTradeGood?ID=' + $('#selectedTradegood').val(),
        type: 'POST',
        //the below gets fired anytime the ajax pull is successful
        success: function (result) {
            console.log(result);
            //all these outputs is for displaying lines from the SQL table for trade goods.
            //connects to tradegoodstable.cshtml div elements near bottom
            //result.text is specifically calling how it's spelled(case sensitive!) in the database's table. It automatically lowercases the first word.
            $('#culturalOutput').text('Cultural Value: ' + result.culturalValue);
            $('#descriptionOutput').text('Description: ' + result.description);
        },
        error: function (error) {
            console.log("ERROR AND SCREAMING!");
        }
    });
}

//event listeners
//#region "Event Listeners"
//.change will only activate when the variable changes to something new (ex: selectedTradegood is a variable)
//FetchData is the function that will be called by the event .change
$('#selectedTradegood').change(FetchData);
//#endregion

/*Dark Sorcery, shove in to json to sql, sql inject, allows to drop data in to SQLdatabases. set the categoryid number based on what table it came from.*/
let rawJSON = [
    [1, "Dirt Farmer", 2, "Poultryman", 3, "Pig Farmer", 4, "Sheep Farmer", 5, "Cow Farmer"],
    [6, "Shoeshiner", 7, "Milkmaid", 8, "Lamp Lighter", 9, "Panhandler", 10, "Hauler"],
    [11, "Farmhand", 12, "Horse Farmer", 13, "Ditcher", 14, "Water Fetcher", 15, "Forager"],
    [16, "Pearler", 17, "Muckscraper", 18, "Scrubber", 19, "Street Sweeper", 20, "Launderer"],
    [21, "Salt Miner", 22, "Quarry Miner", 23, "Coal Miner", 24, "Ore Miner", 25, "Precious Miner"],
    [26, "Animal Caretaker", 27, "Nanny", 28, "Servant", 29, "Slave", 30, "Royal Slave"],
    [31, "Gravedigger", 32, "Gravewatcher", 33, "Ferryman", 34, "Miller", 35, "Clay Miner"],
    [36, "Fisherman", 37, "Clamdigger", 38, "Netter", 39, "Shiphand", 40, "Cereal Farmer"],
    [41, "Fruit Farmer", 42, "Root Farmer", 43, "Mushroom Harvester", 44, "Lumberjack", 45, "Hunter"],
    [46, "Wood Gatherer", 47, "Critic", 48, "Harlot", 49, "Bather", 50, "Trapper"],
    [51, "Rat Catcher", 52, "Apprentice(Other Table)", 53, "Manure Shoveler", 54, "Chimney Sweep", 55, "Midwife"],
    [56, "Porter", 57, "Honey Gatherer", 58, "Fish Cleaner", 59, "Town Idiot", 60, "Channel Digger"],
    [61, "Stablehand", 62, "Rag-And-Bone Man", 63, "Brick Layer", 64, "Reeve", 65, "Seaweed Harvester"],
    [66, "Guide", 67, "Scullion", 68, "Drayman", 69, "Serf", 70, "Barbarian"],
    [71, "Roofer", 72, "Toiletry Attendant", 73, "Corpse Hauler", 74, "Churner", 75, "Thresher"],
    [76, "Miller", 77, "Food Taster", 78, "Waiter/Waitress", 79, "Busker", 80, "Smoker"],
    [81, "Tobacco Farmer", 82, "Sign Spinner", 83, "Skald", 84, "Culler", 85, "Town Crier"]
];

let processedJSON = [];

for (var i = 0; i < rawJSON.length; i++)
{
    for (var j = 0; j < rawJSON[i].length; j++)
    {
        if (isNaN(Number.parseInt(rawJSON[i][j]))) {

            let object = {
                jobtitle: rawJSON[i][j],
                categoryid: 0 
            }
            processedJSON.push(object);
            /*console.log(rawJSON[i][j]);*/
        }
    }
}

console.log(JSON.stringify(processedJSON));



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
function printRandomItem() {

    var listItems = ['putter', 'driver', 'mid']
    var randomIndex = Math.floor(Math.random() * listItems.length);
    var randomDiscType = listItems[randomIndex];

    var listItems = document.getElementById('throwList').getElementsByTagName('li');
    var randomIndex = Math.floor(Math.random() * listItems.length);
    var randomThrowType = listItems[randomIndex].textContent;

    document.getElementById('randomDiscDisplay').innerText = "Disc Type: " + randomDiscType;
    document.getElementById('randomThrowDisplay').innerText = "Throw Type: " + randomThrowType;
}
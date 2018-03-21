//zmienne do komunikacji z serwerem
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2918',
  'X-Auth-Token': 'fbfbda0d4ed5bff4a656e3208c094197'
};

$.ajaxSetup({
	headers: myHeaders
});

//funkcja odpytujaca serwer o zasob tablicy
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

//tworzenie kolumn
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

//tworzenie kart
function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	  col.createCard(cardObj);
  	})
}

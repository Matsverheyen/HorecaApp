var fris = 0;
var wijn = 0;
var bier = 0;
var bitterballen = 0;
var aantal = 0;
var frisPrice = 0;
var wijnPrice = 0;
var bierPrice = 0;
var bitterballenPrice = 0;
var totalprice = 0;
const BIERPRIJS = 3.50;
const WIJNPRIJS = 3.50;
const FRISPRIJS = 2.00;
const BITTERBALLENPRIJS = 0.35;
var x = 0;

orderDrink();

function orderDrink() {
  var order = window.prompt('Welke bestelling wilt u toevoegen?', 'Fris | Bier | Wijn | Bitterballen').toLocaleLowerCase();
  switch (order) {
    case 'fris':
      x = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
      fris += parseInt(x);
      if (window.confirm('Wil je nog iets bestellen?')) {
        orderDrink();
      } else {
        receipt();
      }
      break;

    case 'bier':
      x1 = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
      bier += parseInt(x1);
      if (window.confirm('Wil je nog iets bestellen?')) {
        orderDrink();
      } else {
        receipt();
      }
      break;

    case 'wijn':
      x2 = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
      wijn += parseInt(x2);
      if (window.confirm('Wil je nog iets bestellen?')) {
        orderDrink();
      } else {
        receipt();
      }
      break;

    case 'bitterballen':
      x3 = window.prompt(`Hoeveel ${order} wilt u bestellen?`, '8 | 16');
      if (x3 == 8) {
        aantal += 8;
        bitterballen += parseInt(aantal);
        if (window.confirm('Wil je nog iets bestellen?')) {
          orderDrink();
        } else {
          receipt();
        }
      } else if (x3 == 16) {
        aantal += 16;
        bitterballen += parseInt(aantal);
        if (window.confirm('Wil je nog iets bestellen?')) {
          orderDrink();
        } else {
          receipt();
        }
      } else {
        window.alert('Geen geldige keuze!');
        orderDrink();
      }
      break;
    default:
      window.alert('Geen geldige keuze!');
      orderDrink();
      break;
  }
}

function receipt() {
  var total = fris + bier + wijn + bitterballen;
  var bierPrice = bier * BIERPRIJS;
  var wijnPrice = wijn * WIJNPRIJS;
  var FRISPRIJS = fris * FRISPRIJS;
  var bitterballenPrice = bitterballen * BITTERBALLENPRIJS;
  var totalPrice = bitterballenPrice + wijnPrice + bierPrice;
  $(document).ready(function () {
    var ul = $('#list').val();
    if (bier != 0) {
      $('#list').append('<li>Aantal besteld: ' + bier + '  Bier: €' + bierPrice.toFixed(2) + '</li>');
    }
    if (wijn != 0) {
      $('#list').append('<li>Aantal besteld: ' + wijn + '  Wijn: €' + wijnPrice.toFixed(2) + '</li>');
    }
    if (fris != 0) {
      $('#list').append('<li>Aantal besteld: ' + fris + '  Fris: €' + frisPrice.toFixed(2) + '</li>');
    }
    if (bitterballen != 0) {
      $('#list').append('<li>Aantal besteld: ' + bitterballen + '  Bitterballen: €' + bitterballenPrice.toFixed(2) + '</li>');
    }
    $('#list').append('<li>Aantal besteld: ' + total + '  Totaal: €' + totalPrice.toFixed(2) + '</li>');
  });
}
var fris = 0;
var wijn = 0;
var bier = 0;
var bitterballen = 0;
var aantal = 0;

function orderDrink() {
  var order = window.prompt('Welke bestelling wilt u toevoegen?', 'Fris | Bier | Wijn | Bitterballen | stop').toLocaleLowerCase();
  switch (order) {
    case 'fris':
      x = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
      fris += parseInt(x);
      orderDrink();
      break;
    case 'bier':
      x1 = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
      bier += parseInt(x1);
      orderDrink();
      break;
    case 'wijn':
      x2 = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
      wijn += parseInt(x2);
      orderDrink();
      break;
    case 'bitterballen':
      x3 = window.prompt(`Hoeveel ${order} wilt u bestellen?`, '8 | 16');
      if (x3 == 8) {
        aantal += 8;
        orderDrink();
      } else if (x3 == 16) {
        aantal += 16;
        bitterballen += parseInt(aantal);
        orderDrink();
      } else {
        window.alert('Geen geldige keuze!');
        orderDrink();
      }
      break;
    case 'stop':
      receipt();
      break;
    default:
      window.alert('Geen geldige keuze!');
      orderDrink();
      break;
  }
}

function receipt() {
  const BIERPRIJS = 3.50;
  const WIJNPRIJS = 3.50;
  const FRISPRIJS = 2.00;
  const BITTERBALLENPRIJS = 0.35;
  var total = fris + bier + wijn + bitterballen;
  var bierPrice = bier * BIERPRIJS;
  var wijnPrice = wijn * WIJNPRIJS;
  var frisPrice = fris * FRISPRIJS;
  var bitterballenPrice = bitterballen * BITTERBALLENPRIJS;
  var totalPrice = bitterballenPrice + wijnPrice + bierPrice + frisPrice;
  $(document).ready(function () {
    if (bier != 0) {
      $('#list').append('<li>' + bier + ' Bier: €' + bierPrice.toFixed(2) + '</li>');
    }
    if (wijn != 0) {
      $('#list').append('<li>' + wijn + ' Wijn: €' + wijnPrice.toFixed(2) + '</li>');
    }
    if (fris != 0) {
      $('#list').append('<li>' + fris + '  Fris: €' + frisPrice.toFixed(2) + '</li>');
    }
    if (bitterballen != 0) {
      $('#list').append('<li>' + bitterballen + '  Bitterballen: €' + bitterballenPrice.toFixed(2) + '</li>');
    }
    $('#list').append('<li>' + total + '  Totaal: €' + totalPrice.toFixed(2) + '</li>');
  });
}
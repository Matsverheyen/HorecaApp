var fris = 0;
var wijn = 0;
var bier = 0;
var x = 0;

orderDrink();

function orderDrink() {
  var order = window.prompt('Welke bestelling wilt u toevoegen?', 'Fris | Bier | Wijn').toLocaleLowerCase();
  switch (order) {
    case 'fris':
      x = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
      var y = parseInt(x);
      fris += x;
      if (window.confirm('Wil je nog iets bestellen?')) {
          orderDrink();
        } else {
          receipt();
        }
        break;

        case 'bier':
        x1 = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
        var y1 = parseInt(x1);
        bier += x1;
        console.log(bier);
        if (window.confirm('Wil je nog iets bestellen?')) {
            orderDrink();
          } else {
            receipt();
          }
          break;

          case 'wijn':
          x2 = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
          var y2 = parseInt(x2);
          wijn += x2;
          console.log(wijn);
          if (window.confirm('Wil je nog iets bestellen?')) {
              orderDrink();
            } else {
              receipt();
            }
            break;

            default:
            window.alert('Geen geldige keuze!'); orderDrink();
            break;
          }
        }

        function receipt() {
          var total = fris + bier + wijn;
          $(document).ready(function () {
            $('#fris').text('Fris: ' + fris);
            $('#bier').text('Bier: ' + bier);
            $('#wijn').text('Wijn: ' + wijn);
            $('#total').text('Totaal: ' + total);
            });
          }

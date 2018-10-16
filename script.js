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
        console.log(bier);
        if (window.confirm('Wil je nog iets bestellen?')) {
            orderDrink();
          } else {
            receipt();
          }
          break;

          case 'wijn':
          x2 = window.prompt(`Hoeveel ${order} wilt u bestellen?`);
          wijn += parseInt(x2);
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
            $('#fris').text('Fris: €' + fris.toFixed(2));
            $('#bier').text('Bier: €' + bier.toFixed(2));
            $('#wijn').text('Wijn: €' + wijn.toFixed(2));
            $('#total').text('Totaal: €' + total.toFixed(2));
            });
          }

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
            var ul = $('#list').val();
            if (bier != 0) {
              $('#list').append('<li>Bier: €' + bier.toFixed(2) + '</li>');
            }
            if (wijn != 0) {
              $('#list').append('<li>Wijn: €' + wijn.toFixed(2) + '</li>');
            }
            if (fris != 0) {
              $('#list').append('<li>Fris: €' + fris.toFixed(2) + '</li>');
            }
            $('#list').append('<li>Totaal: €' + total.toFixed(2) + '</li>');
            });
          }

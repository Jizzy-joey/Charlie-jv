const weather = `crazy`

switch (weather) {
    case `normal`:
    alert('The weather is normal today. Enjoy the weather');
  case 'rainy':
    alert('Take an umbrella!');
    break;
  case 'sunny':
    alert('Wear sunglasses and hat!');
    break;
  case 'cloudy':
    alert('A light jacket might be needed.');
    break;
  case 'snowy':
    alert('Wear a warm coat and boots!');
    break;
  case 'windy':
    alert('Hold onto your hat!');
    break;
  default:
    alert('Weather condition not recognized. Be prepared for anything!');
    break;}
function load(category) {
  const photos = {
    'the-laws-of-photography': [
      '20230830_0707.jpg',
      '20231001-0349.jpg',
      '20231001-0580.jpg',
      '20231001-0981.jpg',
      '20231004-0314.jpg',
      '20231005-0533.jpg',
      '20231006-0145.jpg',
      '20231007-0165.jpg',
      '20231007-0381.jpg',
      '20231009-0092.jpg',
      '20231009-0311.jpg',
      '20231009-0507.jpg',
      '20231009-0903.jpg',
      '20231010-0199.jpg',
      '20231010-0259.jpg',
      '20231011-0013-2.jpg',
      '20231011-0013.jpg',
      '20231011-0209.jpg',
      '20231020-0065.jpg',
      '20231020-0333.jpg',
      '20231020-0346.jpg',
      '20231020-0809.jpg',
      '20231023-0049.jpg',
      '20231023-0727.jpg',
      '20231023-0753.jpg',
      '20231105-1284.jpg',
      '20231020-0930.jpg',
    ],
    'mostly-things': [
      '20231004-0164.jpg',
      '20231009-0339.jpg',
      '20231027-0470.jpg',
      '20231102-0011.jpg',
      '20231102-0018.jpg',
      '20231102-0143.jpg',
      '20231104-0058.jpg',
      '20231104-0060.jpg',
      '20231105-0462.jpg',
      '20231105-0635.jpg',
      '20231107-0057.jpg',
      '20231109-0001.jpg',
      '20231109-0137.jpg',
      '20231110-0142-2.jpg',
      '20231110-0142.jpg',
      '20231110-0163-Edit.jpg',
      '20231110-0212.jpg',
    ],
    'things-question-mark': [
      '20231002-0947.jpg',
      '20231109-0230.jpg',
      '20231020-0932.jpg',
      '20231023-0746.jpg',
    ],
  };

  document.body.onload = () => {
    const photosContainer = document.querySelector('.photos');
    const availableHeight = window.innerHeight;
    photos[category].sort(() => .5 - Math.random()).forEach(p => {
      const container = document.createElement('div');
      container.className = 'image-container';

      const img = document.createElement('img');
      img.src = 'photos/' + p;
      img.style.maxHeight = 'calc(' + availableHeight + 'px - 10em)';

      container.appendChild(img);
      photosContainer.appendChild(container);
    });
  };

  window.onresize = () => {
    const availableHeight = window.innerHeight;
    document.querySelectorAll('img').forEach(img => {
      img.style.maxHeight = 'calc(' + availableHeight + 'px - 10em)';
    });
  };
}

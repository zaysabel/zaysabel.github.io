function load(category) {
  const photos = {
    'people': [
      '20231020-0809.jpg',
      '20231023-0049.jpg',
      '20231105-1284.jpg',
      '20231023-0727.jpg',
      '20231010-0199.jpg',
      '20231001-0580.jpg',
      '20231001-0349.jpg',
      '20231005-0533.jpg',
      '20231007-0381.jpg',
      '20231009-0903.jpg',
      '20231009-0311.jpg',
      '20231011-0013.jpg',
      '20231020-0065.jpg',
      '20231023-0753.jpg',
      '20231020-0930.jpg',
    ],
    'street': [
      '20231110-0163-Edit.jpg',
      '20231104-0060.jpg',
      '20231009-0092.jpg',
      '20231020-0346.jpg',
      '20231009-0507.jpg',
      '20231006-0145.jpg',
      '20231004-0314.jpg',
      '20231020-0932.jpg',
      '20231023-0746.jpg',
      '20231010-0259.jpg',
      '20231020-0333.jpg',
      '20231102-0011.jpg',
      '20231105-0462.jpg',
      '20231105-0635.jpg',
    ],
    'structures': [
      '20231104-0058.jpg',
      '20231109-0001.jpg',
      '20231110-0212.jpg',
      '20231110-0142-2.jpg',
      '20231110-0142.jpg',
      '20231009-0339.jpg',
      '20231004-0164.jpg',
      '20231002-0947.jpg',
      '20231109-0230.jpg',
      '20231102-0143.jpg',
      '20231102-0018.jpg',
      '20231109-0137.jpg',
      '20231027-0470.jpg',
    ],
  };
  document.body.onload = () => {
    const photosContainer = document.querySelector('.photos');
    photosContainer.innerHTML = `<svg class="loader" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#d1d1d1" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>`;

    let photosLeftToLoad = photos[category].length - 1;
    photos[category].forEach(p => {
      const container = document.createElement('div');
      container.className = 'image-container';

      const img = document.createElement('img');
      img.src = 'photos/' + p;
      img.style.maxHeight = 'calc(' + window.innerHeight + 'px - 10em)';

      img.onload = () => {
        container.innerHTML = '';
        container.appendChild(img);
        photosLeftToLoad--;

        if (photosLeftToLoad === 0) {
          document.querySelector('.loader').remove();
        }
      };
      photosContainer.appendChild(container);
    });
  };

  window.onresize = () => {
    document.querySelectorAll('img').forEach(img => {
      img.style.maxHeight = 'calc(' + window.innerHeight + 'px - 10em)';
    });
  };
}

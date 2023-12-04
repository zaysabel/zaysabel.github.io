function load(category) {
  const photos = {
    'people': [
      '20231117-0454.jpg',
      '20231023-0727.jpg',
      '20231201-0670.jpg',
      '20231020-0809.jpg',
      '20231201-0831.jpg',
      '20231005-0533.jpg',
      '20231122-0285.jpg',
      '20231121-0349.jpg',
      '20231023-0049.jpg',
      '20231105-1284.jpg',
      '20231001-0580.jpg',
    ],
    'street': [
      '20231125-0414.jpg',
      '20231006-0145.jpg',
      '20231110-0163-Edit.jpg',
      '20231104-0060.jpg',
      '20231009-0092.jpg',
      '20231004-0314.jpg',
      '20231010-0259.jpg',
      '20231102-0011.jpg',
      '20231121-0193.jpg',
    ],
    'structures': [
      '20231104-0058.jpg',
      '20231117-0059.jpg',
      '20231109-0001.jpg',
      '20231110-0212.jpg',
      '20231110-0142.jpg',
      '20231004-0164.jpg',
      '20231102-0143.jpg',
      '20231102-0018.jpg',
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

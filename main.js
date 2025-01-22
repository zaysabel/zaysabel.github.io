function load(category) {
  const photos = {
    'people': [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
    ],
  };
  document.body.onload = () => {
    const photosContainer = document.querySelector('.photos');
    photosContainer.innerHTML = `<svg class="loader" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#d1d1d1" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>`;

    const photosToShow = photos[category].slice()
      .map(value => ({
        value,
        sort: Math.random()
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({
        value
      }) => value);

    let photosLeftToLoad = photosToShow.length - 1;

    photosToShow.forEach(p => {
      const container = document.createElement('div');
      container.className = 'image-container';

      const img = document.createElement('img');
      img.src = 'photos/' + p;
      img.style.maxHeight = 'calc(' + window.innerHeight + 'px - 10em)';

      const loaded = () => {
        container.innerHTML = '';
        photosLeftToLoad--;

        if (photosLeftToLoad === 0) {
          document.querySelector('.loader').remove();
        }
      }

      img.onload = () => {
        loaded();
        container.appendChild(img);
      };
      img.onerror = () => {
        loaded();
        if (window.location.href.includes('localhost')) {
          alert('Broken image ' + img.src);
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

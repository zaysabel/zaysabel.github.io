function load(category) {
  const photos = {
    'people': [
      '20231023-0049-Edit.jpg',
      '20231105-1284.jpg',
      '20231125-0414.jpg',
      '20231214-0091.jpg',
      '20231214-0177.jpg',
      '20240119-0255.jpg',
      '20240125-0396-Edit.jpg',
      '20240201-0246.jpg',
      '20240201-0326.jpg',
      '20240212-0233.jpg',
      '20240227-0011-Edit-Edit.jpg',
      '20240320-0669.jpg',
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

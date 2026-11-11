const videos = document.querySelectorAll('video');
videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(other => {
      if (other !== video && !other.paused) other.pause();
    });
  });
});

const lightbox = document.querySelector('.lightbox');
if (typeof lightbox.showModal === 'function') {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');
  document.querySelectorAll('[data-photo]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const description = link.querySelector('img').alt;
      image.src = link.href;
      image.alt = description;
      caption.textContent = description;
      lightbox.showModal();
    });
  });
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
}

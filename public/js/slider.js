(function () {
  function init(item) {
    const items = item.querySelectorAll('li');
    let current = 0;
    let autoUpdate = true;
    const timeTrans = 4000;

    // create nav
    const nav = document.createElement('nav');
    nav.className = 'nav_arrows';

    // create button prev
    const prevbtn = document.createElement('button');
    prevbtn.className = 'prev';
    prevbtn.setAttribute('aria-label', 'Prev');

    // create button next
    const nextbtn = document.createElement('button');
    nextbtn.className = 'next';
    nextbtn.setAttribute('aria-label', 'Next');

    // create counter
    const counter = document.createElement('div');
    counter.className = 'counter';
    counter.innerHTML = `<span>1</span><span>${items.length}</span>`;

    if (items.length > 1) {
      nav.appendChild(prevbtn);
      nav.appendChild(counter);
      nav.appendChild(nextbtn);
      item.appendChild(nav);
    }

    items[current].className = 'current';
    if (items.length > 1) items[items.length - 1].className = 'prev_slide';

    const navigate = function (dir) {
      items[current].className = '';

      if (dir === 'right') {
        current = current < items.length - 1 ? current + 1 : 0;
      } else {
        current = current > 0 ? current - 1 : items.length - 1;
      }

      const	nextCurrent = current < items.length - 1 ? current + 1 : 0;
      const prevCurrent = current > 0 ? current - 1 : items.length - 1;

      items[current].className = 'current';
      items[prevCurrent].className = 'prev_slide';
      items[nextCurrent].className = '';

      // update counter
      counter.firstChild.textContent = current + 1;
    };

    item.addEventListener('mouseenter', () => {
      autoUpdate = false;
    });

    item.addEventListener('mouseleave', () => {
      autoUpdate = true;
    });

    setInterval(() => {
      if (autoUpdate) navigate('right');
    }, timeTrans);

    prevbtn.addEventListener('click', () => {
      navigate('left');
    });

    nextbtn.addEventListener('click', () => {
      navigate('right');
    });

    // keyboard navigation
    document.addEventListener('keydown', (ev) => {
      const keyCode = ev.keyCode || ev.which;
      switch (keyCode) {
        case 37:
          navigate('left');
          break;
        case 39:
          navigate('right');
          break;
      }
    });

    // swipe navigation
    // from http://stackoverflow.com/a/23230280
    item.addEventListener('touchstart', handleTouchStart, false);
    item.addEventListener('touchmove', handleTouchMove, false);
    let xDown = null;
    let yDown = null;
    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    }
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;

      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) { /* most significant */
        if (xDiff > 0) {
          /* left swipe */
          navigate('right');
        } else {
          navigate('left');
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
  }

  [].slice.call(document.querySelectorAll('.cd-slider')).forEach((item) => {
    init(item);
  });
}());

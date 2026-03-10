// DovbushHub - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate burger lines
      const lines = burgerMenu.querySelectorAll('.burger-line');
      lines[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(8px)' : '';
      lines[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
      lines[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-8px)' : '';
    });
  }

  // Initialize all sliders
  const sliders = document.querySelectorAll('.section-slider');
  
  sliders.forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    const cards = slider.querySelectorAll('.post-card');
    
    if (!track || cards.length === 0) return;
    
    let currentPosition = 0;
    const cardWidth = cards[0].offsetWidth + 32; // card width + gap
    const visibleCards = Math.floor(slider.offsetWidth / cardWidth);
    const maxPosition = -(cards.length - visibleCards) * cardWidth;
    
    function updateButtons() {
      if (prevBtn && nextBtn) {
        prevBtn.disabled = currentPosition === 0;
        nextBtn.disabled = currentPosition <= maxPosition;
        prevBtn.style.opacity = currentPosition === 0 ? '0.3' : '1';
        nextBtn.style.opacity = currentPosition <= maxPosition ? '0.3' : '1';
      }
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentPosition < 0) {
          currentPosition += cardWidth;
          track.style.transform = `translateX(${currentPosition}px)`;
          updateButtons();
        }
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentPosition > maxPosition) {
          currentPosition -= cardWidth;
          track.style.transform = `translateX(${currentPosition}px)`;
          updateButtons();
        }
      });
    }
    
    updateButtons();
    
    // Touch swipe для мобільних
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentPosition > maxPosition) {
          currentPosition -= cardWidth;
        } else if (diff < 0 && currentPosition < 0) {
          currentPosition += cardWidth;
        }
        track.style.transform = `translateX(${currentPosition}px)`;
        updateButtons();
      }
    }, { passive: true });
    
    // Recalculate on window resize
    window.addEventListener('resize', () => {
      currentPosition = 0;
      track.style.transform = `translateX(0)`;
      updateButtons();
    });
  });

  // Popular Posts Vertical Slider
  const popularSection = document.querySelector('.popular-posts');
  if (popularSection) {
    const list = popularSection.querySelector('.popular-list');
    const upBtn = popularSection.querySelector('.popular-btn.up');
    const downBtn = popularSection.querySelector('.popular-btn.down');
    const items = popularSection.querySelectorAll('.latest-item');
    
    if (list && items.length > 0) {
      let currentPos = 0;
      const itemHeight = items[0].offsetHeight + 24; // height + gap
      const maxPos = -(items.length - 3) * itemHeight;
      
      function updatePopularButtons() {
        if (upBtn && downBtn) {
          upBtn.disabled = currentPos === 0;
          downBtn.disabled = currentPos <= maxPos;
          upBtn.style.opacity = currentPos === 0 ? '0.3' : '1';
          downBtn.style.opacity = currentPos <= maxPos ? '0.3' : '1';
        }
      }
      
      if (upBtn) {
        upBtn.addEventListener('click', () => {
          if (currentPos < 0) {
            currentPos += itemHeight;
            list.style.transform = `translateY(${currentPos}px)`;
            updatePopularButtons();
          }
        });
      }
      
      if (downBtn) {
        downBtn.addEventListener('click', () => {
          if (currentPos > maxPos) {
            currentPos -= itemHeight;
            list.style.transform = `translateY(${currentPos}px)`;
            updatePopularButtons();
          }
        });
      }
      
      updatePopularButtons();
    }
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Fade In Animation on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all post cards and latest items (except posts-list and popular-posts)
  document.querySelectorAll('.post-card, .latest-item, .section-slider').forEach(el => {
    // Не анімуємо елементи в posts-list та popular-posts — там анімація глючить
    if (el.closest('.posts-list') || el.closest('.popular-posts')) return;
    observer.observe(el);
  });

  // Share Buttons Functionality
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const platform = this.classList[1];
      const url = window.location.href;
      const title = document.querySelector('h1')?.textContent || 'DovbushHub';
      
      let shareUrl = '';
      
      switch(platform) {
        case 'telegram':
          shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case 'twitter':
          shareUrl = `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });

  // Active Navigation Highlight
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.classList.add('active');
    }
  });

  // Keyboard Navigation for Sliders
  document.addEventListener('keydown', (e) => {
    const focusedSlider = document.querySelector('.section-slider:focus-within');
    if (focusedSlider) {
      const prevBtn = focusedSlider.querySelector('.slider-btn.prev');
      const nextBtn = focusedSlider.querySelector('.slider-btn.next');
      
      if (e.key === 'ArrowLeft' && prevBtn) {
        prevBtn.click();
      } else if (e.key === 'ArrowRight' && nextBtn) {
        nextBtn.click();
      }
    }
  });

  // Lazy Loading Images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Reading Progress Bar (for post pages)
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // Click outside to close mobile menu
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        
        const lines = burgerMenu.querySelectorAll('.burger-line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '1';
        lines[2].style.transform = '';
      }
    }
  });
// ════════════════════════════════════
  // IMAGE LIGHTBOX з навігацією
  // ════════════════════════════════════
  const postBody = document.querySelector('.post-body');
  if (postBody) {
    const allImgs = Array.from(postBody.querySelectorAll('img'));
    if (allImgs.length === 0) return;

    let currentIndex = 0;

    // Будуємо HTML lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
      <button class="lb-close" aria-label="Закрити">✕</button>
      <button class="lb-prev" aria-label="Попереднє фото">&#8592;</button>
      <div class="lb-img-wrap">
        <img class="lb-img" src="" alt="">
      </div>
      <button class="lb-next" aria-label="Наступне фото">&#8594;</button>
      <div class="lb-counter"></div>
    `;
    document.body.appendChild(lightbox);

    const lbImg     = lightbox.querySelector('.lb-img');
    const lbCounter = lightbox.querySelector('.lb-counter');
    const lbPrev    = lightbox.querySelector('.lb-prev');
    const lbNext    = lightbox.querySelector('.lb-next');
    const lbClose   = lightbox.querySelector('.lb-close');

    function openLightbox(index) {
      currentIndex = index;
      const src = allImgs[currentIndex].src || allImgs[currentIndex].dataset.src;
      lbImg.src = src;
      lbImg.alt = allImgs[currentIndex].alt || '';
      // Скидаємо розміри щоб CSS міг взяти контроль
      lbImg.removeAttribute('width');
      lbImg.removeAttribute('height');
      lbImg.style.width  = '';
      lbImg.style.height = '';
      lbCounter.textContent = `${currentIndex + 1} / ${allImgs.length}`;
      lbPrev.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
      lbNext.style.visibility = currentIndex === allImgs.length - 1 ? 'hidden' : 'visible';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      // Невелика затримка перед очисткою щоб transition відпрацював
      setTimeout(() => { lbImg.src = ''; }, 300);
    }

    function goPrev() { if (currentIndex > 0) openLightbox(currentIndex - 1); }
    function goNext() { if (currentIndex < allImgs.length - 1) openLightbox(currentIndex + 1); }

    // Відкриття по кліку на фото
    allImgs.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(i); });
    });

    // Кнопки
    lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
    lbPrev.addEventListener('click',  (e) => { e.stopPropagation(); goPrev(); });
    lbNext.addEventListener('click',  (e) => { e.stopPropagation(); goNext(); });

    // Клік на фон — закрити
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lb-img-wrap')) closeLightbox();
    });

    // Клавіатура
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'ArrowRight') goNext();
    });

    // Swipe на мобільних
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    lightbox.addEventListener('touchend',    (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); }
    }, { passive: true });
  }
  // Scroll to Top Button
  const scrollTopBtn = document.querySelector('.scroll-to-top');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  // Search Functionality
  const searchBtn = document.querySelector('.search-btn');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('.search-input');
  const searchClose = document.querySelector('.search-close');
  const searchResults = document.querySelector('.search-results');
  
  if (searchBtn && searchOverlay) {
    // Відкрити пошук
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput.focus(), 300);
    });
    
    // Закрити пошук
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
      searchResults.innerHTML = '';
    });
    
    // Закрити при кліку поза вікном
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
      }
    });
    
    // Кеш постів — завантажуємо один раз
    let postsCache = null;
    async function getPosts() {
      if (postsCache) return postsCache;
      const r = await fetch('/search.json');
      postsCache = await r.json();
      return postsCache;
    }

    // Розумний скоринг: кожне слово запиту перевіряється окремо
    // Підтримує: "укр ігри" → знайде "Українські ігри", часткові збіги (перші 3 символи)
    function scorePost(post, words) {
      const title   = (post.title    || '').toLowerCase();
      const excerpt = (post.excerpt  || '').toLowerCase();
      const cat     = (post.category || '').toLowerCase();
      const tags    = (post.tags     || []).join(' ').toLowerCase();
      let score = 0;

      words.forEach(word => {
        if (title.includes(word)) {
          score += 10;
        } else if (word.length >= 3) {
          // Частковий збіг по першим символам — ловимо скорочення і опечатки
          const prefix = word.slice(0, 3);
          if (title.split(/\s+/).some(t => t.startsWith(prefix))) score += 4;
        }
        if (excerpt.includes(word)) score += 3;
        if (cat.includes(word))     score += 2;
        if (tags.includes(word))    score += 2;
      });

      // Бонус: всі слова є в заголовку → точний збіг фрази
      if (words.every(w => title.includes(w))) score += 5;

      return score;
    }

    // Debounce щоб не смикати fetch на кожну літеру
    let searchTimer = null;

    searchInput.addEventListener('input', function() {
      const raw = this.value.trim();
      clearTimeout(searchTimer);

      if (raw.length < 2) {
        searchResults.innerHTML = '';
        return;
      }

      searchTimer = setTimeout(async () => {
        try {
          const posts = await getPosts();
          const words = raw.toLowerCase().split(/\s+/).filter(Boolean);

          const scored = posts
            .map(post => ({ post, score: scorePost(post, words) }))
            .filter(({ score }) => score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 8)
            .map(({ post }) => post);

          displayResults(scored, raw);
        } catch (e) {
          searchResults.innerHTML = '<div class="search-no-results">Помилка пошуку</div>';
        }
      }, 180);
    });

    function displayResults(posts, query) {
      if (posts.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">Нічого не знайдено</div>';
        return;
      }

      const html = posts.map(post => `
        <a href="${post.url}" class="search-result-item">
          <div class="search-result-title">${highlightText(post.title, query)}</div>
          <div class="search-result-excerpt">${highlightText(post.excerpt, query)}</div>
        </a>
      `).join('');

      searchResults.innerHTML = html;
    }

    function highlightText(text, query) {
      // Підсвічуємо кожне слово окремо
      const words = query.trim().split(/\s+/).filter(Boolean);
      let result = text;
      words.forEach(word => {
        const safe  = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safe})`, 'gi');
        result = result.replace(regex, '<mark style="background: var(--accent-yellow); color: var(--bg-primary); padding: 2px 4px; border-radius: 3px;">$1</mark>');
      });
      return result;
    }
  }

  console.log('🎮 DovbushHub initialized successfully!');

  // Клікабельні latest-item картки (вся картка відкриває статтю)
  document.querySelectorAll('.latest-item').forEach(item => {
    const link = item.querySelector('h3 a, .latest-content a');
    if (link) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function(e) {
        // Якщо клік по самому посиланню — не втручатись
        if (e.target.closest('a')) return;
        window.location.href = link.getAttribute('href');
      });
    }
  });

  // ========================================
  // SCROLL REVEAL АНІМАЦІЇ
  // ========================================

  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ════════════════════════════════════
  // HOMEPAGE TABS
  // ════════════════════════════════════
  const tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active from all
        tabButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        // Activate clicked
        btn.classList.add('active');
        btn.setAttribute('aria-selected','true');
        const pane = document.getElementById('tab-' + btn.dataset.tab);
        if (pane) pane.classList.add('active');
      });
    });
  }

  // ════════════════════════════════════
  // HEADER SCROLL EFFECT
  // ════════════════════════════════════
  const siteHeader = document.querySelector('.site-header-new');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }
});

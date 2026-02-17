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

  // Observe all post cards and latest items
  document.querySelectorAll('.post-card, .latest-item, .section-slider').forEach(el => {
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
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });

  // Comment Form Validation
  const commentForm = document.querySelector('.comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[name="name"]').value.trim();
      const email = this.querySelector('input[name="email"]').value.trim();
      const comment = this.querySelector('textarea[name="comment"]').value.trim();
      
      if (!name || !email || !comment) {
        alert('Будь ласка, заповніть всі поля');
        return;
      }
      
      if (!isValidEmail(email)) {
        alert('Будь ласка, введіть коректну email адресу');
        return;
      }
      
      // Here you would normally send the data to a server
      alert('Дякуємо за коментар! (Форма демонстраційна)');
      this.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Active Navigation Highlight
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.classList.add('active');
    }
  });

  // Load More Button
  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // In a real implementation, this would load more posts
      this.textContent = 'Завантаження...';
      setTimeout(() => {
        this.textContent = 'Показати більше';
        alert('У реальній версії тут завантажуватимуться нові пости');
      }, 1000);
    });
  }

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
// Image Lightbox для постів
  const postBody = document.querySelector('.post-body');
  if (postBody) {
    // Створюємо lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    document.body.appendChild(lightbox);
    
    // Обробка кліків на зображення
    postBody.querySelectorAll('img').forEach(img => {
      img.addEventListener('click', function(e) {
        e.preventDefault();
        const imgClone = this.cloneNode();
        lightbox.innerHTML = '';
        lightbox.appendChild(imgClone);
        lightbox.classList.add('active');
      });
    });
    
    // Закриття lightbox
    lightbox.addEventListener('click', function() {
      this.classList.remove('active');
    });
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
    
    // Пошук при введенні
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      // Отримуємо всі пости (потрібно згенерувати JSON)
      fetch('/search.json')
        .then(response => response.json())
        .then(posts => {
          const filtered = posts.filter(post => {
            return post.title.toLowerCase().includes(query) ||
                   post.excerpt.toLowerCase().includes(query) ||
                   post.content.toLowerCase().includes(query) ||
                   post.category.toLowerCase().includes(query);
          });
          
          displayResults(filtered, query);
        })
        .catch(() => {
          searchResults.innerHTML = '<div class="search-no-results">Помилка пошуку</div>';
        });
    });
    
    function displayResults(posts, query) {
      if (posts.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">Нічого не знайдено</div>';
        return;
      }
      
      const html = posts.slice(0, 10).map(post => `
        <a href="${post.url}" class="search-result-item">
          <div class="search-result-title">${highlightText(post.title, query)}</div>
          <div class="search-result-excerpt">${highlightText(post.excerpt, query)}</div>
        </a>
      `).join('');
      
      searchResults.innerHTML = html;
    }
    
    function highlightText(text, query) {
      const regex = new RegExp(`(${query})`, 'gi');
      return text.replace(regex, '<mark style="background: var(--accent-yellow); color: var(--bg-primary); padding: 2px 4px; border-radius: 3px;">$1</mark>');
    }
  }
  console.log('🎮 DovbushHub initialized successfully!');
});

// Navigation Module
  const NavigationModule = (() => {
    const navigate = (page) => {
      // Hide all pages
      document.querySelectorAll('.page').forEach(pageEl => {
        pageEl.classList.remove('active-page');
      });
      
      // Show requested page
      const targetPage = document.getElementById(`${page}-page`);
      if (targetPage) {
        targetPage.classList.add('active-page');
        window.scrollTo(0, 0);
      } else {
        alert(`Navigating to ${page.charAt(0).toUpperCase() + page.slice(1)} Page`);
      }
    };

    return { navigate };
  })();

  // Event Handler Module
  const EventHandlerModule = ((navModule) => {
    const initEventListeners = () => {
      // Trainer profiles open their dedicated details page.
      document.querySelectorAll('.trainer-card').forEach(card => {
        const trainerName = card.querySelector('h3')?.textContent.trim();
        if (!trainerName) return;

        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `View ${trainerName}'s profile`);

        const openProfile = () => {
          window.location.href = `trainerProfiiles.html?trainer=${encodeURIComponent(trainerName)}`;
        };

        card.addEventListener('click', openProfile);
        card.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProfile();
          }
        });
      });

      // Navigation buttons
      document.querySelectorAll('[data-page]').forEach(button => {
        button.addEventListener('click', (e) => {
          const page = e.currentTarget.getAttribute('data-page');
          navModule.navigate(page);
          document.querySelector('.mobile-nav')?.classList.remove('open');
          document.querySelector('.mobile-menu-button')?.setAttribute('aria-expanded', 'false');
        });
      });

      const bmiForm = document.querySelector('#bmi-form');
      bmiForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const height = Number(document.querySelector('#bmi-height')?.value) / 100;
        const weight = Number(document.querySelector('#bmi-weight')?.value);
        const result = document.querySelector('#bmi-result');

        if (!height || !weight || height <= 0 || weight <= 0) {
          result.textContent = 'Please enter a valid height and weight.';
          return;
        }

        const bmi = weight / (height * height);
        const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy range' : bmi < 30 ? 'Overweight' : 'Obesity range';
        result.innerHTML = `<strong>Your BMI: ${bmi.toFixed(1)}</strong> · ${category}. <span>Join us for a plan tailored to your goals.</span>`;
      });

      const menuButton = document.querySelector('.mobile-menu-button');
      const mobileNav = document.querySelector('.mobile-nav');
      menuButton?.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        menuButton.classList.toggle('open', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
        mobileNav.setAttribute('aria-hidden', String(!isOpen));
      });
    };

    return { initEventListeners };
  })(NavigationModule);

  // Animation Module
  const AnimationModule = (() => {
    const initScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.slide-in').forEach(el => {
        observer.observe(el);
      });
    };

    return { initScrollAnimations };
  })();

  // Chart Module
  const ChartModule = (() => {
    const initCharts = () => {
      // Main chart
      var options = {
        series: [{
          name: "Workout Performance",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Monthly Workout Progress',
          align: 'left',
          style: {
            color: '#87CEFA'
          }
        },
        grid: {
          row: {
            colors: ['#333', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      };

      const mainChartElement = document.querySelector("#chart");
      if (mainChartElement) {
        const chart = new ApexCharts(mainChartElement, options);
        chart.render();
      }
      
      // Dashboard chart
      var dashboardOptions = {
        series: [{
          name: "Weight",
          data: [75.2, 74.8, 74.5, 74.1, 73.8, 73.5, 73.2, 72.9, 72.5]
        }, {
          name: "Body Fat %",
          data: [22.5, 21.8, 21.2, 20.7, 20.1, 19.6, 19.2, 18.8, 18.3]
        }],
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        tooltip: {
          theme: 'dark'
        },
        legend: {
          labels: {
            colors: '#fff'
          }
        }
      };

      var dashboardChart = new ApexCharts(document.querySelector("#dashboard-chart"), dashboardOptions);
      dashboardChart.render();
    };

    return { initCharts };
  })();

  // Cursor Module
  const CursorModule = (() => {
    const initCursor = () => {
      const cursor = document.querySelector('.cursor-effect');
      
      document.addEventListener('mousemove', e => {
        cursor.style.display = 'block';
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
      });
      
      document.addEventListener('click', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
      });
    };

    return { initCursor };
  })();

  // Keep trainer cards visible if an external Unsplash image is unavailable.
  const trainerFallback = (name) => {
    const maleNames = ['Kabir Singh', 'Vikram Joshi', 'Arjun Rao', 'Dev Patel', 'Rahul Verma', 'Karan Malhotra'];
    const isMale = maleNames.includes(name);
    const label = isMale ? 'Male trainer' : 'Female trainer';
    const person = isMale
      ? '<circle cx="100" cy="76" r="28" fill="#f2c6a0"/><path d="M57 155c5-31 22-47 43-47s38 16 43 47" fill="#2563eb"/><path d="M70 65c8-24 52-24 60 0-8-8-18-12-30-12s-22 4-30 12z" fill="#111827"/>'
      : '<circle cx="100" cy="76" r="28" fill="#f2c6a0"/><path d="M56 155c6-31 23-47 44-47s38 16 44 47" fill="#db2777"/><path d="M61 76c0-35 78-43 78 0v28h-10V76c-18 10-40 10-58 0v28H61z" fill="#111827"/>';
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" rx="28" fill="#172554"/><path d="M25 174h150" stroke="#87CEFA" stroke-width="6"/><g>${person}</g><text x="100" y="190" text-anchor="middle" fill="#dbeafe" font-family="Arial" font-size="11">${label}</text></svg>`)}`;
  };

  const initTrainerImageFallbacks = () => {
    document.querySelectorAll('.trainer-card img').forEach(image => {
      const name = image.closest('.trainer-card')?.querySelector('h3')?.textContent.trim() || '';
      image.addEventListener('error', () => {
        if (!image.dataset.fallback) {
          image.dataset.fallback = 'true';
          image.src = trainerFallback(name);
        }
      });
    });
  };

  // Main App Initialization
  document.addEventListener('DOMContentLoaded', () => {
    EventHandlerModule.initEventListeners();
    initTrainerImageFallbacks();
    AnimationModule.initScrollAnimations();
    ChartModule.initCharts();
    CursorModule.initCursor();
  });

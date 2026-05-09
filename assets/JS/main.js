const eventsData = {
  "python-basics": {
    id: "EVT-001",
    title: "Python Basics",
    date: "2026-05-10",
    location: "Online SVU",
    category: "برمجة",
    description:
      "فعالية تهدف إلى تعليم أساسيات البرمجة باستخدام Python مع تطبيقات عملية لبناء التفكير المنطقي وحل المشكلات.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=80",
  },
  "sql-database": {
    id: "EVT-002",
    title: "SQL Database",
    date: "2026-05-15",
    location: "SVU Virtual Lab",
    category: "قواعد بيانات",
    description:
      "ورشة تفاعلية لبناء قواعد بيانات قوية وكتابة استعلامات SQL فعالة لإدارة البيانات وتحليلها في المشاريع الواقعية.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1400&q=80",
  },
  "web-development": {
    id: "EVT-003",
    title: "Web Development",
    date: "2026-05-20",
    location: "Online + Live Session",
    category: "ويب",
    description:
      "فعالية عملية لتعلم أساسيات تطوير الويب الحديث وإنشاء صفحات متجاوبة وتجربة مستخدم احترافية.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
  },
  "ai-foundations": {
    id: "EVT-004",
    title: "AI Foundations",
    date: "2026-05-25",
    location: "SVU AI Lab",
    category: "ذكاء اصطناعي",
    description:
      "مقدمة عملية لفهم أساسيات الذكاء الاصطناعي وتطبيقاته في تحليل البيانات والأنظمة الذكية.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  },
  "flutter-mobile-apps": {
    id: "EVT-005",
    title: "Flutter Mobile Apps",
    date: "2026-05-28",
    location: "Online Workshop",
    category: "تطوير تطبيقات",
    description:
      "ورشة تطبيقية لتطوير تطبيقات موبايل حديثة باستخدام Flutter مع الاهتمام بالأداء وتجربة المستخدم.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
  },
  "cybersecurity-essentials": {
    id: "EVT-006",
    title: "Cybersecurity Essentials",
    date: "2026-06-01",
    location: "SVU Security Hub",
    category: "أمن المعلومات",
    description:
      "تدريب عملي على أساسيات الأمن السيبراني، اكتشاف الثغرات، وتعزيز حماية الأنظمة والشبكات.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
  },
  "data-engineering-essentials": {
    id: "EVT-007",
    title: "Data Engineering Essentials",
    date: "2026-06-04",
    location: "SVU Data Center",
    category: "قواعد بيانات",
    description:
      "مسار يركز على بناء خطوط البيانات وتنظيم المستودعات وتحضير البيانات للاستخدام التحليلي المتقدم.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  "ui-ux-for-web": {
    id: "EVT-008",
    title: "UI UX for Web",
    date: "2026-06-08",
    location: "Design Studio",
    category: "ويب",
    description:
      "تعلم تصميم واجهات وتجارب استخدام احترافية لمواقع الويب بطريقة عملية قابلة للتنفيذ.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
  "algorithms-workshop": {
    id: "EVT-009",
    title: "Algorithms and Problem Solving",
    date: "2026-06-12",
    location: "Online Coding Session",
    category: "برمجة",
    description:
      "ورشة متقدمة لحل مسائل الخوارزميات وتطوير مهارات التفكير المنطقي للمقابلات التقنية.",
    image:
      "https://www.formationbdarija.com/wp-content/uploads/2025/01/%D8%A7%D9%84%D8%AE%D9%88%D8%A7%D8%B1%D8%B2%D9%85%D9%8A%D8%A7%D8%AA-%D9%88%D9%87%D9%8A%D8%A7%D9%83%D9%84-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA.webp",
  },
};

function initEventDetailsPage() {
  const titleEl = document.getElementById("event-title");
  if (!titleEl) return;

  const params = new URLSearchParams(window.location.search);
  const eventKey = params.get("id") || "python-basics";
  const selectedEvent = eventsData[eventKey] || eventsData["python-basics"];

  const codeEl = document.getElementById("event-code");
  const dateEl = document.getElementById("event-date");
  const locationEl = document.getElementById("event-location");
  const categoryEl = document.getElementById("event-category");
  const descriptionEl = document.getElementById("event-description");
  const imageEl = document.getElementById("event-image");
  const heroEl = document.getElementById("event-hero");

  document.title = `تفاصيل الفعالية - ${selectedEvent.title}`;
  titleEl.textContent = selectedEvent.title;
  if (codeEl) codeEl.textContent = selectedEvent.id;
  if (dateEl) dateEl.textContent = selectedEvent.date;
  if (locationEl) locationEl.textContent = selectedEvent.location;
  if (categoryEl) categoryEl.textContent = selectedEvent.category;
  if (descriptionEl) descriptionEl.textContent = selectedEvent.description;

  if (imageEl) {
    imageEl.src = selectedEvent.image;
    imageEl.alt = selectedEvent.title;
    imageEl.loading = "lazy";
    imageEl.decoding = "async";
  }

  if (heroEl) {
    heroEl.style.backgroundImage = `linear-gradient(135deg, rgba(13, 59, 102, 0.95), rgba(42, 157, 143, 0.9)), url('${selectedEvent.image}')`;
  }
}

function enhanceCardsAndMedia() {
  const allImages = document.querySelectorAll("img");
  allImages.forEach((img) => {
    if (!img.hasAttribute("loading")) img.loading = "lazy";
    if (!img.hasAttribute("decoding")) img.decoding = "async";
  });

  const eventCards = document.querySelectorAll(".event-card");
  eventCards.forEach((card) => {
    card.classList.add("shadow-sm");
  });
}

function initContactFormValidation() {
  const form = document.getElementById("contactForm");
  const alertContainer = document.getElementById("contactAlertContainer");
  if (!form || !alertContainer) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const showAlert = (type, message) => {
    alertContainer.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (!nameValue && !emailValue && !messageValue) {
      showAlert("danger", "يرجى تعبئة جميع الحقول قبل الإرسال.");
      return;
    }

    if (!nameValue) {
      showAlert("warning", "حقل الاسم مطلوب.");
      return;
    }

    if (!emailValue) {
      showAlert("danger", "حقل البريد الإلكتروني مطلوب.");
      return;
    }

    if (!isValidEmail(emailValue)) {
      showAlert("danger", "صيغة البريد الإلكتروني غير صحيحة.");
      return;
    }

    if (!messageValue) {
      showAlert("warning", "يرجى كتابة الرسالة قبل الإرسال.");
      return;
    }

    showAlert("success", "تم إرسال رسالتك بنجاح. شكرا لتواصلك معنا.");
    form.reset();
  });
}

function initCategoryFilters() {
  const filterGroups = document.querySelectorAll("[data-filter-group]");
  filterGroups.forEach((group) => {
    const buttons = group.querySelectorAll("[data-filter]");
    const itemSelector = group.dataset.filterItemsSelector || ".filter-item";
    const items = group.querySelectorAll(itemSelector);
    const searchInput = group.querySelector("[data-filter-search]");
    const noResultsMessage = group.querySelector("[data-no-results]");
    const searchForm = searchInput ? searchInput.closest("form") : null;
    let currentFilter =
      group.querySelector("[data-filter].active")?.dataset.filter || "all";
    if (!buttons.length || !items.length) return;

    const applyFilters = () => {
      const query = (searchInput?.value || "").trim().toLowerCase();
      let visibleItemsCount = 0;

      items.forEach((item) => {
        const itemCategory = item.dataset.category || "";
        const itemText = (item.dataset.searchText || item.textContent || "")
          .trim()
          .toLowerCase();

        const matchesCategory =
          currentFilter === "all" || itemCategory === currentFilter;
        const matchesSearch = !query || itemText.includes(query);
        const shouldShow = matchesCategory && matchesSearch;

        item.classList.toggle("d-none", !shouldShow);
        if (shouldShow) visibleItemsCount += 1;
      });

      if (noResultsMessage) {
        noResultsMessage.classList.toggle("d-none", visibleItemsCount > 0);
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        currentFilter = button.dataset.filter || "all";

        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    if (searchForm) {
      searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        applyFilters();
      });
    }

    applyFilters();
  });
}
// زر يقوم بالرجوع لأعلى الصفحة في حال النزول للاسفل
function initBackToTopButton() {
  if (document.getElementById("backToTopBtn")) return;

  const button = document.createElement("button");
  button.id = "backToTopBtn";
  button.type = "button";
  button.setAttribute("aria-label", "Back to top");
  button.innerHTML = "&#8679;";

  Object.assign(button.style, {
    position: "fixed",
    left: "20px",
    bottom: "20px",
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "1px solid rgba(120, 200, 255, 0.45)",
    background: "linear-gradient(145deg, rgba(8, 25, 58, 0.96), rgba(13, 39, 85, 0.94))",
    color: "#a9deff",
    fontSize: "1.2rem",
    lineHeight: "1",
    cursor: "pointer",
    zIndex: "9999",
    opacity: "0",
    visibility: "hidden",
    transform: "translateY(8px)",
    transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease",
    boxShadow: "0 10px 24px rgba(1, 10, 24, 0.45)",
  });

  const toggleVisibility = () => {
    const shouldShow = window.scrollY > 260;
    button.style.opacity = shouldShow ? "1" : "0";
    button.style.visibility = shouldShow ? "visible" : "hidden";
    button.style.transform = shouldShow ? "translateY(0)" : "translateY(8px)";
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();
  document.body.appendChild(button);
}

document.addEventListener("DOMContentLoaded", () => {
  initEventDetailsPage();
  enhanceCardsAndMedia();
  initContactFormValidation();
  initCategoryFilters();
  initBackToTopButton();
});

// تبديل اللغة بين العربية والإنجليزية
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  const bootstrapLink = document.getElementById('bootstrap-css');

  function applyLanguage(lang) {
      const htmlTag = document.documentElement;
      const elements = document.querySelectorAll('.translate');
      
      if (lang === 'en') {
          htmlTag.setAttribute('dir', 'ltr');
          htmlTag.setAttribute('lang', 'en');
          
          if (langToggle) {
              langToggle.innerHTML = '<i class="bi bi-translate"></i> العربية';
          }

          if (bootstrapLink) {
              bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
          }

          elements.forEach(el => {
              if (el.hasAttribute('data-en')) {
                  el.textContent = el.getAttribute('data-en');
              }
              if (el.hasAttribute('data-en-placeholder')) {
                  el.setAttribute('placeholder', el.getAttribute('data-en-placeholder'));
              }
          });

      } else {
          htmlTag.setAttribute('dir', 'rtl');
          htmlTag.setAttribute('lang', 'ar');

          if (langToggle) {
              langToggle.innerHTML = '<i class="bi bi-translate"></i> English';
              langToggle.classList.add('me-2');
          }

          if (bootstrapLink) {
              bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";
          }

          elements.forEach(el => {
              if (el.hasAttribute('data-ar')) {
                  el.textContent = el.getAttribute('data-ar');
              }
              if (el.hasAttribute('data-ar-placeholder')) {
                  el.setAttribute('placeholder', el.getAttribute('data-ar-placeholder'));
              }
          });
      }
  }

  const savedLang = localStorage.getItem('selectedLang') || 'ar';
  applyLanguage(savedLang);

  if (langToggle) {
      langToggle.addEventListener('click', () => {
          const currentLang = document.documentElement.getAttribute('lang');
          const newLang = (currentLang === 'ar') ? 'en' : 'ar';
          
          localStorage.setItem('selectedLang', newLang);
          
          applyLanguage(newLang);
      });
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});


// هون للفلترة بالصفحة الرئيسية
(function () {
    function normalize(s) {
        return (s || '').toString().trim().toLowerCase();
    }

    document.querySelectorAll('[data-filter-group]').forEach(group => {
        const itemsSelector = group.getAttribute('data-filter-items-selector') || '.course-item';
        const scopedItems = group.querySelectorAll(itemsSelector);
        const items = scopedItems.length ? Array.from(scopedItems) : Array.from(document.querySelectorAll(itemsSelector));
        const buttons = Array.from(group.querySelectorAll('.filter-btn'));

        if (!buttons.length || !items.length) return;

        function applyFilter(filterValue) {
            const normalizedFilter = normalize(filterValue);
            const isAll = normalizedFilter === normalize('الكل') || normalizedFilter === 'all' || normalizedFilter === '';
            items.forEach(item => {
                const cat = normalize(item.getAttribute('data-category'));
                if (isAll || cat === normalizedFilter) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            });
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterVal = btn.getAttribute('data-ar') || btn.getAttribute('data-en') || btn.textContent;
                applyFilter(filterVal);
            });
        });

        const activeBtn = buttons.find(b => b.classList.contains('active'));
        if (activeBtn) {
            const initFilter = activeBtn.getAttribute('data-ar') || activeBtn.getAttribute('data-en') || activeBtn.textContent;
            applyFilter(initFilter);
        } else {
            applyFilter('الكل');
        }
    });
})();

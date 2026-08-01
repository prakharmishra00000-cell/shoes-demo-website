/* SoleStyle Core Application Engine */

// --- STATIC PRODUCT DATA ---
const PRODUCTS = [
    {
        id: "p1",
        name: "Stratus Run V1",
        brand: "AeroTech",
        category: "sports",
        gender: "men",
        price: 140,
        originalPrice: 180,
        rating: 4.8,
        description: "Engineered with our proprietary StratusFoam midsole, the Stratus Run V1 provides high energy return and impact absorption for long-distance training. Features a seamless engineered knit upper for zero abrasion and maximum breathability.",
        sizes: [8, 9, 10, 11, 12],
        colors: [
            { name: "Coral Red", code: "#ff4757" },
            { name: "Slate Dark", code: "#2f3542" },
            { name: "Cloud White", code: "#f1f2f6" }
        ],
        stockStatus: "in-stock",
        badge: "Sale",
        featured: true,
        type: "sneakers"
    },
    {
        id: "p2",
        name: "Ascent Trail Grip",
        brand: "AeroTech",
        category: "sports",
        gender: "men",
        price: 160,
        rating: 4.9,
        description: "Conquer rugged terrain with the Ascent Trail Grip. Outfitted with deep multi-directional rubber lugs and an integrated TPU heel stabilizer, this shoe keeps you secure on wet, steep, and muddy paths.",
        sizes: [7, 8, 9, 10, 11],
        colors: [
            { name: "Sage Green", code: "#2ed573" },
            { name: "Volcanic Grey", code: "#57606f" }
        ],
        stockStatus: "low-stock",
        badge: "Best Seller",
        featured: true,
        type: "sneakers"
    },
    {
        id: "p3",
        name: "Lumina Knit Racer",
        brand: "FitStride",
        category: "sports",
        gender: "women",
        price: 130,
        rating: 4.7,
        description: "Ultralight performance racer designed specifically for female runners. A contoured sock-like fit merges with high-responsiveness foam for effortless speed workouts.",
        sizes: [5, 6, 7, 8, 9],
        colors: [
            { name: "Neon Pink", code: "#ff6b81" },
            { name: "Mint Breeze", code: "#7bed9f" }
        ],
        stockStatus: "in-stock",
        badge: "New",
        featured: true,
        type: "sneakers"
    },
    {
        id: "p4",
        name: "Oxford Elite Loafer",
        brand: "Milano Craft",
        category: "formal",
        gender: "men",
        price: 220,
        rating: 4.6,
        description: "Handcrafted in Italy from full-grain calfskin leather. The Oxford Elite features classic hand-stitched detailing, a cushioned leather footbed, and a durable stacked leather outsole.",
        sizes: [8, 9, 10, 11, 12],
        colors: [
            { name: "Chestnut Brown", code: "#8B5A2B" },
            { name: "Midnight Black", code: "#1e272e" }
        ],
        stockStatus: "in-stock",
        badge: null,
        featured: false,
        type: "formal"
    },
    {
        id: "p5",
        name: "Monarch Suede Loafer",
        brand: "Milano Craft",
        category: "casual",
        gender: "men",
        price: 190,
        rating: 4.5,
        description: "Effortless casual luxury. Soft premium Italian suede exterior meets a flexible crepe rubber sole, offering slip-on elegance that moves seamlessly from daytime calls to dinner dates.",
        sizes: [8, 9, 10, 11],
        colors: [
            { name: "Navy Blue", code: "#1e3799" },
            { name: "Sand Beige", code: "#dcdde1" }
        ],
        stockStatus: "in-stock",
        badge: null,
        featured: false,
        type: "casual"
    },
    {
        id: "p6",
        name: "Vela Wedge Sandal",
        brand: "FitStride",
        category: "sandals",
        gender: "women",
        price: 95,
        originalPrice: 130,
        rating: 4.4,
        description: "Summer comfort defined. Featuring anatomically contoured cork footbeds, adjustable premium nubuck leather straps, and lightweight shock-absorbing EVA outsoles.",
        sizes: [6, 7, 8, 9],
        colors: [
            { name: "Terracotta", code: "#e67e22" },
            { name: "Matte Black", code: "#2c3e50" }
        ],
        stockStatus: "in-stock",
        badge: "Sale",
        featured: false,
        type: "sandals"
    },
    {
        id: "p7",
        name: "Breeze Mesh Slide",
        brand: "FitStride",
        category: "sandals",
        gender: "women",
        price: 75,
        rating: 4.3,
        description: "Perfect for warm-weather relaxation or post-workout recovery. High-stretch mesh upper allows airflow, combined with a plush pillowy footbed for immediate step-in relief.",
        sizes: [5, 6, 7, 8, 9],
        colors: [
            { name: "Lavender", code: "#a55eee" },
            { name: "Cloud White", code: "#f5f6fa" }
        ],
        stockStatus: "in-stock",
        badge: "New",
        featured: false,
        type: "sandals"
    },
    {
        id: "p8",
        name: "Junior Sprint Force",
        brand: "PlaySprint",
        category: "kids",
        gender: "kids",
        price: 65,
        rating: 4.7,
        description: "Durability first. Constructed with reinforced toe caps, highly flexible traction soles, and dual hook-and-loop straps for kids who never stop moving.",
        sizes: [1, 2, 3, 4, 5],
        colors: [
            { name: "Electric Blue", code: "#0984e3" },
            { name: "Neon Yellow", code: "#ffd32a" }
        ],
        stockStatus: "in-stock",
        badge: "Best Seller",
        featured: true,
        type: "sneakers"
    },
    {
        id: "p9",
        name: "Serene Heel Sandal",
        brand: "Milano Craft",
        category: "formal",
        gender: "women",
        price: 240,
        rating: 4.8,
        description: "Stunning minimalism. Sleek leather straps cross beautifully at the ankle, perched upon a stable block heel. Ideal for wedding seasons, cocktails, and night outings.",
        sizes: [6, 7, 8, 9],
        colors: [
            { name: "Champagne Gold", code: "#f7d794" },
            { name: "Classic Black", code: "#1e272e" }
        ],
        stockStatus: "low-stock",
        badge: "New",
        featured: false,
        type: "formal"
    },
    {
        id: "p10",
        name: "Urban Glide Sneaker",
        brand: "FitStride",
        category: "casual",
        gender: "men",
        price: 110,
        rating: 4.6,
        description: "A minimalist daily staple. Low-top design built with canvas and recycled microfiber leather details, sitting atop a flat vulcanized rubber sole for classic style.",
        sizes: [7, 8, 9, 10, 11, 12],
        colors: [
            { name: "Off White", code: "#f1f2f6" },
            { name: "Olive Green", code: "#20bf6b" }
        ],
        stockStatus: "in-stock",
        badge: null,
        featured: false,
        type: "casual"
    },
    {
        id: "p11",
        name: "Playtime Flex Slip-on",
        brand: "PlaySprint",
        category: "kids",
        gender: "kids",
        price: 55,
        rating: 4.4,
        description: "Easy on, easy off. Breathable mesh slip-ons featuring elastic collars and a highly flexible, machine-washable build to withstand playground dirt.",
        sizes: [12, 13, 1, 2],
        colors: [
            { name: "Grape Purple", code: "#8854d0" },
            { name: "Volcano Orange", code: "#fa8231" }
        ],
        stockStatus: "in-stock",
        badge: null,
        featured: false,
        type: "casual"
    },
    {
        id: "p12",
        name: "Apex Velocity Cleat",
        brand: "AeroTech",
        category: "sports",
        gender: "men",
        price: 180,
        rating: 4.9,
        description: "Designed for explosive speed and rapid cuts. Rigid carbon fiber plate maximizes power transmission while structured synthetic upper locks your foot firmly in place.",
        sizes: [8, 9, 10, 11],
        colors: [
            { name: "Black Volt", code: "#222f3e" },
            { name: "Total White", code: "#ffffff" }
        ],
        stockStatus: "in-stock",
        badge: "New",
        featured: false,
        type: "sports"
    }
];

// --- GALLERY IMAGES DATABASE ---
const GALLERY_ITEMS = [
    { src: "assets/g1.jpg", caption: "Design Room - Where ideas become structural sketches." },
    { src: "assets/g2.jpg", caption: "Craftsmanship - Precision sewing of premium top-grain leather." },
    { src: "assets/g3.jpg", caption: "Showroom Shelf - Sleek aesthetic layouts displaying new releases." },
    { src: "assets/g4.jpg", caption: "Urban Vibe - Redefining street fashion and dynamic footsteps." },
    { src: "assets/g5.jpg", caption: "Aesthetic Focus - Exploring bright colorways and performance knit." },
    { src: "assets/g6.jpg", caption: "Grip Engineering - Studying multi-directional traction patterns." }
];

// --- TESTIMONIAL DATA ---
const REVIEWS = [
    {
        quote: "SoleStyle completely redefined how my feet feel after a long day at the hospital. The Stratus Run feels like walking on customized clouds.",
        name: "Dr. Sarah Mitchell",
        role: "Pediatrician",
        rating: 5,
        initials: "SM"
    },
    {
        quote: "Handcrafted elegance that actually feels comfortable. The Oxford Elite Loafers look stunning in the boardroom and feel plush all day.",
        name: "Marcus Vance",
        role: "Creative Director",
        rating: 5,
        initials: "MV"
    },
    {
        quote: "My kids go through shoes in weeks, but the Junior Sprint Cleats have survived two seasons of mud, playground gravel, and soccer matches. Unbelievable durability.",
        name: "Elena Rostova",
        role: "Mother of Two",
        rating: 5,
        initials: "ER"
    }
];

// --- STATE MANAGEMENT ---
let filterState = {
    search: '',
    brands: [],
    categories: [],
    maxPrice: 300,
    colors: [],
    sizes: [],
    gender: ''
};
let currentSort = 'featured';
let activeReviewsIndex = 0;
let cart = [];
let currentLightboxIndex = 0;

// --- DYNAMIC SVG GENERATOR FOR FOOTWEAR ---
function getProductSVG(type, accentColor = "#ff4757") {
    let path = "";
    let backgroundCircle = `<circle cx="100" cy="100" r="85" fill="var(--bg-offset)" />`;
    
    if (type === "formal") {
        path = `
        <path d="M40 120 C 40 120, 50 80, 80 80 C 100 80, 110 95, 125 95 C 145 95, 160 110, 170 120 C 175 125, 172 135, 160 135 C 140 135, 75 135, 45 135 C 38 135, 38 120, 40 120 Z" fill="${accentColor}" />
        <path d="M45 133 C 55 133, 130 133, 160 133 C 163 133, 165 135, 165 138 C 165 141, 155 141, 130 141 C 105 141, 70 141, 45 141 C 40 141, 42 133, 45 133 Z" fill="var(--text-primary)" />
        <path d="M43 133 L40 142 L52 142 L52 133 Z" fill="var(--text-muted)" />
        <path d="M120 86 C 115 88, 110 95, 105 95 C 100 95, 95 86, 92 83" stroke="var(--bg-primary)" stroke-width="2" fill="none" />`;
    } else if (type === "sandals" || type === "heel") {
        path = `
        <path d="M40 135 C 40 135, 55 105, 75 105 C 85 105, 95 125, 120 125 C 140 125, 160 115, 170 110 L172 118 C 160 125, 140 135, 120 135 Z" fill="${accentColor}" />
        <path d="M38 135 L172 135 L170 142 L42 142 Z" fill="var(--text-primary)" />
        <path d="M60 106 C 58 115, 66 135, 66 135" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M130 125 C 128 115, 138 135, 138 135" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" fill="none" />`;
    } else {
        path = `
        <path d="M35 125 C 35 125, 45 75, 78 75 C 95 75, 108 95, 125 95 C 145 95, 165 105, 175 118 C 180 123, 175 133, 162 133 C 145 133, 75 133, 40 133 C 33 133, 33 125, 35 125 Z" fill="${accentColor}" />
        <path d="M40 131 C 55 131, 140 131, 165 131 C 168 131, 172 134, 172 137 C 172 142, 160 142, 140 142 C 115 142, 70 142, 40 142 C 35 142, 35 131, 40 131 Z" fill="var(--text-primary)" />
        <path d="M90 77 L98 90 M98 77 L106 90 M106 77 L114 90" stroke="var(--bg-primary)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M135 105 C 148 105, 155 112, 162 118" stroke="var(--bg-primary)" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>`;
    }

    return `<svg viewBox="0 0 200 200" width="100%" height="100%">${backgroundCircle}${path}</svg>`;
}

// --- INITIALIZE APPLICATION ---
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavigation();
    initTestimonials();
    initFAQ();
    initCountdown();
    initFilters();
    renderFeaturedProducts();
    renderShopCatalog();
    initModalControls();
    initContactForm();
    initNewsletterForm();
    
    // Cafe-style updates
    initCartSidebar();
    initLightboxController();
    initFittingForm();
});

// --- THEME STATE CONTROLLER ---
function initTheme() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    const savedTheme = localStorage.getItem("theme") || "light";
    
    if (savedTheme === "dark") {
        document.body.classList.replace("light-theme", "dark-theme");
        themeBtn.innerHTML = `<i class="ph-bold ph-sun"></i>`;
    }

    themeBtn.addEventListener("click", () => {
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.replace("light-theme", "dark-theme");
            themeBtn.innerHTML = `<i class="ph-bold ph-sun"></i>`;
            localStorage.setItem("theme", "dark");
            showToast("Dark Mode Enabled", "success");
        } else {
            document.body.classList.replace("dark-theme", "light-theme");
            themeBtn.innerHTML = `<i class="ph-bold ph-moon"></i>`;
            localStorage.setItem("theme", "light");
            showToast("Light Mode Enabled", "success");
        }
    });
}

// --- SPA NAVIGATION ROUTING ---
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item, .drawer-item");
    const sections = document.querySelectorAll(".content-section");
    const logo = document.getElementById("nav-logo");
    
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const drawerCloseBtn = document.getElementById("drawer-close-btn");
    const drawerOverlay = document.getElementById("drawer-overlay");

    const handleNav = (targetId) => {
        navItems.forEach(item => {
            if (item.getAttribute("data-target") === targetId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.add("active");
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                sec.classList.remove("active");
            }
        });

        closeMobileDrawer();
    };

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = item.getAttribute("data-target");
            
            if (targetId === "shop-section") {
                resetAllFilters();
            }
            handleNav(targetId);
        });
    });

    logo.addEventListener("click", (e) => {
        e.preventDefault();
        handleNav("home-section");
    });

    const openMobileDrawer = () => {
        mobileDrawer.classList.add("open");
        drawerOverlay.classList.add("open");
    };

    const closeMobileDrawer = () => {
        mobileDrawer.classList.remove("open");
        drawerOverlay.classList.remove("open");
    };

    mobileToggle.addEventListener("click", openMobileDrawer);
    drawerCloseBtn.addEventListener("click", closeMobileDrawer);
    drawerOverlay.addEventListener("click", closeMobileDrawer);

    window.navigateToSection = (targetId, directFilter = null) => {
        handleNav(targetId);
        if (directFilter) {
            resetAllFilters();
            if (directFilter === 'sale') {
                const originalPriceCheck = PRODUCTS.filter(p => p.originalPrice);
                renderFilteredGrid(originalPriceCheck);
            } else {
                filterState.categories = [directFilter];
                applyFilterLogic();
            }
        }
    };
}

// --- SMOOTH SCROLLING HELPER ---
window.scrollToElement = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};

// --- RENDER FEATURED ARRIVALS (HOME) ---
function renderFeaturedProducts() {
    const featuredGrid = document.getElementById("featured-products-grid");
    if (!featuredGrid) return;

    const featuredItems = PRODUCTS.filter(item => item.featured).slice(0, 4);
    featuredGrid.innerHTML = featuredItems.map(prod => createProductCardHtml(prod)).join('');
}

// --- CREATE PRODUCT CARD COMPONENT ---
function createProductCardHtml(prod) {
    const hasDiscount = prod.originalPrice ? true : false;
    const badgeHtml = prod.badge ? `<span class="product-badge ${prod.badge.toLowerCase()}">${prod.badge}</span>` : '';
    const priceHtml = hasDiscount 
        ? `<span class="price-original">$${prod.originalPrice}</span><span class="price">$${prod.price}</span>`
        : `<span class="price">$${prod.price}</span>`;
    
    const accentColor = prod.colors[0].code;
    const svgContent = getProductSVG(prod.type, accentColor);

    return `
    <article class="product-card" id="card-${prod.id}">
        ${badgeHtml}
        <div class="product-fav" onclick="toggleFavorite('${prod.id}', event)">
            <i class="ph ph-heart"></i>
        </div>
        <div class="product-img-wrapper" onclick="openProductDetail('${prod.id}')">
            <div class="product-img">${svgContent}</div>
        </div>
        <div class="product-info">
            <span class="product-brand">${prod.brand}</span>
            <h3 class="product-title" onclick="openProductDetail('${prod.id}')">${prod.name}</h3>
            <div class="product-price-row">
                <div class="price-block">
                    ${priceHtml}
                </div>
                <button class="btn-quick-view" onclick="openProductDetail('${prod.id}')" aria-label="Quick View">
                    <i class="ph ph-eye"></i>
                </button>
            </div>
        </div>
    </article>
    `;
}

// --- TOGGLE FAVORITE SHORTCUT ---
window.toggleFavorite = (id, event) => {
    event.stopPropagation();
    const favBtn = event.currentTarget;
    const heart = favBtn.querySelector("i");
    
    if (heart.classList.contains("ph")) {
        heart.classList.replace("ph", "ph-fill");
        favBtn.style.color = "var(--accent)";
        showToast("Added to Favorites", "success");
    } else {
        heart.classList.replace("ph-fill", "ph");
        favBtn.removeAttribute("style");
        showToast("Removed from Favorites", "success");
    }
};

// --- RENDER TESTIMONIAL CAROUSEL ---
function initTestimonials() {
    const wrapper = document.getElementById("reviews-wrapper");
    const prevBtn = document.getElementById("prev-review-btn");
    const nextBtn = document.getElementById("next-review-btn");
    if (!wrapper) return;

    wrapper.innerHTML = REVIEWS.map(rev => `
        <div class="review-slide">
            <div class="review-card">
                <div class="review-rating">
                    ${Array(rev.rating).fill('<i class="ph-fill ph-star"></i>').join('')}
                </div>
                <blockquote class="review-quote">"${rev.quote}"</blockquote>
                <div class="review-user">
                    <div class="review-avatar">${rev.initials}</div>
                    <div class="review-user-info">
                        <h4>${rev.name}</h4>
                        <span>${rev.role}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    const updateSliderPosition = () => {
        wrapper.style.transform = `translateX(-${activeReviewsIndex * 100}%)`;
    };

    nextBtn.addEventListener("click", () => {
        activeReviewsIndex = (activeReviewsIndex + 1) % REVIEWS.length;
        updateSliderPosition();
    });

    prevBtn.addEventListener("click", () => {
        activeReviewsIndex = (activeReviewsIndex - 1 + REVIEWS.length) % REVIEWS.length;
        updateSliderPosition();
    });
}

// --- ACCORDION FAQ ENGINE ---
function initFAQ() {
    const faqQuestions = document.querySelectorAll(".faq-question");
    
    faqQuestions.forEach(q => {
        q.addEventListener("click", () => {
            const faqItem = q.parentElement;
            const answer = q.nextElementSibling;
            
            const isOpen = faqItem.classList.contains("open");
            
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("open");
                item.querySelector(".faq-answer").style.maxHeight = null;
            });
            
            if (!isOpen) {
                faqItem.classList.add("open");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}

// --- LIMITED COUNTDOWN TIMER ---
function initCountdown() {
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const updateTimer = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            clearInterval(timerInterval);
            countdownEl.innerHTML = "<h4>Offer Expired</h4>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}

// --- SHOP SIDEBAR FILTERS BUILDER ---
function initFilters() {
    const brandFilters = document.getElementById("brand-filters");
    const categoryFilters = document.getElementById("category-filters");
    const colorFilters = document.getElementById("color-filters");
    const sizeFilters = document.getElementById("size-filters");
    const priceSlider = document.getElementById("price-slider");
    const priceVal = document.getElementById("price-val");
    const searchInput = document.getElementById("product-search-input");
    const clearBtn = document.getElementById("clear-filters-btn");
    
    const brands = [...new Set(PRODUCTS.map(p => p.brand))];
    const categories = [...new Set(PRODUCTS.map(p => p.category))];
    
    const allColors = [];
    const colorMap = new Map();
    PRODUCTS.forEach(p => {
        p.colors.forEach(c => {
            if (!colorMap.has(c.name)) {
                colorMap.set(c.name, c.code);
                allColors.push(c);
            }
        });
    });

    const sizes = [5, 6, 7, 8, 9, 10, 11, 12];

    if (brandFilters) {
        brandFilters.innerHTML = brands.map(b => `
            <label class="filter-option">
                <input type="checkbox" value="${b}" class="brand-check">
                <span>${b}</span>
            </label>
        `).join('');
    }

    if (categoryFilters) {
        categoryFilters.innerHTML = categories.map(cat => `
            <label class="filter-option">
                <input type="checkbox" value="${cat}" class="category-check">
                <span style="text-transform: capitalize;">${cat}</span>
            </label>
        `).join('');
    }

    if (colorFilters) {
        colorFilters.innerHTML = allColors.map(c => `
            <div class="color-option" data-color="${c.name}" style="background-color: ${c.code};" title="${c.name}"></div>
        `).join('');
    }

    if (sizeFilters) {
        sizeFilters.innerHTML = sizes.map(s => `
            <div class="size-option" data-size="${s}">${s}</div>
        `).join('');
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            filterState.search = e.target.value.toLowerCase().trim();
            applyFilterLogic();
        });
    }

    document.querySelectorAll(".brand-check").forEach(cb => {
        cb.addEventListener("change", () => {
            if (cb.checked) {
                filterState.brands.push(cb.value);
            } else {
                filterState.brands = filterState.brands.filter(b => b !== cb.value);
            }
            applyFilterLogic();
        });
    });

    document.querySelectorAll(".category-check").forEach(cb => {
        cb.addEventListener("change", () => {
            if (cb.checked) {
                filterState.categories.push(cb.value);
            } else {
                filterState.categories = filterState.categories.filter(cat => cat !== cb.value);
            }
            applyFilterLogic();
        });
    });

    if (priceSlider) {
        priceSlider.addEventListener("input", (e) => {
            filterState.maxPrice = parseFloat(e.target.value);
            priceVal.innerText = `$${filterState.maxPrice}`;
            applyFilterLogic();
        });
    }

    document.querySelectorAll(".color-option").forEach(swatch => {
        swatch.addEventListener("click", () => {
            const colorName = swatch.getAttribute("data-color");
            if (swatch.classList.contains("active")) {
                swatch.classList.remove("active");
                filterState.colors = filterState.colors.filter(c => c !== colorName);
            } else {
                swatch.classList.add("active");
                filterState.colors.push(colorName);
            }
            applyFilterLogic();
        });
    });

    document.querySelectorAll(".size-option").forEach(sizeBox => {
        sizeBox.addEventListener("click", () => {
            const sizeVal = parseFloat(sizeBox.getAttribute("data-size"));
            if (sizeBox.classList.contains("active")) {
                sizeBox.classList.remove("active");
                filterState.sizes = filterState.sizes.filter(s => s !== sizeVal);
            } else {
                sizeBox.classList.add("active");
                filterState.sizes.push(sizeVal);
            }
            applyFilterLogic();
        });
    });

    if (clearBtn) {
        clearBtn.addEventListener("click", resetAllFilters);
    }

    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            applyFilterLogic();
        });
    }

    const mobFilterOpen = document.getElementById("mobile-filter-open");
    const shopSidebar = document.getElementById("shop-sidebar");
    
    if (mobFilterOpen && shopSidebar) {
        mobFilterOpen.addEventListener("click", (e) => {
            e.stopPropagation();
            shopSidebar.classList.toggle("open");
            if (shopSidebar.classList.contains("open")) {
                mobFilterOpen.innerHTML = `<i class="ph ph-x"></i> Close`;
            } else {
                mobFilterOpen.innerHTML = `<i class="ph ph-sliders-horizontal"></i> Filters`;
            }
        });
        
        document.addEventListener("click", (e) => {
            if (window.innerWidth <= 1024 && !shopSidebar.contains(e.target) && e.target !== mobFilterOpen) {
                shopSidebar.classList.remove("open");
                mobFilterOpen.innerHTML = `<i class="ph ph-sliders-horizontal"></i> Filters`;
            }
        });
    }
}

// --- RESET FILTERS HELPER ---
function resetAllFilters() {
    filterState = {
        search: '',
        brands: [],
        categories: [],
        maxPrice: 300,
        colors: [],
        sizes: []
    };

    const searchInput = document.getElementById("product-search-input");
    if (searchInput) searchInput.value = "";

    const priceSlider = document.getElementById("price-slider");
    const priceVal = document.getElementById("price-val");
    if (priceSlider) {
        priceSlider.value = 300;
        priceVal.innerText = "$300";
    }

    document.querySelectorAll(".brand-check, .category-check").forEach(cb => cb.checked = false);
    document.querySelectorAll(".color-option, .size-option").forEach(el => el.classList.remove("active"));
    
    applyFilterLogic();
}

// --- FILTER ACTION PIPELINE ---
function applyFilterLogic() {
    let filteredList = [...PRODUCTS];

    if (filterState.search) {
        filteredList = filteredList.filter(p => 
            p.name.toLowerCase().includes(filterState.search) || 
            p.brand.toLowerCase().includes(filterState.search) ||
            p.category.toLowerCase().includes(filterState.search)
        );
    }

    if (filterState.brands.length > 0) {
        filteredList = filteredList.filter(p => filterState.brands.includes(p.brand));
    }

    if (filterState.categories.length > 0) {
        filteredList = filteredList.filter(p => filterState.categories.includes(p.category));
    }

    filteredList = filteredList.filter(p => p.price <= filterState.maxPrice);

    if (filterState.colors.length > 0) {
        filteredList = filteredList.filter(p => 
            p.colors.some(c => filterState.colors.includes(c.name))
        );
    }

    if (filterState.sizes.length > 0) {
        filteredList = filteredList.filter(p => 
            p.sizes.some(s => filterState.sizes.includes(s))
        );
    }

    if (currentSort === 'price-low') {
        filteredList.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filteredList.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'popularity') {
        filteredList.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'newest') {
        filteredList.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
    }

    renderFilteredGrid(filteredList);
}

// --- EXPOSE CATEGORY NAVIGATION FROM CARD CLICK ---
window.filterByCategory = (categoryName) => {
    navigateToSection('shop-section');
    resetAllFilters();
    filterState.categories = [categoryName];
    
    const checkboxes = document.querySelectorAll(".category-check");
    checkboxes.forEach(cb => {
        if (cb.value === categoryName) {
            cb.checked = true;
        }
    });

    applyFilterLogic();
};

// --- RENDER DYNAMIC PRODUCTS GRID (SHOP) ---
function renderShopCatalog() {
    renderFilteredGrid(PRODUCTS);
}

function renderFilteredGrid(itemsList) {
    const shopGrid = document.getElementById("shop-products-grid");
    const countLabel = document.getElementById("results-count-num");
    
    if (!shopGrid) return;

    if (countLabel) countLabel.innerText = itemsList.length;

    if (itemsList.length === 0) {
        shopGrid.innerHTML = `
        <div class="empty-catalog-message">
            <i class="ph ph-sneaker-question" style="font-size: 3.5rem; color: var(--accent); margin-bottom: 16px;"></i>
            <h3>No matches found</h3>
            <p>Try resetting filters or adjusting search queries to explore collections.</p>
        </div>
        `;
        shopGrid.style.gridTemplateColumns = "1fr";
        return;
    }

    shopGrid.removeAttribute("style");
    shopGrid.innerHTML = itemsList.map(prod => createProductCardHtml(prod)).join('');
}

// --- PRODUCT DETAILS MODAL MANAGER ---
function initModalControls() {
    const modal = document.getElementById("product-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const policyModal = document.getElementById("policy-modal");
    const policyCloseBtn = document.getElementById("policy-close-btn");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }

    if (policyCloseBtn) {
        policyCloseBtn.addEventListener("click", () => policyModal.classList.remove("open"));
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
        if (e.target === policyModal) policyModal.classList.remove("open");
    });
}

// --- OPEN PRODUCT DETAILS PANEL ---
window.openProductDetail = (productId) => {
    const modal = document.getElementById("product-modal");
    const contentArea = document.getElementById("modal-content-area");
    if (!modal || !contentArea) return;

    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const hasDiscount = prod.originalPrice ? true : false;
    const priceHtml = hasDiscount 
        ? `<span class="price-original">$${prod.originalPrice}</span><span class="price">$${prod.price}</span>`
        : `<span class="price">$${prod.price}</span>`;
    
    const stockClass = prod.stockStatus === 'in-stock' ? 'in-stock' : 'low-stock';
    const stockLabel = prod.stockStatus === 'in-stock' ? 'In Stock' : 'Low Stock (Few Left)';

    const relatedProducts = PRODUCTS.filter(p => p.category === prod.category && p.id !== prod.id).slice(0, 3);
    let relatedHtml = "";
    if (relatedProducts.length > 0) {
        relatedHtml = `
        <div class="related-products-section">
            <h4>You May Also Like</h4>
            <div class="related-grid">
                ${relatedProducts.map(rel => `
                    <div class="product-card" onclick="openProductDetail('${rel.id}')">
                        <div class="product-img-wrapper" style="height: 160px; padding: 12px;">
                            <div class="product-img">${getProductSVG(rel.type, rel.colors[0].code)}</div>
                        </div>
                        <div class="product-info" style="padding: 16px;">
                            <h5 style="font-size: 0.95rem; font-weight: 600; margin-bottom: 6px;">${rel.name}</h5>
                            <span class="price" style="font-size: 1rem;">$${rel.price}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    }

    contentArea.innerHTML = `
    <div class="product-details-grid" data-product-id="${prod.id}">
        <!-- Gallery -->
        <div class="details-gallery">
            <div class="gallery-main" id="modal-gallery-main">
                ${getProductSVG(prod.type, prod.colors[0].code)}
            </div>
            <div class="gallery-thumbs">
                ${prod.colors.map((c, idx) => `
                    <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="swapDetailSwatch('${prod.type}', '${c.code}', this)">
                        ${getProductSVG(prod.type, c.code)}
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Spec Sheet -->
        <div class="details-info">
            <span class="details-brand">${prod.brand}</span>
            <h2 class="details-title">${prod.name}</h2>
            
            <div class="details-price-row">
                ${priceHtml}
                <span class="stock-badge ${stockClass}">${stockLabel}</span>
            </div>

            <p class="details-description">${prod.description}</p>

            <div class="details-options">
                <div class="option-select-group">
                    <h5>Select Color</h5>
                    <div class="color-options" id="modal-color-picker">
                        ${prod.colors.map((c, idx) => `
                            <div class="color-option ${idx === 0 ? 'active' : ''}" style="background-color: ${c.code};" data-color-name="${c.name}" title="${c.name}" onclick="swapDetailColor('${prod.type}', '${c.code}', this)"></div>
                        `).join('')}
                    </div>
                </div>

                <div class="option-select-group">
                    <h5>Select Size (US)</h5>
                    <div class="size-grid" id="modal-size-picker">
                        ${prod.sizes.map((s, idx) => `
                            <div class="size-option ${idx === 0 ? 'active' : ''}" data-size-val="${s}" onclick="selectDetailSize(this)">${s}</div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="details-actions">
                <button class="btn btn-primary" onclick="handleModalAddToCart()">Add to Cart</button>
                <button class="btn btn-secondary" onclick="simulateAddToFavorites('${prod.name}')"><i class="ph ph-heart"></i> Favorite</button>
            </div>
        </div>
    </div>
    ${relatedHtml}
    `;

    modal.classList.add("open");
};

window.swapDetailSwatch = (type, colorCode, element) => {
    const mainGallery = document.getElementById("modal-gallery-main");
    if (mainGallery) {
        mainGallery.innerHTML = getProductSVG(type, colorCode);
    }
    
    document.querySelectorAll(".thumb-item").forEach(el => el.classList.remove("active"));
    element.classList.add("active");
};

window.swapDetailColor = (type, colorCode, element) => {
    element.parentElement.querySelectorAll(".color-option").forEach(el => el.classList.remove("active"));
    element.classList.add("active");
    
    const mainGallery = document.getElementById("modal-gallery-main");
    if (mainGallery) {
        mainGallery.innerHTML = getProductSVG(type, colorCode);
    }
};

window.selectDetailSize = (element) => {
    element.parentElement.querySelectorAll(".size-option").forEach(el => el.classList.remove("active"));
    element.classList.add("active");
};

// --- SIMULATED USER ACTIONS ---
window.simulateAddToCart = (productName) => {
    // Left as fallback trigger
    showToast(`Added ${productName} to your shopping bag!`, "success");
};

window.simulateAddToFavorites = (productName) => {
    showToast(`${productName} added to favorites checklist.`, "success");
};

// --- TOAST NOTIFICATIONS HELPER ---
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    const icon = type === "success" ? `<i class="ph-fill ph-check-circle"></i>` : `<i class="ph-fill ph-info"></i>`;
    
    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "slideInToast 0.3s ease reverse";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- POLICY CONTENT RENDER CONTROLLER ---
window.openPolicyModal = (type) => {
    const policyModal = document.getElementById("policy-modal");
    const contentArea = document.getElementById("policy-modal-content");
    if (!policyModal || !contentArea) return;

    let contentHtml = "";

    if (type === 'privacy') {
        contentHtml = `
        <div class="policy-content">
            <h2>Privacy Policy</h2>
            <p><strong>Effective Date: August 2, 2026</strong></p>
            <p>At SoleStyle, accessible from solestyle.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SoleStyle and how we use it.</p>
            <h3>1. Information We Collect</h3>
            <p>We collect personal information that you provide directly to us when filling out forms or subscribing to newsletters. This includes name, email address, phone number, and physical billing details.</p>
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect in various ways, including to provide, operate, maintain, improve, and personalize our website experience.</p>
        </div>
        `;
    } else {
        contentHtml = `
        <div class="policy-content">
            <h2>Terms & Conditions</h2>
            <p><strong>Effective Date: August 2, 2026</strong></p>
            <p>Welcome to SoleStyle! These terms and conditions outline the rules and regulations for the use of SoleStyle's Website, located at solestyle.com.</p>
            <h3>1. Intellectual Property Rights</h3>
            <p>Other than the content you own, under these Terms, SoleStyle and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
            <h3>2. Limitation of Liability</h3>
            <p>In no event shall SoleStyle, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.</p>
        </div>
        `;
    }

    contentArea.innerHTML = contentHtml;
    policyModal.classList.add("open");
};

// --- CONTACT FORM SUBMISSION MANAGER ---
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("contact-name").value;
        const submitBtn = form.querySelector("button[type='submit']");
        submitBtn.innerText = "Sending Message...";
        submitBtn.disabled = true;

        setTimeout(() => {
            showToast(`Thank you, ${name}! Your message was delivered.`, "success");
            form.reset();
            submitBtn.innerText = "Send Message";
            submitBtn.disabled = false;
        }, 1200);
    });
}

// --- NEWSLETTER FORM SUBMISSION MANAGER ---
function initNewsletterForm() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = form.querySelector("input[type='email']");
        
        showToast(`Subscribed successfully with ${emailInput.value}!`, "success");
        form.reset();
    });
}

// ==========================================
// --- ALIGNED CAFE FEATURES INTEGRATION ---
// ==========================================

// --- 1. ACTIVE SHOPPING BAG SIDEBAR ---
function initCartSidebar() {
    const cartBtn = document.getElementById("cart-btn");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartCloseBtn = document.getElementById("cart-sidebar-close-btn");
    const cartOverlay = document.getElementById("cart-sidebar-overlay");

    if (!cartBtn || !cartSidebar) return;

    const toggleCart = () => {
        cartSidebar.classList.toggle("open");
        cartOverlay.classList.toggle("open");
    };

    cartBtn.addEventListener("click", toggleCart);
    if (cartCloseBtn) cartCloseBtn.addEventListener("click", toggleCart);
    if (cartOverlay) cartOverlay.addEventListener("click", toggleCart);
}

// Modal Quick Add Handler
window.handleModalAddToCart = () => {
    const grid = document.querySelector(".product-details-grid");
    if (!grid) return;

    const prodId = grid.getAttribute("data-product-id");
    const activeColor = grid.querySelector("#modal-color-picker .color-option.active").getAttribute("data-color-name");
    const activeSize = grid.querySelector("#modal-size-picker .size-option.active").getAttribute("data-size-val");

    addToCart(prodId, activeSize, activeColor);
    document.getElementById("product-modal").classList.remove("open");
};

// Add product to Cart State
function addToCart(prodId, size, color) {
    const product = PRODUCTS.find(p => p.id === prodId);
    if (!product) return;

    // Check if duplicate item exists
    const existing = cart.find(item => item.id === prodId && item.size === size && item.color === color);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: prodId,
            name: product.name,
            price: product.price,
            size: size,
            color: color,
            type: product.type,
            quantity: 1
        });
    }

    updateCartUI();
    showToast(`Added ${product.name} (Size ${size}, ${color}) to your shopping bag!`, "success");
    
    // Automatically open Cart Sidebar
    document.getElementById("cart-sidebar").classList.add("open");
    document.getElementById("cart-sidebar-overlay").classList.add("open");
}

// Update Cart Sidebar Items & Total Subtotal
function updateCartUI() {
    const itemsArea = document.getElementById("cart-sidebar-items-area");
    const subtotalEl = document.getElementById("cart-subtotal-val");
    const cartBadge = document.querySelector(".cart-count");

    if (!itemsArea) return;

    let subtotal = 0;
    let totalItemsCount = 0;

    if (cart.length === 0) {
        itemsArea.innerHTML = `
        <div class="empty-cart-message" style="text-align: center; margin-top: 60px; color: var(--text-muted);">
            <i class="ph ph-shopping-bag" style="font-size: 3rem; margin-bottom: 12px; display: inline-block;"></i>
            <p>Your shopping bag is empty.</p>
        </div>
        `;
    } else {
        itemsArea.innerHTML = cart.map((item, index) => {
            subtotal += item.price * item.quantity;
            totalItemsCount += item.quantity;
            
            // Generate matching mini shoe preview
            const matchingProduct = PRODUCTS.find(p => p.id === item.id);
            const activeColorObj = matchingProduct.colors.find(c => c.name === item.color);
            const hex = activeColorObj ? activeColorObj.code : "#ff4757";
            const thumbnailSvg = getProductSVG(item.type, hex);

            return `
            <div class="cart-item">
                <div class="cart-item-img">
                    ${thumbnailSvg}
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-meta">Size: ${item.size} | ${item.color}</p>
                    <span class="cart-item-price">$${item.price}</span>
                </div>
                <div class="cart-item-controls">
                    <div class="cart-qty-btn-row">
                        <button class="cart-qty-btn" onclick="adjustQty(${index}, -1)">-</button>
                        <span class="cart-qty-val">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="adjustQty(${index}, 1)">+</button>
                    </div>
                    <button class="cart-remove-btn" onclick="removeCartItem(${index})"><i class="ph ph-trash"></i> Remove</button>
                </div>
            </div>
            `;
        }).join('');
    }

    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    if (cartBadge) cartBadge.innerText = totalItemsCount;
}

window.adjustQty = (index, delta) => {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
};

window.removeCartItem = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

window.triggerCheckoutFlow = () => {
    if (cart.length === 0) {
        showToast("Please add items to your shopping bag first.", "error");
        return;
    }
    
    showToast("Processing Order checkout demo... Success!", "success");
    cart = [];
    updateCartUI();
    document.getElementById("cart-sidebar").classList.remove("open");
    document.getElementById("cart-sidebar-overlay").classList.remove("open");
};

// --- 2. PRIVATE FITTING RESERVATION SESSION FORM ---
function initFittingForm() {
    const form = document.getElementById("fitting-booking-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("booking-name").value;
        const date = document.getElementById("booking-date").value;
        const time = document.getElementById("booking-time").value;

        const submitBtn = form.querySelector("button[type='submit']");
        submitBtn.innerText = "Booking Session...";
        submitBtn.disabled = true;

        setTimeout(() => {
            showToast(`Thank you, ${name}! Fitting request confirmed for ${date} at ${time}.`, "success");
            form.reset();
            submitBtn.innerText = "Confirm Appointment Request";
            submitBtn.disabled = false;
        }, 1200);
    });
}

// --- 3. SHOWCASE GALLERY LIGHTBOX ---
function initLightboxController() {
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lightbox-close-btn");
    const prevBtn = document.getElementById("lightbox-prev-btn");
    const nextBtn = document.getElementById("lightbox-next-btn");

    if (!lightbox) return;

    if (closeBtn) {
        closeBtn.addEventListener("click", () => lightbox.classList.remove("open"));
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => navigateLightbox(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => navigateLightbox(1));
    }

    window.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("open");
    });
}

window.openLightbox = (index) => {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    if (!lightbox || !img || !caption) return;

    currentLightboxIndex = index;
    const item = GALLERY_ITEMS[index];

    img.src = item.src;
    caption.innerText = item.caption;

    lightbox.classList.add("open");
};

function navigateLightbox(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const item = GALLERY_ITEMS[currentLightboxIndex];

    img.src = item.src;
    caption.innerText = item.caption;
}

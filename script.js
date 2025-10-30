// ============================================
// SLIDE NAVIGATION
// ============================================
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlidesElement = document.getElementById('totalSlides');
const currentSlideElement = document.getElementById('currentSlide');

// Set total slides
totalSlidesElement.textContent = slides.length;

// Function to show specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show current slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // Update counter
    currentSlideElement.textContent = index + 1;
    
    // Update current slide index
    currentSlideIndex = index;
}

// Next slide function
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
    }
}

// Previous slide function
function previousSlide() {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    }
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next slide
        nextSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous slide
        previousSlide();
    }
}

// ============================================
// PARTICLE ANIMATION
// ============================================
function createParticles(containerId, particleCount = 50) {
    const particlesContainer = document.getElementById(containerId);
    
    if (!particlesContainer) return;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 60 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Create particles for all slides
createParticles('particles-1', 50);
createParticles('particles-2', 30);
createParticles('particles-3', 30);
createParticles('particles-4', 30);
createParticles('particles-5', 30);

// ============================================
// ANIMATION ON SLIDE CHANGE
// ============================================
function animateSlideContent() {
    const activeSlide = document.querySelector('.slide.active');
    const contentElements = activeSlide.querySelectorAll('.content > *');
    
    contentElements.forEach((element, index) => {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = '';
        }, 10);
    });
}

// Re-trigger animations when slide changes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.classList.contains('active')) {
                setTimeout(animateSlideContent, 50);
            }
        }
    });
});

slides.forEach(slide => {
    observer.observe(slide, { attributes: true });
});

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    console.log('ServTalks Presentation Loaded Successfully! 🎉');
    console.log('Navigation:');
    console.log('- Arrow Keys: Navigate slides');
    console.log('- Space Bar: Next slide');
    console.log('- Click indicators: Jump to slide');
    console.log('- Swipe (mobile): Navigate slides');
});

// Create particles for slides 6-10
createParticles('particles-6', 30);
createParticles('particles-7', 30);
createParticles('particles-8', 30);
createParticles('particles-9', 30);
createParticles('particles-10', 30);

// ============================================
// DEPARTMENT MODAL FUNCTIONALITY
// ============================================

const departmentData = {
    management: {
        icon: '📊',
        title: 'Management',
        subtitle: 'Strategic Business Insights',
        intro: 'For Management, we provide valuable Business Insights through dedicated pages and dashboards.',
        features: [
            {
                icon: '📈',
                title: 'Interactive Dashboards',
                description: 'Dashboards consolidate KPIs, region-wise sales, delivery metrics, and more.'
            },
            {
                icon: '🔍',
                title: 'Filterable Data',
                description: 'We make these pages interactable, so managers can filter the data and see what they want, when they want it for strategic decision making.'
            }
        ],
        keyPoints: [
            { icon: '🎯', text: 'KPI Tracking' },
            { icon: '🗺️', text: 'Region-wise Sales' },
            { icon: '📦', text: 'Delivery Metrics' },
            { icon: '⚡', text: 'Real-time Updates' }
        ]
    },
    operations: {
        icon: '⚙️',
        title: 'Operations',
        subtitle: 'Day-to-Day Workflow Excellence',
        intro: 'The Operations team is central to ServCrust\'s day-to-day work, and we empower them significantly.',
        features: [
            {
                icon: '🤝',
                title: 'Supplier/Customer Onboarding',
                description: 'We build screens for onboarding new partners and B2B customers, maintaining their stock visibility, and setting their active/inactive status.'
            },
            {
                icon: '📋',
                title: 'Order Management System (OMS)',
                description: 'Operations uses OMS screens to track both B2C and B2B orders, assign deliveries, and track progress in real-time.'
            },
            {
                icon: '📞',
                title: 'Support/Telecaller Page',
                description: 'Our support team can interact with the Telecaller page to push both physical and digital marketing leads to the on-field team for conversion, complete with necessary tracking.'
            }
        ],
        keyPoints: [
            { icon: '🏢', text: 'Partner Onboarding' },
            { icon: '📦', text: 'Order Tracking' },
            { icon: '🚚', text: 'Delivery Assignment' },
            { icon: '📱', text: 'Lead Management' }
        ]
    },
    finance: {
        icon: '💰',
        title: 'Finance',
        subtitle: 'Clear Financial Insights',
        intro: 'The Finance team utilizes our interfaces to manage pricing, taxes, and comprehensive financial reporting.',
        features: [
            {
                icon: '💵',
                title: 'Pricing & Configuration',
                description: 'See and configure pricing, taxes, and payment confirmations with ease.'
            },
            {
                icon: '📊',
                title: 'Financial Reports',
                description: 'Use sophisticated financial reports for budgeting and planning. The Frontend translates dense, numerical backend data into clear, structured reports that Finance can rely on and act upon.'
            }
        ],
        keyPoints: [
            { icon: '💲', text: 'Pricing Management' },
            { icon: '📝', text: 'Tax Configuration' },
            { icon: '✅', text: 'Payment Confirmation' },
            { icon: '📈', text: 'Budget Planning' }
        ]
    },
    sales: {
        icon: '🎯',
        title: 'Sales Team',
        subtitle: 'Empowering Field Warriors',
        intro: 'We empowered our on-field warriors, the Sales Executives, through the SMART App.',
        features: [
            {
                icon: '📱',
                title: 'SMART App Features',
                description: 'This is one of the most crucial tools we\'ve built, enabling core functionality.',
                list: [
                    'Price analysis',
                    'Lead capturing',
                    'Navigation to prospective customer villages',
                    'Recording orders and cash receivables'
                ]
            },
            {
                icon: '🔄',
                title: 'Synchronized Data',
                description: 'Crucially, this data can also be viewed by authorized Operations personnel in the office, providing needed support to SE and allowing performance tracking.'
            }
        ],
        keyPoints: [
            { icon: '💰', text: 'Price Analysis' },
            { icon: '🎯', text: 'Lead Capturing' },
            { icon: '🗺️', text: 'Smart Navigation' },
            { icon: '📊', text: 'Performance Tracking' }
        ]
    }
};

function openDepartmentModal(department) {
    const modal = document.getElementById('departmentModal');
    const modalBody = document.getElementById('modalBody');
    const data = departmentData[department];
    
    if (!data) return;
    
    // Build modal content
    let featuresHTML = data.features.map(feature => {
        let featureContent = `
            <div class="feature-card">
                <div class="feature-header">
                    <div class="feature-icon">${feature.icon}</div>
                    <h3>${feature.title}</h3>
                </div>
                <p class="feature-description">${feature.description}</p>
        `;
        
        if (feature.list) {
            featureContent += `
                <ul class="feature-list">
                    ${feature.list.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        }
        
        featureContent += `</div>`;
        return featureContent;
    }).join('');
    
    let keyPointsHTML = data.keyPoints.map(point => `
        <div class="key-point-item">
            <span>${point.icon}</span>
            <p>${point.text}</p>
        </div>
    `).join('');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-dept-icon">${data.icon}</div>
            <h2 class="modal-title">${data.title}</h2>
            <p class="modal-subtitle">${data.subtitle}</p>
        </div>
        
        <div class="features-section">
            <div class="features-intro">
                <p>${data.intro}</p>
            </div>
            ${featuresHTML}
        </div>
        
        <div class="key-points">
            <h3><span>⚡</span> Key Capabilities</h3>
            <div class="key-points-list">
                ${keyPointsHTML}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDepartmentModal() {
    const modal = document.getElementById('departmentModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDepartmentModal();
    }
});

// Create particles for slides 11-13
createParticles('particles-11', 30);
createParticles('particles-12', 30);
createParticles('particles-13', 30);
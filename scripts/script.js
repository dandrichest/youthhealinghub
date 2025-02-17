document.addEventListener('DOMContentLoaded', function() {
    // Update footer with current year and last modified date
    function updateFooter() {
        const currentYear = new Date().getFullYear();
        const lastModified = document.lastModified;
        document.getElementById('current-year').innerHTML = `&copy; ${currentYear} <span class="flower-symbol">✿</span>Daniel Oyeniyi<span class="flower-symbol">✿</span>Nigeria`;
        document.getElementById('lastModified').innerHTML = `Last Updated: ${lastModified}`;
    }

    updateFooter();

    // Abuse data
    const Abuse = [
        { id: "fc-1888", name: "Physical Abuse", averagerating: 4.5 },
        { id: "fc-2050", name: "Emotional Abuse", averagerating: 4.7 },
        { id: "fs-1987", name: "Sexual Abuse", averagerating: 3.5 },
        { id: "ac-2000", name: "Verbal Abuse", averagerating: 3.9 },
        { id: "jj-1969", name: "Neglect", averagerating: 5.0 }
    ];

    // Populate Abuses select element
    const AbuseSelect = document.getElementById('Abuse');
    Abuse.forEach(abuse => {
        const option = document.createElement('option');
        option.value = abuse.id;
        option.textContent = abuse.name;
        AbuseSelect.appendChild(option);
    });

    // Vices data
    const Vices = [
        { id: "fc-1888", name: "Smoking & Alcohol", averagerating: 4.5 },
        { id: "fc-2050", name: "Drug Abuse", averagerating: 4.7 },
        { id: "fs-1987", name: "Gambling", averagerating: 3.5 },
        { id: "ac-2000", name: "Cultism", averagerating: 3.9 },
        { id: "jj-1969", name: "Sexual Promiscuity", averagerating: 5.0 }
    ];

    // Populate Vices select element
    const VicesSelect = document.getElementById('Vices');
    Vices.forEach(vice => {
        const option = document.createElement('option');
        option.value = vice.id;
        option.textContent = vice.name;
        VicesSelect.appendChild(option);
    });

    // Handle rating selection
    const ratingInputs = document.querySelectorAll('.rating input');
    ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
            console.log('Selected rating:', this.value);
        });
    });

    // Track review submission count
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);

    // Display review submission count
    if (document.getElementById('review-counter')) {
        document.getElementById('review-counter').textContent = `You have submitted ${reviewCount} reviews.`;
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        });
    }
});

const categoryButtons = document.querySelectorAll('.category-btn');
const menuCards = document.querySelectorAll('.menu-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');

        menuCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

let cartCount = 0;

const addButtons = document.querySelectorAll('.add-btn');
const cartCountSpan = document.getElementById('cart-count');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;

        // UX feedback
        button.textContent = "Added ✓";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = "Add";
            button.disabled = false;
        }, 1000);
    });
});

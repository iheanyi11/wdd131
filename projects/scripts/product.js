document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const closeBtn = document.querySelector(".close");

    products.forEach(product => {
        product.addEventListener("click", () => {
            const name = product.getAttribute("data-name");
            const description = product.getAttribute("data-description");
            const price = product.getAttribute("data-price");
            const image = product.getAttribute("data-image");

            modalImage.src = image;
            modalName.textContent = name;
            modalDescription.textContent = description;
            modalPrice.textContent = price;

            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  // Get all dropdown parents
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  dropdownParents.forEach((parent) => {
    const dropdownInfo = parent.querySelector(".dropdown-info");

    // Add click event to toggle dropdown
    parent.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent click from propagating
      const isVisible = dropdownInfo.style.display === "block";

      // Hide all dropdowns before showing the current one
      document.querySelectorAll(".dropdown-info").forEach((info) => {
        info.style.display = "none";
      });

      // Toggle visibility of the current dropdown
      dropdownInfo.style.display = isVisible ? "none" : "block";
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-info").forEach((info) => {
      info.style.display = "none";
    });
  });
});

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
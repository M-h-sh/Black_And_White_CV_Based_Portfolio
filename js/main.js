const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Function to open the modal and play the video
function playVideo(event) {
  event.preventDefault(); // Prevent default link behavior
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("modalVideo");
  
  modal.setAttribute("aria-hidden", "false");
  video.play();
}

// Function to close the modal and stop the video
function closeModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("modalVideo");
  
  modal.setAttribute("aria-hidden", "true");
  video.pause();
  video.currentTime = 0; // Reset video playback
}

// Close modal when clicking outside the content
window.addEventListener("click", (event) => {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
      closeModal();
  }
});

$(document).ready(function() {
  // Get the current year and set it to the span with id "current-year"
  const currentYear = new Date().getFullYear();
  $('#current-year').text(currentYear);
});

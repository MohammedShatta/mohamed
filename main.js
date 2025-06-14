    // Smooth scroll to section
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('menu-toggle').querySelector('i').classList.remove('fa-times');
        document.getElementById('menu-toggle').querySelector('i').classList.add('fa-bars');
      }
  
      // Toggle mobile menu
      document.getElementById('menu-toggle').addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-toggle').querySelector('i');
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        } else {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      });
  
      // slideshow
      const images = document.querySelectorAll('#slider img');
      const nextBtn = document.getElementById('next');
      const prevBtn = document.getElementById('prev');
      let current = 0;
      let interval;
    
      function showImage(index) {
        images.forEach((img, i) => {
          img.classList.toggle('opacity-100', i === index);
          img.classList.toggle('opacity-0', i !== index);
        });
      }
    
      function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
      }
    
      function prevImage() {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
      }
    
      nextBtn.addEventListener('click', () => {
        nextImage();
        resetInterval();
      });
    
      prevBtn.addEventListener('click', () => {
        prevImage();
        resetInterval();
      });
    
      function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextImage, 3000);
      }
    
      interval = setInterval(nextImage, 3000);
      // Testimonial slider
      let activeTestimonial = 0;
      const testimonials = 3; // Number of testimonials
      function setActiveTestimonial(index) {
        // Remove active styles
        document.getElementById(`testimonial-${activeTestimonial}`).classList.remove('scale-105', 'shadow-lg');
        document.getElementById(`dot-${activeTestimonial}`).classList.remove('bg-gray-800');
        document.getElementById(`dot-${activeTestimonial}`).classList.add('bg-gray-300');
        // Set new active testimonial
        activeTestimonial = index;
        document.getElementById(`testimonial-${activeTestimonial}`).classList.add('scale-105', 'shadow-lg');
        document.getElementById(`dot-${activeTestimonial}`).classList.remove('bg-gray-300');
        document.getElementById(`dot-${activeTestimonial}`).classList.add('bg-gray-800');
      }
  
      // Auto-rotate testimonials every 5 seconds
      setInterval(() => {
        const next = (activeTestimonial + 1) % testimonials;
        setActiveTestimonial(next);
      }, 5000);
      
      
        // Form validation
    const contactForm = document.getElementById("contact");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const subjectInput = document.getElementById("subject");
      const messageInput = document.getElementById("message");
      const consentInput = document.getElementById("consent");
      // Simple validation
      let isValid = true;
      if (nameInput.value.trim() === "") {
        isValid = false;
        nameInput.classList.add("border-red-500");
      } else {
        nameInput.classList.remove("border-red-500");
      }
      if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.classList.add("border-red-500");
      } else {
        emailInput.classList.remove("border-red-500");
      }
      if (subjectInput.value.trim() === "") {
        isValid = false;
        subjectInput.classList.add("border-red-500");
      } else {
        subjectInput.classList.remove("border-red-500");
      }
      if (messageInput.value.trim() === "") {
        isValid = false;
        messageInput.classList.add("border-red-500");
      } else {
        messageInput.classList.remove("border-red-500");
      }
      if (!consentInput.checked) {
        isValid = false;
        document
          .querySelector(".custom-checkbox")
          .classList.add("border-red-500");
      } else {
        document
          .querySelector(".custom-checkbox")
          .classList.remove("border-red-500");
      }
      if (isValid) {
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML =
          '<i class="ri-loader-4-line animate-spin mr-2"></i> Sending...';
        submitButton.disabled = true;
        setTimeout(() => {
          contactForm.reset();
          submitButton.innerHTML =
            '<i class="ri-check-line mr-2"></i> Message Sent!';
          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
          }, 3000);
        }, 2000);
      }
    });
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }


    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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


let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slide");
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active"); // Remove 'active' from all slides
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].classList.add("active"); // Add 'active' to the current slide
            setTimeout(showSlides, 2000); // Change image every 5 seconds
        }

        function moveSlide(n) {
            slideIndex += n;
            let slides = document.getElementsByClassName("slide");
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active"); // Remove 'active' from all slides
            }
            slides[slideIndex - 1].classList.add("active"); // Add 'active' to the current slide
        }
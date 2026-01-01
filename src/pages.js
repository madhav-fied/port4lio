class Pages {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.page');
        this.currentSlide = 0;
        this.init();
    }

    init() {
        this.container.querySelector('.prev-btn').addEventListener('click', () => this.prev());
        this.container.querySelector('.next-btn').addEventListener('click', () => this.next());
    }

    next() {
        const nextSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlide);
    }

    prev() {
        const prevSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevSlide);
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
    }
}


const randomPages = new Pages(document.querySelector('.pages-random'));
const workPages = new Pages(document.querySelector('.work-pages'));


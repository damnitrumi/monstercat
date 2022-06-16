const carousel = () => {
    const $progressBars = document.querySelectorAll(".progress-bar");
    const $containers = document.querySelectorAll(".progress-btn");
    const $mySlides = document.querySelectorAll(".carousel");

    var count = 0;
    let resized = false;

    $containers.forEach((el, i) => {
        el.addEventListener("click", () => {
            //Pra a opção de selecionar tabs não funcionar abaixo de 768px
            if (window.innerWidth < 768) {
                return;
            }
            ativaProgresso(i);
        });
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth < 768 && resized == false) {
            resized = true;
            $containers.forEach((el) => {
                if (el.firstElementChild.firstElementChild.style.animation.indexOf("progress") < 0) {
                    el.style.display = "none";
                }
            })
        }

        if (window.innerWidth > 768 && resized == true) {
            resized = false;
            $containers.forEach((el) => {
                if (el.style.display = "none") {
                    el.style.display = "block";
                }
            })
        }
    })

    function ativaProgresso(i, cb = slideShow) {
        $progressBars.forEach((el) => {
            el.style.animation = "";
        });

        if (i >= 0) {
            count = i;
            clearInterval(id);
            id = setInterval(ativaProgresso, 8500);
        };

        if (count > 3) {
            count = 0;
        };

        if (window.innerWidth < 768) {
            $containers.forEach((el) => {
                el.style.display = "none"
            })

            $containers[count].style.display = "block";
        }

        $progressBars[count].style.animation = "progress 8s 1 linear forwards";
        cb(count);
        count++;
    };

    function slideShow(count) {
        $mySlides.forEach((el) => {
            el.style.display = "none";
        });

        $mySlides[count].style.display = "flow-root";
    }

    ativaProgresso();
    var id = setInterval(ativaProgresso, 8500);
}



//----------------------

const slidesLatest = () => {
    const $latestPrev = document.querySelector(".latest-releases .prev");
    const $latestNext = document.querySelector(".latest-releases .next");

    const $latestSlides = document.querySelectorAll(".latest-releases .slider-container a");

    let i = 0

    $latestPrev.addEventListener("click", () => {
        if (i > 0) {
            i--;
            if(i == 0){
                $latestPrev.classList.add("disabled");
            }
            isDisabled();
            latestSlideshow();
        }
    })

    $latestNext.addEventListener("click", () => {
        if (i < $latestSlides.length - 1) {
            i++;
            if(i == $latestSlides.length - 1){
                $latestNext.classList.add("disabled");
            }
            isDisabled();
            latestSlideshow();
        }
    })

    function isDisabled() {
        if (i > 0 && $latestPrev.className.indexOf("disabled") >= 0) {
            $latestPrev.classList.remove("disabled");
        }

        if (i < $latestSlides.length - 1 && $latestNext.className.indexOf("disabled") >= 0) {
            $latestNext.classList.remove("disabled");
        }
    }

    function latestSlideshow() {
        $latestSlides.forEach((el) => {
            el.style.display = "none";
        })

        $latestSlides[i].style.display = "flex";
    }

    latestSlideshow();
}

const slidesArtists = () => {
    const $ArtistsPrev = document.querySelector(".our-artists .prev");
    const $ArtistsNext = document.querySelector(".our-artists .next");

    const $ArtistsSlides = document.querySelectorAll(".our-artists .slider-container a");

    let i = 0

    $ArtistsPrev.addEventListener("click", () => {
        if (i > 0) {
            i--;
            if(i == 0){
                $ArtistsPrev.classList.add("disabled");
            }
            isDisabled();
            ArtistsSlideshow();
        }
    })

    $ArtistsNext.addEventListener("click", () => {
        if (i < $ArtistsSlides.length - 1) {
            i++;
            if(i == $ArtistsSlides.length - 1){
                $ArtistsNext.classList.add("disabled");
            }
            isDisabled();
            ArtistsSlideshow();
        }
    })

    function isDisabled() {
        if (i > 0 && $ArtistsPrev.className.indexOf("disabled") >= 0) {
            $ArtistsPrev.classList.remove("disabled");
        }

        if (i < $ArtistsSlides.length - 1 && $ArtistsNext.className.indexOf("disabled") >= 0) {
            $ArtistsNext.classList.remove("disabled");
        }
    }

    function ArtistsSlideshow() {
        $ArtistsSlides.forEach((el) => {
            el.style.display = "none";
        })

        $ArtistsSlides[i].style.display = "block";
    }

    ArtistsSlideshow();
}

const slidesFNews = () => {
    const $FNewsPrev = document.querySelector(".featured-news .prev");
    const $FNewsNext = document.querySelector(".featured-news .next");

    const $FNewsSlides = document.querySelectorAll(".featured-news .slider-container a");

    let i = 0

    $FNewsPrev.addEventListener("click", () => {
        if (i > 0) {
            i--;
            if(i == 0){
                $FNewsPrev.classList.add("disabled");
            }
            isDisabled();
            FNewsSlideshow();
        }
    })

    $FNewsNext.addEventListener("click", () => {
        if (i < $FNewsSlides.length - 1) {
            i++;
            if(i == $FNewsSlides.length - 1){
                $FNewsNext.classList.add("disabled");
            }
            isDisabled();
            FNewsSlideshow();
        }
    })

    function isDisabled() {
        if (i > 0 && $FNewsPrev.className.indexOf("disabled") >= 0) {
            $FNewsPrev.classList.remove("disabled");
        }

        if (i < $FNewsSlides.length - 1 && $FNewsNext.className.indexOf("disabled") >= 0) {
            $FNewsNext.classList.remove("disabled");
        }
    }

    function FNewsSlideshow() {
        $FNewsSlides.forEach((el) => {
            el.style.display = "none";
        })

        $FNewsSlides[i].style.display = "block";
    }

    FNewsSlideshow();
}

const app = ()=>{
    carousel();
    slidesLatest();
    slidesArtists();
    slidesFNews();
}

app();




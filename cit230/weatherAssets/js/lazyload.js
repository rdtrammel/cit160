function setLazyLoad(imageSelector){

    const images = document.querySelectorAll(imageSelector);

    const imgOptions={
        threshold : 0,
        rootMargin : "0px 0px 200px 0px"
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
        entries.forEach(entry=>{
            if (!entry.isIntersecting) return;
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        });
    }, imgOptions);

    images.forEach(image=>{
        imgObserver.observe(image);
    })

    function preloadImage(img){
        let src = img.getAttribute('data-src');
        if (!src) return;
        img.src = src;
    }
}
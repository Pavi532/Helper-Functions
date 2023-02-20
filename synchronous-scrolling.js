// For vertical synchronous scrolling  hence the 0
// better to use these with waitForElm method

function setSynchronousScrolls() {
    const scrollbar1  = document.querySelector('.scrollbar_1');
    const scrollbar2  = document.querySelector('.scrollbar_2');

    if( scrollbar1 !== null && scrollbar2 !== null){
        scrollbar1.addEventListener('scroll', e => {
            scrollbar2.scrollTo(0, scrollbar1.scrollTop);
        });
        scrollbar2.addEventListener('scroll', e => {
            scrollbar1.scrollTo(0, scrollbar2.scrollTop);
        });
    }
}

// If scroll events do not trigger same can be achived by listening to the mousewheel event
//Won't work with touchscreens though

function synchronousScrollingOnMouseWheel() {
    const scrollbar1  = document.querySelector('.scrollbar_1');
    const scrollbar2  = document.querySelector('.scrollbar_2');

    if( scrollbar1 !== null && scrollbar2 !== null){
        scrollbar1.addEventListener('mousewheel', e => {
            e.stopPropagation(); //prevents propagation of the same event from being called (check this: https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault)
            scrollbar2.scrollTo(0, (scrollbar2.scrollTop + e.deltaY));
        });
        scrollbar2.addEventListener('mousewheel', e => {
            e.stopPropagation();
            scrollbar1.scrollTo(0, (scrollbar1.scrollTop + e.deltaY));
        });
    }
}
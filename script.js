document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.filter-select__track');
    const scrollbar = document.querySelector('.filter-select__scrollbar');
    
    function updateScrollbar() {
        const containerHeight = track.clientHeight;
        const contentHeight = track.scrollHeight;
        const scrollTop = track.scrollTop;

        if (contentHeight <= containerHeight) {
            scrollbar.style.display = 'none';
            return;
        } else {
            scrollbar.style.display = 'block';
        }

        const scrollbarHeight = 40;
        scrollbar.style.height = scrollbarHeight + 'px';

        const scrollPercentage = scrollTop / (contentHeight - containerHeight);
        const maxTop = containerHeight - scrollbarHeight;
        scrollbar.style.top = (scrollPercentage * maxTop) + 'px';
    }
    
    track.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);

    updateScrollbar();
});




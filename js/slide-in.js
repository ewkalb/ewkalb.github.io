window.addEventListener('scroll', function() {
    var slideLeftElements = document.querySelectorAll('.slide-left');
    var slideRightElements = document.querySelectorAll('.slide-right');
    var slideBottomElements = document.querySelectorAll('.slide-bottom');

    for (var i = 0; i < slideLeftElements.length; i++) {
        var slideLeftElement = slideLeftElements[i];
        var slideLeftPosition = slideLeftElement.getBoundingClientRect().top;
        var slideLeftWindowHeight = window.innerHeight;

        if (slideLeftPosition < slideLeftWindowHeight) {
            slideLeftElement.style.left = '0';
            slideLeftElement.style.opacity = '1';
        }
    }

    for (var j = 0; j < slideRightElements.length; j++) {
        var slideRightElement = slideRightElements[j];
        var slideRightPosition = slideRightElement.getBoundingClientRect().top;
        var slideRightWindowHeight = window.innerHeight;

        if (slideRightPosition < slideRightWindowHeight) {
            slideRightElement.style.right = '0';
            slideRightElement.style.opacity = '1';
        }
    }

    for (var k = 0; k < slideBottomElements.length; k++) {
        var slideBottomElement = slideBottomElements[k];
        var slideBottomPosition = slideBottomElement.getBoundingClientRect().top;
        var slideBottomWindowHeight = window.innerHeight;

        if (slideBottomPosition < slideBottomWindowHeight) {
            slideBottomElement.style.bottom = '0';
            slideBottomElement.style.opacity = '1';
        }
    }
});
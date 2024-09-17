(() => {
    let canvas = null;
    let ctx = null;

    window.addEventListener('load', () => {
        initialize();
        render();
    }, false);

    function initialize() {
        canvas = document.body.querySelector('#main_canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext('2d');
    }

    function render() {
        ctx.fillStyle = '#693';
        ctx.fillRect(80, 60, 500, 600);
    }
})();
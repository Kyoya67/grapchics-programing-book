(() => {
    let canvas = null;
    let ctx = null;

    window.addEventListener('load', () => {
        initialize();
        render();
    }, false);

    function initialize() {
        canvas = document.body.querySelector('#my_canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext('2d');
    }

    function render() {
        drawLine(0, 0, canvas.width, canvas.height);
    }

    function drawLine(x1, y1, x2, y2, color, width = 10) {
        if (color != null) {
            ctx.strokeStyle = color;
        }

        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
    }
})();

// グローバル汚染を避けるために即時関数を使って全体を囲う
(() => {
    /**
     * 描画対象となる Canvas Element
     * @type {HTMLCanvasElement}
     */
    let canvas = null;
    /**
     * Canvas2D API のコンテキスト
     * @type {CanvasRenderingContext2D}
     */
    let ctx = null;

    /**
     * ページのロードが完了したときに発火する load イベント
     */
    window.addEventListener('load', () => {
        // 初期化処理を行う
        initialize();
        // 描画処理を行う
        render();
    }, false);

    /**
     * canvas やコンテキストを初期化する
     */
    function initialize() {
        // querySelector を利用して canvas を参照
        canvas = document.body.querySelector('#main_canvas');
        if (!canvas) {
            console.error('Canvas element not found');
            return;
        }
        // canvas の大きさをウィンドウ全体を覆うように変更する
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // canvas からコンテキストを取得する
        ctx = canvas.getContext('2d');
    }

    /**
     * 描画処理を行う
     */
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const num = 6;
        let points = [];
        for (let i = 0; i < num; ++i) {
            points.push(generateRandomInt(canvas.width * 0.8), generateRandomInt(canvas.height * 0.8));
        }
        let color = getRandomHexColor();
        drawPolygon(points, color);
    }

    /**
     * 特定の範囲におけるランダムな整数の値を生成する
     * @param {number} range - 乱数を生成する範囲（0 以上 ～ range 未満）
     */
    function generateRandomInt(range) {
        return Math.floor(Math.random() * range);
    }

    function getRandomHexColor() {
        const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
    }

    /**
     * 多角形を描画する
     * @param {Array<number>} points - 多角形の各頂点の座標
     * @param {string} [color] - 多角形を描画する際の色
     */
    function drawPolygon(points, color) {
        if (Array.isArray(points) !== true || points.length < 6) {
            return;
        }

        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.moveTo(points[0], points[1]);

        for (let i = 2; i < points.length; i += 2) {
            ctx.lineTo(points[i], points[i + 1]);
        }

        ctx.closePath();
        ctx.fill();
    }
})();

import { useEffect, useRef } from 'react';

const debounce = (func: Function, delay: number) => {
    let timer_id: number;

    return () => {
        clearTimeout(timer_id);

        timer_id = setTimeout(func, delay);
    };
};

const Component = ({ analyser, data, play }: { analyser: AnalyserNode | null; data: Float32Array; play: boolean }) => {
    const canvas = useRef<HTMLCanvasElement>(null);
    const canvas_context = useRef<CanvasRenderingContext2D | null>(null);
    const frame = useRef<number>(0);

    const handle_resize = debounce(() => {
        if (!canvas.current) return;

        canvas.current.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        canvas.current.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }, 100);

    const animate = () => {
        frame.current = requestAnimationFrame(animate);

        let x = 0;

        if (!analyser || !canvas.current || !canvas_context.current) return;

        analyser.getFloatFrequencyData(data);

        canvas_context.current.fillStyle = '#171717';
        canvas_context.current.fillRect(0, 0, canvas.current.width, canvas.current.height);

        canvas_context.current.beginPath();
        canvas_context.current.lineWidth = 0.75;
        canvas_context.current.lineCap = 'round';
        canvas_context.current.strokeStyle = '#EA002A';
        canvas_context.current.moveTo(0, 0);

        for (let i = 0; i < analyser.frequencyBinCount; i++) {
            const y = -data[i] * 4;

            x += canvas.current.width / analyser.frequencyBinCount;

            canvas_context.current.lineTo(x, y);
        }

        canvas_context.current.stroke();
        canvas_context.current.closePath();
    };

    useEffect(() => {
        if (!canvas.current) return;

        canvas_context.current = canvas.current.getContext('2d');

        canvas.current.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        canvas.current.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        window.addEventListener('resize', handle_resize);

        return () => window.removeEventListener('resize', handle_resize);
    }, []);

    useEffect(() => {
        play ? (frame.current = requestAnimationFrame(animate)) : cancelAnimationFrame(frame.current);

        return () => cancelAnimationFrame(frame.current);
    }, [play]);

    return <canvas className="canvas fixed inset-0 z-[-1]" ref={canvas} />;
};

export default Component;

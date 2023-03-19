import { useRef, useEffect } from "react";

const Component = () => {
    const canvas_ref = useRef(null);

    const draw = (context: CanvasRenderingContext2D) => {
        context.fillStyle = "#FF0000";
        context.beginPath();
        context.arc(50, 100, 20, 0, 2 * Math.PI);
        context.fill();
    };

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvas_ref.current;

        // @ts-ignore
        const context: CanvasRenderingContext2D = canvas?.getContext("2d", { willReadFrequently: true });
    }, [draw]);

    return <canvas ref={canvas_ref} />;
};

export default Component;

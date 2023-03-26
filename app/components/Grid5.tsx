import { useEffect, useRef, useState } from "react";

const Component = () => {
    const canvas = useRef(null);

    const frame = useRef(0);

    const [play, set_play] = useState<boolean>(false);

    useEffect(() => {
        console.log("play", play);
        if (play) {
            frame.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(frame.current);
        }

        return () => cancelAnimationFrame(frame.current);
    }, [play]);

    const animate = () => {
        frame.current = requestAnimationFrame(animate);

        console.log("animating");

        animate();
    };

    const handle_click = () => {
        set_play(!play);
    };

    return (
        <>
            <button className="border border-red-500 fixed top-10 right-10" onClick={handle_click}>
                foo
            </button>

            <canvas ref={canvas} />
        </>
    );
};

export default Component;

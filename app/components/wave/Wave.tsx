import { MouseEvent, useRef, useState } from "react";

import Canvas from "@Components/wave/Canvas";

import Mute from "@Svgs/Mute";
import Volume from "@Svgs/Volume";

const Component = () => {
    const audio = useRef<HTMLAudioElement>(new Audio("/low_light.mp3"));

    const [play, set_play] = useState<boolean>(false);

    const handle_click = (e: MouseEvent<HTMLElement>) => {
        set_play(!play);
    };

    return (
        <div>
            <button className="white-link fixed top-9 right-9 h-8 text-krukar" onClick={handle_click}>
                {play ? <Volume /> : <Mute />}
            </button>

            <Canvas audio={audio.current} play={play} />
        </div>
    );
};

export default Component;

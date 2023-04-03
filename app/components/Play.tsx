import Mute from "@Svgs/Mute";
import Volume from "@Svgs/Volume";

const Component = ({ play, set_play }: { play: boolean; set_play: Function }) => {
    const handle_click = (new_play: boolean) => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();

        set_play(new_play);
    };

    return (
        <button aria-label="Play" className="link--fade h-7 md:h-8 text-krukar" onClick={() => handle_click(!play)} role="presentation">
            {play ? <Volume /> : <Mute />}
        </button>
    );
};

export default Component;

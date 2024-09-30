import Mute from '@Svgs/Mute';
import Volume from '@Svgs/Volume';

import { blur } from '@Lib';

export default function Component({ playing, toggle_playing }: { playing: boolean; toggle_playing: Function }) {
    const handle_click = () => {
        blur();

        toggle_playing();
    };

    return (
        <div>
            <button className="h-7 sm:h-[30px] flex items-center" onClick={handle_click}>
                {playing ? <Volume /> : <Mute />}
            </button>
        </div>
    );
}

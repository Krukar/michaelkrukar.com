import { useEffect } from 'react';

import { createTimeline, stagger, svg } from 'animejs';

const ease = 'outCubic';

export default function Component({ max_height, width }: { max_height: number; width: number }) {
    useEffect(() => {
        const tl = createTimeline();

        tl.label('start', 0)
            .add(
                svg.createDrawable('.lines__border .line'),
                {
                    duration: 1500,
                    draw: '0 1',
                    ease,
                    delay: stagger(500),
                },
                'start'
            )
            .add(
                svg.createDrawable('.lines__vertical .line'),
                {
                    duration: 750,
                    draw: '0 1',
                    ease,
                    delay: stagger(50),
                },
                'start'
            )
            .add(
                svg.createDrawable('.lines__horizontal .line'),
                {
                    duration: 1500,
                    draw: '0 1',
                    ease,
                    delay: stagger(100),
                },
                'start'
            );
    }, []);

    const size = width * 0.025;

    const number_of_vertical_lines = Math.ceil(width / size);
    const number_of_horizontal_lines = Math.floor(max_height / size);

    const height = number_of_horizontal_lines * size;

    const vertical_lines = [];

    for (let i = 1; i < number_of_vertical_lines; i++) {
        const x = i * size;

        vertical_lines.push(<path key={i} className="line" d={`M ${x} 0 l 0 ${height}`} />);
    }

    const horizontal_lines = [];

    for (let i = 1; i < number_of_horizontal_lines; i++) {
        const y = i * size;

        horizontal_lines.push(<path key={i} className="line" d={`M 0 ${y} l ${width} 0`} />);
    }

    return (
        <svg viewBox={`0 0 ${width} ${height}`}>
            <g className="lines__border">
                <line className="line" x1="0" y1="0" x2={width} y2={0} />
                <line className="line" x1="0" y1="0" x2={0} y2={height} />
                <line className="line" x1="0" y1={height} x2={width} y2={height} />
                <line className="line" x1={width} y1={0} x2={width} y2={height} />
            </g>

            <g className="lines__vertical">{vertical_lines}</g>

            <g className="lines__horizontal">{horizontal_lines}</g>
        </svg>
    );
}

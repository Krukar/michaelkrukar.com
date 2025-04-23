const Svg = () => (
    <svg className="h-full fill-current" viewBox="0 0 200 40">
        <rect className="squares__inner--left" x="30" y="10" width="45" height="20" />
        <rect className="squares__outer--left" y="15" width="30" height="10" />

        <rect className="squares__inner--right" x="125" y="10" width="45" height="20" />
        <rect className="squares__outer--right" x="170" y="15" width="30" height="10" />

        <rect className="squares__center--top" x="75" width="50" height="10" />
        <rect className="squares__center--bottom" x="75" y="30" width="50" height="10" />
    </svg>
);

export default Svg;

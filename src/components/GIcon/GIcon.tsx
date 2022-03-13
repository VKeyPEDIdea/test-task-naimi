/* eslint-disable max-len */
import { GIconProps } from "./GIconProps.model";

const GIcon = ({
	title,
	color,
    size
}: GIconProps) => {
	let pathes;
    const sizeValue = size || 24;

	switch (title) {
		case 'delete':
			pathes = (
				<>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill={color}/>
                </>
			);
			break;
		case 'drop-down':
			pathes = (
				<>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10l5 5 5-5z" fill={color}/>
                </>
			);
			break;
		case 'drag':
			pathes = (
				<>
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill={color}/>
                </>
			);
			break;
		default:
			break;
	}

	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg"
				width={sizeValue}
				height={sizeValue}
				viewBox="0 0 24 24">
				{pathes}
			</svg>
		</>
	);
};

export default GIcon;
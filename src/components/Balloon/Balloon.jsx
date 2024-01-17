import React, {useState} from "//cdn.skypack.dev/react";
import classnames from "//cdn.skypack.dev/classnames"
import Constants from "../../utils/constants"
import "./Balloon.css"

const Balloon = ({id, color, isActive, onClick}) => {
    const [isPopped, setIsPopped] = useState(false);

    const classNames = classnames("ballon", {
        "balloon--active": isActive,
        "balloon-popping": isPopped,
    })

    const clickHandler = (event) => {
        if (!isPopped) {
            setIsPopped(true);
            onClick();

            setTimeout(() => {
                setIsPopped(false);
            }, Constants.randomnessLimits.lower)
        }
    }

    const balloonWidth = 200;
    const balloonHeight = balloonWidth * 1.17;
    const threadHeight = 50;
    
    return (
        <div className="balloon-cell">
            <div 
                onClick={clickHandler}
                className={classNames}
                style={{color: color}}
            >
                <svg
                    className="balloon-svg" 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
                >
                    <defs>
                        <radialGradient 
                            id={`"balloon-gradient-"${id}`}
                            cx='40%'
                            cy='40%'
                            r='50%'
                            fx='20%'
                            fy='20%'
                        >
                            
                            <stop offset='0%' stopColor='#ed6890'></stop>
                            <stop offset='100%' stopColor="#FF004D"></stop>
                        </radialGradient>

                        <filter
                            id={`balloon-shadow-${id}`}
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                        >
                            <feMerge>
                                <feMergeNode in="offsetBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    
                    <rect 
                        x={balloonWidth / 2}
                        y={balloonHeight}
                        width='1'
                        height={threadHeight}
                        fill="currentColor"
                    >
                    </rect>

                    <polygon 
                        points=
                            {`${balloonWidth / 2}, 
                            ${balloonHeight - 3} ${balloonWidth / 2 + 8},
                            ${balloonHeight + 5} ${balloonWidth / 2 - 8},
                            ${balloonHeight + 5}`}

                        fill="currentColor"
                    />

                    <ellipse
                        cx={balloonWidth / 2}
                        cy={balloonHeight / 2}
                        rx={balloonWidth / 2}
                        ry={balloonHeight / 2}
                        fill="url(#balloon-gradient)"
                    >
                    </ellipse>
                </svg>
            </div>
        </div>
    );
};

export default Balloon;
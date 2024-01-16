import { useEffect, useRef, useState } from "react";
import getRandomNumber from "../../utils/randomNumber"
import Balloon from "../Balloon/Balloon";
import './BalloonGrid.css';

const BalloonGrid = ({numberOfBalloons, onBalloonClick}) => {
    const [activeBalloons, setActiveBalloons] = useState([]);
    const intervalIdsRef = useRef([]);

    const handleBalloonClick = (id) => {
        if (onBalloonClick) {
            onBalloonClick(id);
        };
    };

    useEffect(() => {
        intervalIdsRef.current = [];

        const generateRandomBalloon = () => {
            const randomBalloonId = Math.floor(Math.random() * numberOfBalloons)

            setActiveBalloons((prevActiveBalloons) => {
                if (prevActiveBalloons.includes(randomBalloonId)) {
                    return prevActiveBalloons.filter(
                        (activeId) => activeId !== randomBalloonId
                    );
                } else {
                    return [...prevActiveBalloons, randomBalloonId];
                }
            });

        };

        for (let i = 0; i < numberOfBalloons; i++) {
            const randomInterval = getRandomNumber(
                Constants.randomnessLimits.lower, 
                Constants.randomnessLimits.upper
            );  

            const intervalId = setInterval(generateRandomBalloon, randomInterval);
            intervalIdsRef.current.push(intervalId);
        }

        return () => {
            intervalIdsRef.current.forEach((intervalId) => clearInterval(intervalId));
        };    
    })

    const balloons = [];
    for (let i = 0; i < numberOfBalloons; i++) {
        balloons.push(
            <Balloon 
                key={i}
                id={i}
                color={Constants.balloonColor}
                isActive={activeBalloons.includes(i)}
                onClick={() => handleBalloonClick(i)}
                isGameStarted={isGameStarted}
            />
        )
        
    }

    return (
        <div className="balloon-grid-wrapper">
            <p className="balloon-grid-caption">Click a balloon to score</p>
            <div className="balloon-grid">{ballons}</div>
        </div>
    );
}

export default BalloonGrid
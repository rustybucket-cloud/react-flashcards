import arrow from '../images/arrow1.svg';

function Selectors() {
    return (
        <div className="selectors">
            <div className="arrow">
                <img className="back" src={arrow} />
            </div>
            <div className="arrow">
                <img className="foreward" src={arrow} />
            </div>
        </div>
    );
}

export default Selectors;
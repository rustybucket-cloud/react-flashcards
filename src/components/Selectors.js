import arrow from '../images/arrow1.svg';

function Selectors(props) {
    const handleClick = ({currentTarget}) => {
        props.onClick();
        currentTarget.classList.add('clicked');
        setTimeout(() => {
            currentTarget.classList.remove('clicked');
        }, 250);
    }

    return (
        <div className="selectors">
            <div className="arrow" onClick={handleClick}>
                <img className="back" src={arrow} />
            </div>
            <div className="arrow" onClick={handleClick}>
                <img className="foreward" src={arrow} />
            </div>
        </div>
    );
}

export default Selectors;
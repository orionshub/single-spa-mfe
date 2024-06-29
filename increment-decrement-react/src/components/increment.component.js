const Increment = ({ actionFn }) => {
    return (
        <div className="action-wrapper increment-wrapper">
            <button onClick={actionFn}>Increase count</button>
        </div>
    );
};

export default Increment;

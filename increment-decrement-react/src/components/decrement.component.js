const Decrement = ({ actionFn }) => {
    return (
        <div className="action-wrapper decrement-wrapper">
            <button onClick={actionFn}>Decrease count</button>
        </div>
    );
};

export default Decrement;

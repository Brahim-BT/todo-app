const Task = (props) => {
    return (
        <div>
            <input type={"checkbox"} />
            <label>{props.task}</label>
        </div>
    );
}

export default Task;
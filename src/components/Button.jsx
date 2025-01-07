function Button(props) {
    return (
        <>
            <button
                className={`flex items-center justify-center rounded-lg bg-${props.color}-400 p-3 text-white shadow-md shadow-${props.color}-500/20 transition-all hover:shadow-xl hover:shadow-${props.color}-500/40 focus:opacity-[0.85] focus:shadow-none focus:outline-none focus:scale-110 hover:scale-110 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                type={props.type} onClick={props.onClick}>
                <i className={`fas fa-${props.icon} text-lg leading-none`}></i>
            </button>
        </>
    );
}

export default Button;

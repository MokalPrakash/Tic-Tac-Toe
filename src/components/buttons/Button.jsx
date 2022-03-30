import "./button.css"

const Button = ({title,handleClick}) => {
    return (
        <button className="btn" type="submit" onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button

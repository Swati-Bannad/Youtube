
const Button = (props) =>{
    const { name } = props;
    return (
        <button className="bg-gray-100 p-1 px-4 mr-2 my-2 rounded-md">{name}</button>
    )
}

export default Button;
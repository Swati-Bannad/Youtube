import { USER_IMAGE } from "../utils/constant";

const Livemessage = (props) => {
    const { name, msg } = props;
    return (
        <div className="flex items-center shadow-md p-2 rounded " >
            <img className="h-8" src={USER_IMAGE} alt="userimage"/>
            <div  className="pl-3">
                <p className="font-bold">{name}</p>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Livemessage;
import Button from "./Button";

const Buttonlist = () => {
    const list = ["All", "Music", "News", "Sonu Nigam", "Live", "Game", "Cricket", "Cooking", "Drama"]
    return(
        <div className="flex overflow-x-scroll"> 
            {list.map((item) => (
                <Button key={item} name={item}/>
            ))}
            
        </div>
    )
}

export default Buttonlist;

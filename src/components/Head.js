import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/hamburgerSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";
import { USER_IMAGE } from "../utils/constant";
import { Link } from "react-router-dom";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    
    const dispatch =useDispatch();
    const searchCache = useSelector((store) =>store.search);
    /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

    const getSearchResults = async() =>{
        const data = await fetch ("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
        const json = await data.json();
        setSuggestion(json[1]);
        dispatch(
            cacheResults({
              [searchQuery]: json[1],
            })
        );
    }
    
    useEffect(()=>{
        const timer = setTimeout(()=> {
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery]);
            }
            else{
                getSearchResults();
            }
            
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    },[searchQuery]);

    
    // useEffect(()=>{
    //     getSearchResults();
    // },[searchQuery]);
    
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return(
        <div className="grid grid-flow-col p-3 mb-2 shadow-lg">
            <div className="flex col-span-1 items-center">
                <img onClick={() => toggleMenuHandler()} className="h-8 mr-3 cursor-pointer" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menuicon"/>
                <img className="h-7 "src="../logo.png" alt="Logo"/>
            </div>
            <div className="col-span-8 text-center relative">
                <input className="w-1/2 p-2  pl-3 border border-gray-600 rounded-l-full" type="text" placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
                onFocus={() => {
                    setShowSuggestion(true);
                }}
                onBlur={() => {
                    setShowSuggestion(false);
                }}
                
                />
                
                <button className="border p-2 pr-3 border-gray-600 border-l-0 rounded-r-full bg-gray-200">
                    Submit
                </button>
                {showSuggestion && <div className="border absolute left-0 right-0 w-[56%] m-auto  bg-white rounded text-left">
                <ul>
                    {suggestion.map((searchword) =>(
                        <li className="p-2 pl-4 pr-4 hover:bg-gray-100" key={searchword}>{searchword}</li>
                    ))}
                </ul>
            </div>}
            </div>
            <div className="col-span-3 ">
                <img className="h-8" src={USER_IMAGE} alt="userimage"/>
            </div>
        </div>
    )
}

export default Head;
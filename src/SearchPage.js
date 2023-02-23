import React from "react";
import './SearchPage.css';
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const SearchPage=()=>{
    const [{term},dispatch] = useStateValue();
    
    const { data } = useGoogleSearch(term); //LIVE API CALL

    //mock API call
    // const data = Response;

    // AIzaSyCt-3of5isMhj2i01RPimp9bki3yTsgwGU 
    //https://developers.google.com/custom-search/v1/using_rest
    //https://cse.google.com/cse/create/new
    // e181cc0b63553acb9 
   
    console.log(data);
    return(
        <div className="searchPage">
            <div className="searchPage_Header">
                <Link to="/">
                    <img className="searchPage_logo" 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                    alt="" 
                    />
                </Link>
            <div className="searchPage_headerBody">
                <Search hideButtons />
                <div className="searchPage_options">
                    <div className="searchPage_optionsLeft">
                    <div className="searchPage-option">
                        <SearchIcon />
                        <Link to="/all">All</Link>
                    </div>
                    <div className="searchPage-option">
                        <DescriptionIcon />
                        <Link to="/all">News</Link>
                    </div>
                    <div className="searchPage-option">
                        <ImageIcon />
                        <Link to="/all">Images</Link>
                    </div>
                    <div className="searchPage-option">
                        <LocalOfferIcon />
                        <Link to="/all">Shopping</Link>
                    </div>
                    <div className="searchPage-option">
                        <RoomIcon />
                        <Link to="/all">Maps</Link>
                    </div>
                    <div className="searchPage-option">
                    <MoreVertIcon />
                        <Link to="/all">More</Link>
                    </div>
                    
                    </div>


                <div className="searchPage_optionRight">
                    <div className="searchPage-option">
                        <Link to="/settings">Settings</Link>
                    </div>
                    <div className="searchPage-option">
                        <Link to="/settings">Tools</Link>
                    </div>
                </div>
                </div>
            </div>
                {/* <h1>{term}</h1> */}
            </div>

            { term && (
            <div className="searchPage_results">
                <p className="searchPage_resultCount">
                    About {data?.searchInformation.formattedTotalResults} 
                    results ({data?.searchInformation.formattedSearchTime}) 
                    for {term}
                </p>

                {data?.items.map(item =>(
                    <div className="searchPage_result">
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
                                <img className="searchPage_resultImage" src={ item.pagemap?.cse_image[0]?.src} 
                                    alt=""
                                />
                            )}
                            {item.displayLink}
                        </a>
                        <a className="searchpage_resultTitle"
                         href={item.link}>
                            <h2>{item.title}</h2>
                         </a>
                         <p className="searchPage_resultSnippet">
                            {item.snippet}
                         </p>
                    </div>
                ))}
            

            </div>
            )}
        </div>
    )
}
export default SearchPage;
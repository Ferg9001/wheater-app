"use client"
import ClickOutside from "@/components/ClickOutside";
import useGeolocation from "@/hooks/useGeolocation";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import Loading from "./Loading";

interface searchBox {
    setGeolocationSelected: Dispatch<SetStateAction<Igeolocation>>
}

const SearchBox: React.FC<searchBox> = ({setGeolocationSelected}) =>{
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [locationSelected, setLocationSelected] = useState<IgeolocationResponse | null>(null);
    const { locationsToSearch, loadingGeolocation } = useGeolocation(query);

    const inputRef = useCallback((inputElement:HTMLInputElement) => {
        if (inputElement) {
          inputElement.focus();
        }
      }, []);

    const onTypeLocation = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(!showSearch) {
            setShowSearch(true);
        }
        setLocationSelected(null);
        setQuery(e.target.value)
    }

    const onSelectLocation = (place: IgeolocationResponse)=>{
        if(showSearch) {
            setShowSearch(false);
        }
        setLocationSelected(place);
        setQuery(getPlaceName(place));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSearch(false);
        if(locationSelected){
            setGeolocationSelected({
                lat: (locationSelected.lat).toString(),
                lon: (locationSelected.lon).toString()
            })
        }
    }

    const getPlaceName = (place: IgeolocationResponse): string => {
        let name = `${place.name}, `;
        if(place.state){
            name += `${place.state}, `;
        }
        name += place.country;
        return name;
    }

    return <ClickOutside onClickOutside={()=>setShowSearch(false)} classes="mb-8">
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="grow md:grow-0 relative">
                    {loadingGeolocation ? <div className="absolute top-2 right-2 z-10"><Loading size={25}/></div> : null}
                    <input ref={inputRef} onChange={onTypeLocation} className="w-full md:w-96 p-2 border-solid border border-black" value={query}/>
                    <ul className={`top-11 absolute w-full md:w-96 z-10 bg-white ${query && showSearch ? 'block' : 'hidden'}`}>
                        {
                            locationsToSearch.length ? locationsToSearch.map((place: IgeolocationResponse, index: number)=>{
                                return <li key={index} onClick={()=>onSelectLocation(place)} className="p-2 last:border-b border-l-2 border-r-2 border-solid border-black cursor-pointer hover:bg-gray">
                                    {getPlaceName(place)}
                                </li>
                            }) : <li className="p-2 last:border-b border-l-2 border-r-2 border-solid border-black cursor-pointer hover:bg-gray">
                                    No se encontraron resultados...
                                </li>
                        }
                    </ul>
                </div>
                <button className="p-2 border-solid border-b border-r border-t border-black hover:bg-gray" type="submit" >
                    Buscar
                </button>
            </div>
        </form>
    </ClickOutside>
}

export default SearchBox;
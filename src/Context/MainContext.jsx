import { createContext,useState,useEffect } from "react";
import BrandsData from '../brands.json'



const MainContext = createContext();


export const MainProvider = ({ children }) => {


    const brandsArray = []
    Object.keys(BrandsData).map(key => {
      brandsArray.push(BrandsData[key])
    })
  
    const [brands, setBrands] = useState(brandsArray);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [search, setSearch] = useState("");
    const [copied, setCopied] = useState(false)
  



  
  useEffect(() => {
      console.log(selectedBrands);
    }, [selectedBrands])
    
    useEffect(() => {
        setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
    }, [search])
    
   
    
    const data = {
      brands, setSelectedBrands, selectedBrands, setCopied, search, setSearch,copied
    }

    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}


export default MainContext;
import React, { useContext, useState, useEffect } from 'react'
import { BiDownload, BiLink } from 'react-icons/bi'
import MainContext from '../Context/MainContext'
import { GrClose } from "react-icons/gr"

function Download() {

  const { selectedBrands, setselectedBrands, brands } = useContext(MainContext);
  const [downloadUrl, setdownloadUrl] = useState()
  const [changeCssMethod, setchangeCssMethod] = useState("css")
  const getLink = () => {
    prompt("Here's the URL to share", `http://localhost:3000/collection/${selectedBrands.join(",")}`)
  }
  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = ''

      switch (changeCssMethod) {
        case 'css':
          output +=':root {\n'
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {

              output += `--${slug}-${key}:#${color}\n`
            })

          })
          output += '}'

          break;
        case 'scss':
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {

              output += `\$${slug}-${key}:#${color}\n`
            })

          })
          break;
        case 'less':
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {

              output += `@${slug}-${key}:#${color}\n`
            })

          })
          break;
      }




      const blob = new Blob([output])
      const url = URL.createObjectURL(blob)
      setdownloadUrl(url)
      return () => {
        URL.revokeObjectURL(url)
        setdownloadUrl('')

      }
    }
  }, [selectedBrands])

  return (
    <div className='download'>
      <div className="actions">
        <select onChange={(e) => setchangeCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${changeCssMethod}`} href={downloadUrl}>
          <BiDownload />
        </a>
        <button onClick={getLink}>
          <BiLink />
        </button>
      </div>


      <div className="selected" onClick={() => setselectedBrands([])}>
        <GrClose />
        {selectedBrands.length} Brand{selectedBrands.length > 1 && "s"} Collected
      </div>
    </div>
  )
}

export default Download
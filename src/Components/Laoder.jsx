import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="4" rx="13" ry="13" width="100" height="24" /> 
    <rect x="14" y="35" rx="0" ry="0" width="70" height="40" /> 
    <rect x="90" y="35" rx="0" ry="0" width="70" height="40" /> 
    <rect x="164" y="35" rx="0" ry="0" width="70" height="40" /> 
    <rect x="242" y="35" rx="0" ry="0" width="70" height="40" />
  </ContentLoader>
)

export default Loader


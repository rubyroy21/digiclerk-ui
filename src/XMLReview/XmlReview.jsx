import React, {useEffect , useRef} from 'react'
import "../xmlFlow/xml-flow"
import "../xmlFlow/xml-flow.css"


const XmlReview = () => {
  const ref = useRef();

  useEffect(() => {

      // ref.current.__ngContext__[ref.current.__ngContext__.length-1].createOrupdateViewer({docUrl:"https://dev.xlrt.ai/dms-api/dms/download/5fe318f2c4bc44a4877bec2e61dcbb6b"})
    
      ref.current._ngElementStrategy.componentRef.instance.docId = "0bfe932bee5842d4b2be268353cf8d4a"
    
     }, [])

  return (
    <div>
        <xml-flow ref={ref}></xml-flow>
    </div>
  )
}

export default XmlReview
import React, {useEffect , useRef} from 'react'
import "../xmlFlow/xml-flow"
import "../xmlFlow/xml-flow.css"
import axios from 'axios';
import { useParams } from 'react-router';


const XmlReview = () => {
  const ref = useRef();
  const {docId} = useParams()
  console.log(docId, "document id")

  useEffect(() => {

      // ref.current.__ngContext__[ref.current.__ngContext__.length-1].createOrupdateViewer({docUrl:"https://dev.xlrt.ai/dms-api/dms/download/5fe318f2c4bc44a4877bec2e61dcbb6b"})
    //   let docId = localStorage.getItem("docId")

    //    axios.get(`http://localhost:3000/fs/${docId}`)
    // .then(response => {
    //   // Handle the response data
    //   console.log(response.data);
    // })
    // .catch(error => {
    //   // Handle the error
    //   console.error(error);
    // });
      setTimeout(()=>{
        ref.current.docId = "bc8515f7ef7f4b3886ca67a4bff2d5e9"
        console.log(ref.current.docId)
      } , 0)
      
    
     }, [])

  return (
    <div>
        <xml-flow ref={ref}></xml-flow>
    </div>
  )
}

export default XmlReview
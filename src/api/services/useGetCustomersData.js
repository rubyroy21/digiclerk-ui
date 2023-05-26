import { isExpired } from "react-jwt";
import { useState, useEffect } from "react";
// import { axiosServiceInstance } from '../axios/axiosInstance'
import { parseCustomersResponse } from "../parsers/parseCustomersResponse";

const useGetCustomersData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //     const getValidateToken = async () => {
  //         try {
  //             const response = await axiosServiceInstance.get('/docparser-gateway-api//customers', {
  //                 params: {
  //                     findWithDocs: false
  //                 }
  //             })
  //             const parsedResponse = parseCustomersResponse(response)
  //             setData(parsedResponse)
  //         } catch (error) {
  //             setError(error)
  //         } finally {
  //             setLoading(false)
  //         }
  //     }

  //     getValidateToken()
  // }, [])

  return { error, loading };
};

export { useGetCustomersData };

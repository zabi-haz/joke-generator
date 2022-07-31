import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addJoks } from "./reudx/actions/action"

const UseFetch =(url)=>{
    const [data , setData ] = useState(null)
    const [loading , setLoading ] = useState(true)
    const [err , setErr] = useState(null)
    const dispatch = useDispatch()
    const apiUrl = url
    const fetchingData = async ()=>{
        const responce = await axios
        .get(apiUrl)
        .catch((err)=>{
            setLoading(false)
        })
        console.log(responce.data);
        dispatch(addJoks(responce.data))
        if(responce.data){
            console.log(responce.data);
        }
    }
    useEffect(()=>{
        fetchingData();
    },[url])
    return {data , loading ,err}
}
export default UseFetch
import React from "react"
import Home from "./Home"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

export default function RefHome() {
    const props = useParams()
    const now = new Date()
    function setWithExpiry(key, value, ttl) {
        const item = { value: value, expiry: now.getTime() + ttl }; localStorage.setItem(key, JSON.stringify(item))
    }
    useEffect(() => {
        console.log(props.referal)
        if (localStorage.getItem('statistics')) {
            if (JSON.parse(localStorage.getItem('statistics')).expiry < now.getTime()) {
                axios.post(`https://mxmr.ru/server/main.php?ref=${props.referal}`)
                setWithExpiry('statistics', 'ws', 180000)
            }
        }
        else {
            axios.post(`https://mxmr.ru/server/main.php?ref=${props.referal}`)
            setWithExpiry('statistics', 'ws', 180000)
        }
        window.location.href = '/'
    })
}
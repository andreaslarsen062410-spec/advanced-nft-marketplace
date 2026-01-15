import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Web3Context } from '../providers/Web3Provider'

export default function ConnectButton () {
const { initializeWeb3 } = useContext(Web3Context)
const [hasWindowEthereum, setHasWindowEthereum] = useState(false)


}
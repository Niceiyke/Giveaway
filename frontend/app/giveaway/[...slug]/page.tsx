import GiveAwayDetailCard from '@/app/components/GiveAwayDetailCard'
import { getGiveAwayDetail } from '@/app/endpoints/api'
import React from 'react'

interface param{
  slug:string
}

interface GiveawayProp {
  params:param
}

const GiveAwayDetail:React.FC<GiveawayProp>=async({params})=> {

 const data =await getGiveAwayDetail(params.slug)

  return (
    <GiveAwayDetailCard item={data}/>
  )
}

export default GiveAwayDetail
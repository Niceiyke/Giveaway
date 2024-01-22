import GiveAwayDetailCard from '@/app/components/GiveAwayDetailCard'
import { getItemDetail } from '@/app/endpoints/api'
import React from 'react'

interface ParamsProp{
  params:{id:string}
}

const page:React.FC<ParamsProp>=async({params})=> {

  const data =await getItemDetail(params.id)

  return (
    <GiveAwayDetailCard item={data}/>
  )
}

export default page
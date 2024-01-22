
const BASEURL ='http://127.0.0.1:8000/api/'

export const getItemGiveAways =async()=>{

    const res =await fetch(`${BASEURL}core/item-giveaway`,{cache:'no-store'})

    if (res.status ===200){
        return res.json()
    }

}

export const getItemDetail =async(id:string)=>{

    const res =await fetch(`${BASEURL}core/item-giveaway/${id}`,{cache:'no-store'})

    if (res.status ===200){
        return res.json()
    }

}

export const getCashGiveAways =async()=>{

    const res =await fetch(`${BASEURL}core/cash-giveaway`,{cache:'no-store'})

    if (res.status ===200){
        return res.json()
    }

}


export const getCashDetail =async(id:string)=>{

    const res =await fetch(`${BASEURL}core/cash-giveaway/${id}`,{cache:'no-store'})

    if (res.status ===200){
        return res.json()
    }

}
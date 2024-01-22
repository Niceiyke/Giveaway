
const BASEURL ='http://127.0.0.1:8000/api/'

export const getGiveAways =async()=>{

    const res =await fetch(`${BASEURL}core/giveaways`,{cache:'no-store'})

    if (res.status ===200){
        return res.json()
    }

}

export const getGiveAwayDetail =async(id:string)=>{

    const res =await fetch(`${BASEURL}core/giveaway/${id}`,{cache:'no-store'})

    if (res.status ===200){
        return res.json()
    }

}

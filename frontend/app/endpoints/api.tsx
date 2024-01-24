
const BASEURL ='http://127.0.0.1:8000/api'

export const getGiveAways =async()=>{

    const res =await fetch(`${BASEURL}/core/giveaways`,{next:{revalidate:5000}})

    if (res.status ===200){
        return res.json()
    }

}

export const getGiveAwayDetail =async(slug:string)=>{

    const res =await fetch(`${BASEURL}/core/giveaway/${slug}`,{cache:'no-store'})

    if (res.status ===200){
        return res.json()
    }

}

interface NewUser{
    email:string;
    first_name:string;
    last_name:string;
    password:string

}

export const RegisterUser =async(user:NewUser)=>{

    const res =await fetch(`${BASEURL}/account/register`,{
        method: 'POST',
         headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user),

    })

        if (res.status ===200){
        return res.json()
    }

}

interface LoginProp{
    email:string;
    password:string
}

export const LoginUser =async(userDetail:LoginProp)=>{

        const res =await fetch(`${BASEURL}/account/login`,{
        method: 'POST',
         headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userDetail),

    })

        if (res.status ===200){
        return res.json()
    }

}

import React from 'react';
import ParticipantCard from './ParticipantCard';


interface GiveAwayDetailCardProps {
  item: GiveAwayModel;
}

const GiveAwayDetailCard: React.FC<GiveAwayDetailCardProps> = ({ item }) => {
  return (
   <>
   {item? <main className='flex mx-auto justify-between items-center mt-4 border-2 p-4 w-1/2'>
      <section className=''>
        {item? <h2 className='font-bold text-2xl'> {item.title}</h2>:""}
          {item.item_name? <h2 className='font-bold text-2xl'>{item.item_name} </h2>:''}
          {item.amount?<h2 className='font-bold text-2xl'>#{item?.amount}</h2>:''}
          {item.description? <p>{item.description}</p>:''}
          {item? <p>Giveaway by {item.owner?.email}</p>:''}
          {item.participant?.length>0? <h2 className="font-bold">participant: {item?.participant?.map((item)=><div key={item.email}><ParticipantCard participant={item}/></div>)} </h2>:''}
      </section>
      
       <button className='p-4 border text-white font-semibold bg-green-700 rounded-md'>Join Giveaway</button>
     
    </main>:''}
   </>
  );
};

export default GiveAwayDetailCard;

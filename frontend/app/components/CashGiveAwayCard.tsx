import Link from 'next/link';
import React from 'react';


interface GiveAwayCardProps {
  item: GiveAwayModel;
}

const CashGiveAwayCard: React.FC<GiveAwayCardProps> = ({ item }) => {
  return (
    <section className='p-4 border-2 rounded-sm'>
      <Link href={`/giveaway/cash/${item.id}`} className='flex justify-between'>
          <div>
            {item.name? <h2 className='font-bold text-2xl'>{item.name} Giveaway by {item.user.email}</h2>:''}
          {item.amount?<h2>#{item?.amount} Giveaway by {item.user.email}</h2>:''}
          <p>{item.description}</p>
          <p>Number of participant: {item.participant.length} </p>
          
          </div>

          <button className='p-4 border text-white font-semibold bg-green-700 rounded-md'>Join Giveaway</button>
        
      </Link>
    </section>
  );
};

export default CashGiveAwayCard;

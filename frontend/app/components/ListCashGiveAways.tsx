import React from 'react';
import CashGiveAwayCard from '@/app/components/CashGiveAwayCard';
import { getCashGiveAways} from '../endpoints/api';



const ListCashGiveAways: React.FC = async () => {
  const data = await getCashGiveAways()
  console.log(data)
  return (
    <div>
      {data?.map((item:GiveAwayModel) => (
        <main key={item.id}>
          <CashGiveAwayCard item={item} />
        </main>
      ))}
    </div>
  );
};


export default ListCashGiveAways;

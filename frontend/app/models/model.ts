interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface GiveAwayParticipant {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface GiveAwayModel {
  id: string;
  title:string;
  description: string;
  status: boolean;
  is_cash:boolean;
  created_at: string; 
  owner: User;
  participant: GiveAwayParticipant[];
  slug:string;
  item_name?: string;
  amount?: string;
  category?: string;

}


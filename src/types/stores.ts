
import type { Database } from "../integrations/supabase/types";

export type Store = Database["public"]["Tables"]["stores"]["Row"];

export interface StoreFormData extends Partial<Store> {
  name: string;
  address: string;
  description: string;
  maps_url?: string;
  owner_name?: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
  image?: string;
  entrance_fee?: string;
  opening_hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  social_media?: {
    facebook?: string;
    instagram?: string;
  };
}

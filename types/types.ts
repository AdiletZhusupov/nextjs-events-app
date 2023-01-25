export interface IEventsCat {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ICityEvent {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}
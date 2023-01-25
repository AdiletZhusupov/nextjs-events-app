import React from "react";
import {GetStaticProps} from 'next'
import Image from 'next/image';
import Link from 'next/link';
import data from "../../data/data.json"
import { IEventsCat } from '@/types/types';

interface EventsProps {
  data: IEventsCat[]
}

const Events = ({data}: EventsProps) => {
  return (
    <div>
      <h2>Events Page</h2>
      <div>
        {data.map(ev => {
          return (
            <Link key={ev.id} href={`events/${ev.id}`}>
              <Image src={ev.image} alt={ev.title} width={200} height={200} />
              <h2>{ev.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Events;

export const getStaticProps: GetStaticProps = () =>{
  return{
    props: {
      data: data.events_categories
    }
  }
}
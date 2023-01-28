import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IEventsCat } from '@/types/types';

interface HomePageProps {
  data: IEventsCat[];
}

const HomePage = ({data}: HomePageProps) => {
  return (
    <main>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`}>
          <Image src={ev.image} alt={ev.title} width={200} height={200} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </main>
  );
}

export default HomePage
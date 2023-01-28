import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from 'next/link';
import data from "../../../data/data.json";
import { ICityEvent } from "@/types/types";
import Image from 'next/image';

interface CityEventsProps {
  data: ICityEvent[];
  cityName: string;
}

const CityEvents = ({ data, cityName }: CityEventsProps) => {
  return (
    <div>
      <h2>Events {cityName}</h2>

      <div>
        {data.map(ev=> {
          return(
            <Link href={`/events/${ev.city}/${ev.id}`} key={ev.id}>
              <Image src={ev.image} alt={ev.title} width={200} height={200}/>
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default CityEvents;

export const getStaticProps: GetStaticProps = (context) => {
  const { allEvents } = data;
  const { cat } = context.params!;

  const cityEvents = allEvents.filter((ev) => ev.city === cat);

  return {
    props: {
      data: cityEvents,
      cityName: cat
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { events_categories } = data;

  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

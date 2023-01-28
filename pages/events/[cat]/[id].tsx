import React from "react";
import {useRouter} from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next';
import data from "../../../data/data.json"
import {ICityEvent} from '../../../types/types'
import Image from 'next/image';
interface SingleEventProps {
  singleEvent: ICityEvent;
}

const SingleEvent = ({ singleEvent }: SingleEventProps) => {
  return (
    <div>
      <Image
        src={singleEvent.image}
        alt={singleEvent.title}
        width={200}
        height={200}
      />
      <h2>{singleEvent.title}</h2>
      <p>{singleEvent.description}</p>
    </div>
  );
};

export default SingleEvent;


export const getStaticProps: GetStaticProps = async(context)=>{
  const {id} = context.params!
  const {allEvents} = data;
  const singleEvent = allEvents.find(ev => ev.id === id)

  return{
    props: {
      singleEvent
    }
  }
}

export const getStaticPaths: GetStaticPaths = async() =>{
  const {allEvents} = data;

  const paths = allEvents.map(ev => {
    return {
      params: {
        cat: ev.city,
        id: ev.id
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}
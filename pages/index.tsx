import data from "../data/data.json";
import { GetStaticProps } from "next";
import { IEventsCat } from "../types/types";
import HomePage from '@/components/home/HomePage';

interface HomeProps {
  data: IEventsCat[];
}

export default function Home({ data }: HomeProps) {
  return (
    <div>
      <HomePage data={data}/>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: data.events_categories,
    },
  };
};

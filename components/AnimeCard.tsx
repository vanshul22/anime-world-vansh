"use client"
import Image from 'next/image';
import Link from 'next/link';
import CardAccordian from './CardAccordian';
import { motion } from "framer-motion";

type Props = {
    index: number
    item: AnimeData
}


const AnimeCard = ({ item, index }: Props) => {

    const bubbleClass = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 * index } }}
            className="rounded overflow-hidden shadow-2xl shadow-blue-700 border w-[300px] h-[700px]">
            <Link className='flex justify-center max-h-80 w-max' href={item.url} target='_blank'>
                <Image src={item.images.webp.large_image_url} alt={item.title} width={300} height={100} />
            </Link>
            <div className="px-6 pt-3">
                <div className="font-bold text-lg h-16">{item.title_english ? item.title_english : item.title} {item?.year && `(${item.year})`} </div>
                <p className="text-gray-700 text-base">{item.rating}</p>
            </div>
            <div className="px-6 py-2">
                <span className={bubbleClass}>Ratings: {item.score}/10 ⭐️</span>
                <span className={bubbleClass}>Episodes: {item.episodes}</span>
                {item?.trailer?.url && <Link href={item.trailer.url} target='_blank' className={bubbleClass}>Trailer</Link>}
                {item?.url && <Link href={item.url} target='_blank' className={bubbleClass}>Watch</Link>}
                <span className={bubbleClass}> {item.duration}</span>
                <CardAccordian synopsis={item.synopsis} background={item.background} />
            </div>
        </motion.div >
    )
}

export default AnimeCard;
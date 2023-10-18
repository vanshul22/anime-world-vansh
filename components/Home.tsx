"use client"
import { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import PageModal from "./PageModal";

interface AnimeProps {
    pagination: Pagination
    data: AnimeData[] | []
}

const Home = () => {
    let [isOpenPageModal, setIsOpenPageModal] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setdata] = useState<AnimeData[]>([]);
    const [pageDetails, setPageDetails] = useState<Pagination>({
        last_visible_page: 0,
        has_next_page: false,
        current_page: 1,
        items: {
            count: 0,
            total: 1,
            per_page: 1,
        }
    });

    const fetchFunc = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
        const { data, pagination }: AnimeProps = await response.json();
        setdata(data);
        setPageDetails(pagination);
    }
    const prevButtonClick = async () => {
        setPage(page - 1);
        setdata([]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const nextButtonClick = async () => {
        setPage(page + 1);
        setdata([]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        fetchFunc();
    }, [page]);

    const pageChangeButtons = "w-18 px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed";

    return (
        <>
            {
                data.length !== 0
                    ? <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center mt-5">
                            {data?.map((item, index) => <AnimeCard key={index} index={index} item={item} />)}
                        </div>

                    </>
                    : <div className="flex justify-center items-center h-[70vh]">
                        <p className="text-gray-400 text-4xl font-bold animate-pulse">No content</p>
                    </div>
            }
            {/* Pagination */}
            <div className="flex justify-around my-10">
                <button disabled={pageDetails.current_page === 1} type="button" onClick={prevButtonClick} className={`${pageChangeButtons} rounded-l-lg`}> Prev </button>

                    <button type="button" onClick={() => setIsOpenPageModal(true)}>
                        <PageModal setPage={setPage} setdata={setdata} isOpenPageModal={isOpenPageModal} setIsOpenPageModal={setIsOpenPageModal} />
                        Page {pageDetails.current_page} of {pageDetails.last_visible_page}
                    </button>

                <button disabled={!pageDetails.has_next_page} type="button" onClick={nextButtonClick} className={`${pageChangeButtons} rounded-r-lg`}> Next </button>
            </div>
        </>
    )
}

export default Home;
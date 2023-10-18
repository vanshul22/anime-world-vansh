"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, FormEvent, Fragment, SetStateAction, useState } from 'react'

type Props = {
    setPage: Dispatch<SetStateAction<number>>
    setdata: Dispatch<SetStateAction<AnimeData[]>>
    isOpenPageModal: boolean
    setIsOpenPageModal: Dispatch<SetStateAction<boolean>>
}

export default function PageModal({ isOpenPageModal, setIsOpenPageModal, setPage,setdata }: Props) {

    const [pageInput, setPageInput] = useState(0);

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPage(pageInput);
        setIsOpenPageModal(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setdata([]);
    }

    return (
        <>
            <Transition appear show={isOpenPageModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpenPageModal(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-72 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Enter Page Number !!!
                                    </Dialog.Title>
                                    <form className="flex justify-between mt-4" onSubmit={onFormSubmit}>
                                        <input type="number" value={pageInput} className='shadow-md w-20 outline-none text-black border border-transparent text-center rounded-md py-2 text-sm font-medium' placeholder='Page...' onChange={(e) => setPageInput(Number(e.target.value))} />
                                        <button type="submit" className=" rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"> Submit </button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

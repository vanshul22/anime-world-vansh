"use client"
import { Tab } from '@headlessui/react';
type Props = {
    synopsis: string | null
    background: string | null
};

const CardAccordian = (props: Props) => {

    const tabClass = "px-4 py-2 text-white rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer";
    const tabPanelClass = "bg-gray-800 p-4 text-white rounded-md overflow-scroll max-h-[90px] text-xs";

    return (
        <div>
            <Tab.Group>
                <Tab.List className="bg-black flex space-x-4 my-2">
                    {props.synopsis && <Tab className={tabClass}> Synopsis </Tab>}
                    {props.background && <Tab className={tabClass}> Background </Tab>}
                </Tab.List>
                <Tab.Panels>
                    {props.synopsis && <Tab.Panel>
                        <div className={tabPanelClass}> {props.synopsis}</div>
                    </Tab.Panel>}
                    {props.background && <Tab.Panel>
                        <div className={tabPanelClass}>{props.background}</div>
                    </Tab.Panel>}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default CardAccordian;

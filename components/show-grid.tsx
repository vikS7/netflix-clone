import React from 'react';
import { AnimatePresenceClient } from './common/motion-template';

type Props = {
    title?: String;
    children?: React.ReactNode;
};

const ShowGrid = ({ title, children }: Props) => {
    return (
        <div className="mx-auto mt-10 w-[80%] p-3 min-[1020px]:m-auto">
            <h1 className="text-4xl capitalize">{title}</h1>
            <div className="mt-5 grid grid-cols-2 gap-2 gap-y-4 sm:grid-cols-3 min-[1020px]:grid-cols-4 min-[1280px]:grid-cols-5 min-[1500px]:grid-cols-6 min-[1750px]:grid-cols-7">
                <AnimatePresenceClient>{children}</AnimatePresenceClient>
            </div>
        </div>
    );
};

export default ShowGrid;

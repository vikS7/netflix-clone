import React from 'react';
import moment from 'moment';
import { Star } from '../common/icons';

type Props = {
    children: React.ReactNode;
};

const DetailsWrapper = ({ children }: Props) => {
    return (
        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end bg-gradient-to-b from-transparent to-background  transition-opacity md:justify-between md:opacity-0 md:group-hover:bg-black/50 md:group-hover:opacity-100">
            {children}
        </div>
    );
};

const DetailsHeader = ({ children }: Props) => {
    return (
        <div className="m-1 p-2 text-sm transition-transform md:-translate-y-[3rem] md:text-base md:group-hover:translate-y-0">
            {children}
        </div>
    );
};

const DetailsFooter = ({ children }: Props) => {
    return (
        <div className="m-1 hidden p-2 transition-transform md:block md:translate-y-[3rem] md:group-hover:translate-y-0">
            {children}
        </div>
    );
};

export { DetailsFooter, DetailsWrapper, DetailsHeader };

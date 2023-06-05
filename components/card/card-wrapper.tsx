
import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

const CardWrapper = ({ children, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className="group relative h-[12rem] w-[9rem] cursor-pointer overflow-hidden rounded-md sm-md:h-[14rem] sm-md:w-[10rem] md:h-[17rem] md:w-[12rem]">
            {children}
        </div>
    );
};

export default CardWrapper;

import React, { Fragment } from 'react';
import { MotionDiv } from '../common/motion-template';
import { API } from '@base/types';
import { formatDate } from '@base/lib/helpers';
import { Star } from '../common/icons';

type Props = {
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genres?: API.Genre[];
    children?: React.ReactNode;
    trailerUrl?: string;

    onTitleClick?: React.MouseEventHandler;
};

const variants = {
    hidden: {
        y: '50%',
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
    exit: {
        y: '50%',
        opacity: 0,
    },
};

const item = {
    hidden: { y: '50%', opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const BannerDetails = ({
    title,
    overview,
    release_date,
    vote_average,
    genres,
    children,
    onTitleClick,
}: Props) => {
    return (
        <MotionDiv
            variants={variants}
            key={'bannerHeading'}
            initial="hidden"
            animate="show"
            exit="exit"
            className="sm-md:mx-3 mx-4 px-3 max-w-[25rem] sm-md:max-w-[35rem] text-white md:mx-8 md:max-w-[50rem] md:px-2">
            <MotionDiv
                onClick={onTitleClick}
                variants={item}
                className="text-3xl font-extrabold text-inherit hover:text-primary md:text-4xl cursor-pointer">
                {title}
            </MotionDiv>
            <MotionDiv variants={item} className="mt-5 text-inherit">
                {overview}
            </MotionDiv>
            <MotionDiv variants={item}>
                <div className="mt-5 flex flex-col md:flex-row md:flex-wrap items-start md:items-center md:space-x-2 md:text-slate-100 sm-md:text-base text-sm text-slate-300">
                    <span className="flex items-center">
                        <Star size="18" />
                        {Math.ceil(vote_average)}
                    </span>

                    {genres && (
                        <Fragment>
                            <span className='md:block hidden'>
                                <svg
                                    width="5"
                                    height="5"
                                    fill="currentColor"
                                    className="bi bi-circle-fill md:block hidden"
                                    viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </span>
                            <span>{[...genres.map((g) => g.name)].join(', ')}</span>
                        </Fragment>
                    )}
                    <span className='md:block hidden'>
                        <svg
                            width="5"
                            height="5"
                            fill="currentColor"
                            className="bi bi-circle-fill"
                            viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </span>
                    <span className=''>{formatDate(release_date)}</span>
                </div>
            </MotionDiv>
            {children && <MotionDiv className='mt-5' variants={item}>{children}</MotionDiv>}
        </MotionDiv>
    );
};

export default BannerDetails;

import React, { Fragment } from 'react';
import { MotionDiv } from '../common/motion-template';
import { API } from '@base/types';
import { formatDate } from '@base/lib/helpers';
import { Star } from '../common/icons';
import Link from 'next/link';

type Props = {
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genres?: API.Genre[];
    children?: React.ReactNode;
    trailerUrl?: string;
    href?: string;
};

const fadeInUp = {
    hidden: {
        y: '50%',
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 0.2,
        },
    },
    exit: {
        y: '50%',
        opacity: 0,
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
};

const BannerDetails = ({
    title,
    overview,
    release_date,
    vote_average,
    genres,
    children,
    href,
}: Props) => {
    return (
        <MotionDiv className="mx-4 max-w-[25rem] px-3 text-white sm-md:mx-3 sm-md:max-w-[35rem] md:mx-8 md:max-w-[50rem] md:px-2">
            <MotionDiv
                variants={fadeInUp}
                key={'bannerHeading'}
                initial="hidden"
                animate="show"
                exit="exit"
                className="cursor-pointer text-3xl font-extrabold text-inherit hover:text-primary md:text-4xl">
                {href ? <Link href={href}>{title}</Link> : <React.Fragment>{title}</React.Fragment>}
            </MotionDiv>
            <MotionDiv
                variants={fadeIn}
                key={'bannerOverview'}
                initial="hidden"
                animate="show"
                exit="exit"
                className="mt-5 text-inherit h-[60%]">
                {overview.substring(0, 500)}
            </MotionDiv>
            <MotionDiv
                variants={fadeIn}
                key={'bannerDetails'}
                initial="hidden"
                animate="show"
                exit="exit">
                <div className="mt-5 flex flex-col items-start text-sm text-slate-300 sm-md:text-base md:flex-row md:flex-wrap md:items-center md:space-x-2 md:text-slate-100">
                    <span className="flex items-center">
                        <Star size="18" />
                        {Math.ceil(vote_average)}
                    </span>

                    {genres && (
                        <Fragment>
                            <span className="hidden md:block">
                                <svg
                                    width="5"
                                    height="5"
                                    fill="currentColor"
                                    className="bi bi-circle-fill hidden md:block"
                                    viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </span>
                            <span>{[...genres.map((g) => g.name)].join(', ')}</span>
                        </Fragment>
                    )}
                    <span className="hidden md:block">
                        <svg
                            width="5"
                            height="5"
                            fill="currentColor"
                            className="bi bi-circle-fill"
                            viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </span>
                    <span className="">{formatDate(release_date)}</span>
                </div>
            </MotionDiv>
            {children && (
                <MotionDiv
                    variants={fadeIn}
                    key={'bannerChildren'}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="mt-5">
                    {children}
                </MotionDiv>
            )}
        </MotionDiv>
    );
};

export default BannerDetails;

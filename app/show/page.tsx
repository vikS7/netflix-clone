'use client';

import { Spinner } from '@base/components/common/icons';
import { MotionDiv } from '@base/components/common/motion-template';
import ShowCard from '@base/components/show-card';
import ShowGrid from '@base/components/show-grid';
import { fetcher } from '@base/lib/helpers';
import { API } from '@base/types';
import { useInView } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import useSWRInfinite from 'swr/infinite';

type Props = {};

const Shows = ({}: Props) => {
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sentinelRef);

    const searchParams = useSearchParams();

    const getKey = (pageIndex: number, previousPageData: any) => {
        if (previousPageData && pageIndex >= previousPageData.total_pages) return null;

        return `/api/show?${searchParams.toString()}&page=${pageIndex + 1}`;
    };

    const { data, error, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher, {
        revalidateOnFocus: false,
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            setSize(size + 1);
        }
    }, [inView]);

    const showPages = data ? data.flat() : [];

    const show = showPages.flatMap((page) => page.results);

    const hasNextPage = data && data[0].total_pages > size;

    return (
        <div className="mt-[120px]">
            <ShowGrid title={searchParams.get('title') ?? 'Shows'}>
                {(show.length === 0 && !isLoading) && <h1>Cannot find any shows</h1>}
                {(show.length &&
                    !isLoading) &&
                    show.map((show, i) => (
                        <MotionDiv
                            key={show.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-fit">
                            <ShowCard show={show} />
                        </MotionDiv>
                    ))}
            </ShowGrid>
            <div ref={sentinelRef} className="my-10 flex  w-full items-center justify-center">
                {hasNextPage && !error && <Spinner size="30" />}
            </div>
        </div>
    );
};

export default Shows;

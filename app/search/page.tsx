'use client';

import SearchBar from '@base/components/search-bar';
import ShowCard from '@base/components/show-card';
import { API } from '@base/types';
import { useEffect, useRef, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { AnimatePresence, useInView } from 'framer-motion';
import { MotionDiv } from '@base/components/common/motion-template';
import { Spinner } from '@base/components/common/icons';
import { fetcher } from '@base/lib/helpers';
import ShowGrid from '@base/components/show-grid';

type Props = {};

export const metadata = {
    title: 'Movie.io - Search',
};

const SearchPage = (props: Props) => {
    const [query, setQuery] = useState('');

    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sentinelRef);

    const getKey = (pageIndex: number, previousPageData: any) => {
        if (!query) return null;

        if (previousPageData && pageIndex >= previousPageData.total_pages) return null;

        return `/api/search?query=${query}&page=${pageIndex + 1}`;
    };

    const { data, error, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher, {
        revalidateOnFocus: false,
    });

    useEffect(() => {
        if (inView) {
            setSize(size + 1);
        }
    }, [inView]);

    const handleSubmit = async (value: string) => {
        setQuery(value);
    };
    const showPages = data ? data.flat() : [];

    const show = showPages.flatMap((page) => page.results);

    const hasNextPage = data && data[0].total_pages > size;

    return (
        <div className="mt-[65px]">
            <div className="m-auto">
                <SearchBar isLoading={isLoading} onSubmit={handleSubmit} />
            </div>
            <ShowGrid title={query}>
                {(show.length === 0 && !isLoading) && <h1>No Results</h1>}
                {show.length &&
                    !isLoading &&
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

export default SearchPage;

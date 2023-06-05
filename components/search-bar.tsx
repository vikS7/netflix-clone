'use client';

import React, { useState } from 'react';
import { SearchIcon, Spinner } from './common/icons';
import Button from './common/button';

type Props = {
    onSubmit: (value: string) => void;
    isLoading?: boolean;
};

const SearchBar = ({ onSubmit, isLoading = false }: Props) => {
    const [val, setVal] = useState('');

    const onInputChange = async (value: string) => {
        setVal(value);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(val);
            }}
            className="m-auto w-[80%] mt-20 flex flex-col md:flex-row max-w-[50rem] items-center">
            <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-white">
                Search
            </label>
            <div className="relative flex-1 w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon size="20" />
                </div>
                <input
                    onChange={(e) => onInputChange(e.target.value)}
                    value={val}
                    type="search"
                    id="default-search"
                    className="block w-full bg-transparent py-2 pl-10 text-white placeholder-gray-400 outline-none focus:border-0 focus:ring-0"
                    placeholder="Search movies and tv shows"
                    autoComplete="false"
                    required
                />
            </div>
            <Button
                intent="primary"
                size="medium"
                rounded="large"
                type="submit"
                className="ml-2 flex items-center justify-center w-full md:w-fit">
                {isLoading ? (
                    <React.Fragment>
                        <Spinner size="15" /> <span className="ml-2">Loading</span>
                    </React.Fragment>
                ) : (
                    <span>Search</span>
                )}
            </Button>
        </form>
    );
};

export default SearchBar;

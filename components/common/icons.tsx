import React from 'react';

type Props = {
    size?: string;
    fill?: string;
};

export const ArrowRight = ({ size, fill }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill ?? 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width={`${size}rem`}
            height={`${size}rem`}
            stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
        </svg>
    );
};

export const ArrowLeft = ({ size, fill }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill ?? 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={`${size}rem`}
            height={`${size}rem`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
        </svg>
    );
};

export const Star = ({ size = '40', fill }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill ?? 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={`${size}px`}
            height={`${size}px`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
        </svg>
    );
};

export const InfoCircle = ({ size = '40', fill }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill ?? 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={`${size}px`}
            height={`${size}px`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
        </svg>
    );
};

export const SearchIcon = ({ fill, size }: Props) => {
    return (
        <svg
            aria-hidden="true"
            fill={fill ?? 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={`${size}px`}
            height={`${size}px`}
            xmlns="http://www.w3.org/2000/svg">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
    );
};

export const Spinner = ({ fill, size }: Props) => {
    return (
        <svg
            aria-hidden="true"
            role="status"
            className="inline animate-spin"
            viewBox="0 0 100 101"
            width={`${size}px`}
            height={`${size}px`}
            fill={fill ?? 'none'}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
            />
        </svg>
    );
};

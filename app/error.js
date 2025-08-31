"use client"

import {useRouter} from "next/navigation";

export default function Error({error, reset}) {

    const router = useRouter();

    const handleGoBack = function () {
        return router.back();
    }


    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
            <p className='text-lg'>{error.message}</p>

            <div className={"flex gap-5"}>
                <button
                    className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
                    onClick={handleGoBack}
                >
                    Go back
                </button>
                <button
                    className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
                    onClick={reset}
                >
                    Try again
                </button>
            </div>
        </main>
    );
}

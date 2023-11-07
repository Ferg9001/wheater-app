import React, { ReactNode } from 'react';

const WheaterSimpleCard = ({children, title, value}: {children: ReactNode, title:string, value:string}) => {

    return <div className='border-solid border border-black grow drop-shadow-xl p-2 md:p-4 flex flex-col gap-2 items-center'>
        <div>{title}</div>
        <div className='flex gap-2'>
            <div className='hidden md:block'>{children}</div>
            <div>{value}</div>
        </div>
    </div>
}

export default WheaterSimpleCard;
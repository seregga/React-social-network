import React, { useState } from 'react';
import s from './Paginator.module.css';
import cn from 'classnames';


const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const prevPortionNumbersPages = (portionNumber - 1) * portionSize + 1;
    const nextPortionNumbersPages = portionNumber * portionSize;


    return (
        <div className={s.pages__numbers}>
            {portionNumber > 1
                ? <button className={s.paginator__button}
                    onClick={() => { setPortionNumber(portionNumber - 1) }}>-</button>
                : <button className={s.paginator__button} disabled={true}>-</button>
            }

            {pages.filter(p => p >= prevPortionNumbersPages && p <= nextPortionNumbersPages)
                .map(p => {
                    return <span key={p}
                        className={cn({ [s.selected__page]: currentPage === p }, s.num__page)}
                        // className={currentPage === p.num ? s.selected__page : s.num__page}
                        onClick={() => onPageChanged(p)}>{p}
                    </span>
                })
            }

            {portionCount > portionNumber
                ? <button className={s.paginator__button}
                    onClick={() => setPortionNumber(portionNumber + 1)}>+</button>
                : <button className={s.paginator__button} disabled={true} >+</button>}

        </div>
    )
}

export default Paginator
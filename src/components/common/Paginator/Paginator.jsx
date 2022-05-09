import React, { useState } from "react";
import s from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({
    currentPage,
    onPageChanged,
    totalItemsCount,
    portionSize = 10,
}) => {
    let pagesCount = Math.ceil(totalItemsCount / portionSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.number}>
            {portionNumber > 1 && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                >
                    Prev
                </button>
            )}

            {pages
                .filter(
                    (e) =>
                        e >= leftPortionPageNumber &&
                        e <= rightPortionPageNumber
                )
                .map((e) => {
                    return (
                        <span
                            className={cn(
                                {
                                    [s.selectedPage]:
                                        currentPage === e && s.pageNumber,
                                },
                                s.pageNumber
                            )}
                            key={e}
                            onClick={() => {
                                onPageChanged(e);
                            }}
                        >
                            {e}
                        </span>
                    );
                })}

            {portionCount > portionNumber && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Paginator;

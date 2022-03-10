import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChenged, portionSize = 12 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	const portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let riqhtPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={styles.paginator}>  {portionNumber > 1 ? <button onClick={() => { setPortionNumber(portionNumber - 1) }}>LEFT</button> : null}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= riqhtPortionPageNumber)
				.map((p) => {
					return <span className={currentPage === p ? styles.selectedPage : null} //props.currentPage === p && styles.selectedPage
						onClick={(e) => { onPageChenged(p) }}> {p + " - "}
					</span>
				})}
			{portionCount > portionNumber ? <button onClick={() => { setPortionNumber(portionNumber + 1) }}>RIGHT</button> : null}
		</div>
	)
}

export default Paginator;

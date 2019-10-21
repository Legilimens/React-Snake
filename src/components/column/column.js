import React from 'react';
import Cell from '../cell/cell.js';
import './column.scss';

function Column(props) {
	return (
		<div className="column">
			{
				props.columnData.map((el, key) => (
					<Cell
						key={key}
						columnId = {props.columnId}
						cellId = {key}
						index={key}
						cellData={el}
						snake={props.snake}
						apple={props.apple}
						rocks={props.rocks}
					/>
				))
			}
		</div>
	)
}

export default Column;
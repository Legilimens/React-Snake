import React from 'react';
import Column from '../column/column.js';
import './table.scss';

function Table(props) {
	return (
		<div className="gameTable">
			{
				props.field.map((el, key) => (
					<Column
						key={key}
						columnData={el}
						columnId={key}
						snake={props.snake}
						apple={props.apple}
						rocks={props.rocks}
					/>
				))
			}
		</div>
	)
}

export default Table;
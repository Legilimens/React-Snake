import React, { useContext } from 'react';
import { FieldContext } from '../../context/field/fieldContext';
import Column from '../column/column.js';
import './table.scss';

function Table() {
	const { field } = useContext(FieldContext);
	return (
		<div className="gameTable">
			{
				field.map((el, key) => (
					<Column
						key={key}
						columnData={el}
						columnId={key}
					/>
				))
			}
		</div>
	)
}

export default Table;
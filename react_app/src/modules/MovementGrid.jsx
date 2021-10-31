import React, { useState } from 'react'

const MovementGrid = () => {

	const [row, setRow] = useState(0)
	const [column, setColumn] = useState(0)

	return <>

		<button style={{fontSize: '2em', margin: 10}} onClick={() => setColumn(column + 1)}>Move Right</button>
		<button style={{ fontSize: '2em', margin: 10 }} onClick={() => setRow(row + 1)}>Move 
		Down</button>
		<button style={{ fontSize: '2em', margin: 10 }} onClick={() => setColumn(column + 1)}>Move Right</button>

		<table style={{}}>
			<tbody>
				{
					[0, 1, 2, 3, 4].map((_, index) => {
						return <tr key={index}>
							{
								[0, 1, 2, 3, 4].map((_, colIndex) => {
									return <td key={colIndex} style={{ backgroundColor: 'lightgray', marginRight: 2, width: 100, height: 100, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
										{
											(colIndex === column && row === index)
												? <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
												: null
										}
									</td>
								})
							}
						</tr>
					})
				}
			</tbody>
		</table>
	</>
}

export default MovementGrid
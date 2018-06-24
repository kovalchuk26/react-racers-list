import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/Table.less';

export class Table extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {headers, rowsData, firstCellAsLink} = this.props;

        return (
            <div className='table'>
                <div className='table-row table-head'>
                    {headers.map((header, index) =>
                        <div key={index} className='table-cell'>{header}</div>
                    )}
                </div>

                {rowsData.map(row =>
                    <div key={row.id} className='table-row'>

                        {Object.keys(row).map((cell, index) => {
                            return firstCellAsLink && index === 0 ?
                                <div key={index} className={`table-cell ${firstCellAsLink ? 'table-cell__link' : ''}`}>
                                    <Link to={`/races/${row.id}`}>{row[cell]}</Link>
                                </div> :
                                cell !== 'id' ? <div key={index} className='table-cell'>{row[cell]}</div> :
                                    null;
                            }
                        )}

                    </div>
                )}

            </div>
        )
    }
}

Table.defaultProps = {
    firstCellAsLink: false
};

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string.isRequired),
    rowsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    firstCellAsLink: PropTypes.bool
};




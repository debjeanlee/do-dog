import React from 'react'
import BeerList from './BeerList'
import { Row } from 'react-bootstrap'
import PageList from './PageList'

function All(props) {

    
    return (
        <div>
            <Row className="d-flex justify-content-around">
                <h1 className="text-center">ALL BEER</h1>
                <PageList setPage={props.setPage} page={props.page}/>
            </Row>
            <BeerList beer={props.beer} page={props.page} setSingleBeer={props.setSingleBeer}/>
        </div>
    )
}

export default All

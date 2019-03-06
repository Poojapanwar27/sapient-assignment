import React from 'react';
import Button from '../../atoms/button';

const LoadMore = props => {
    return(
        <Button label="More" clickHandler={props.onLoadMore} classType="secondary" type="button" />
    )
}

export default LoadMore;
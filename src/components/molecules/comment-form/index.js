import React from 'react';
import FormTextarea from '../../atoms/form-textarea';
import Button from '../../atoms/button';

const CommentForm = props => {
    const {data} = props;
    return(
        <form method="post" action={`/item_`+data.id} onSubmit={props.handleFormSubmit}>
            <FormTextarea text={props.text} />
            <Button label="Add comment" classType="primary" type="submit" />
            <input type="hidden" name="parent" value={data.id} />
        </form>
    );
}

export default CommentForm;
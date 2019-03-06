import React from 'react';

const FormTextarea = props => {
    return(
        <fieldset>
            <textarea name="text" rows="4" cols="80">
                {props.text}
            </textarea>
        </fieldset>
    );
}

export default FormTextarea;
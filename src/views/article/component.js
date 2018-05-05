import React from 'react';
import * as texts from '../../nls/texts';

export default function () {
    return (
        <div className='article'>
            <h2>{texts.shortArticle.title}</h2>
            <p>{texts.shortArticle.body}</p>
        </div>
    );
}
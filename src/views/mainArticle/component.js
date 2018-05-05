import React from 'react';
import * as texts from '../../nls/texts'

export default function () {
    return (
        <div>
            <h2>{texts.mainArticle.title}</h2>
            <div className='main-article'>
                <img className='front-page-image' src='Assets/news_img.png' alt='' />
                <p>{texts.mainArticle.body}</p>
            </div>
            
        </div>
    );
}
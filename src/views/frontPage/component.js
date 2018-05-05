import React from 'react';
import MainArticle from '../mainArticle/component';
import Article from '../article/component';
import * as texts from '../../nls/texts';

export default function () {
    return (
        <div className='front-page'>
            <h1>{texts.newspaper}</h1>
            <div className='front-page-news'>
                <MainArticle />
                <div className='side-articles'>
                    <Article />
                    <Article />
                </div>
                <div className='bottom-articles'>
                    <Article />
                    <Article />
                </div>
            </div>
        </div>
    )
}
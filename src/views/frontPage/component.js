import React from 'react';
import MainArticle from '../mainArticle/component';
import Article from '../article/component';
import * as texts from '../../nls/texts';

export default function () {
    return (
        <div className='front-page'>
            <h1>{texts.newspaper}</h1>
            <div className='front-page-news'>
                <div className='main-article'>
                    <MainArticle />
                </div>
                <div className='side-articles'>
                    <Article />
                    <Article />
                </div>
                <div className='bottom-articles'>
                    <Article />
                    <Article />
                </div>
                <div className='ads'>
                    <img className='front-page-ad' src='Assets/news_ad.svg' alt='Fake advertisements' />
                </div>
            </div>
        </div>
    )
}
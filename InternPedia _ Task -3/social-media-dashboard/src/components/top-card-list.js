import { nanoid } from 'nanoid';
import React from 'react';
import Card from './Card';
import '../styles/top-card-list.css';

const cardListData = [
    {
        userName: '@ammaarquadri',
        followers: '546',
        todayFollowers: 12,
        icon: "images/facebook.png",
        name: 'facebook'
    },
    {
        userName: '@maq765',
        followers: '2850',
        todayFollowers: 20,
        icon: "images/twitter.png",
        name: 'twitter'
    },
    {
        userName: '@_shoadow',
        followers: '4550',
        todayFollowers: 30,
        icon: "images/instagram24.png",
        name: 'instagram'
    },
    {
        userName: '@maq765',
        followers: '4140',
        todayFollowers: -50,
        icon: "images/youtube.png",
        name: 'youtube'
    },
];

function TopCardList() {
    return (
        <section className="top-card">
            <div className="wrapper">
                <div className="grid">
                    {cardListData.map((cardData) => (
                        <Card key={nanoid()} {...cardData} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopCardList;

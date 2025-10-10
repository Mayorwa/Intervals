
// ASSETS
import StadiumImg from '@/assets/img/stock/athlete.webp'
import React from 'react'

const HomePage: React.FC = () => {

    return (
        <>
            <div className="mx-auto mt-40">
                <div className="flex flex-col items-center justify-center h-full">
                    <img src={StadiumImg} className="w-[400px]" alt="Stadium"/>
                    <h2 className="text-xl mt-3 text-center uppercase">Capturing the intervals <br/> between <span>Victory</span> and <span>Defeat</span></h2>
                </div>
            </div>
        </>
    )
}

export default HomePage;
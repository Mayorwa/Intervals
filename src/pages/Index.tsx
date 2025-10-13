import React, { useState } from 'react'
// ASSETS
import StadiumImg from '@/assets/img/stock/athlete.webp'
import TextInput from "@/components/ui/Input/TextInput.tsx";
import Button from "@/components/ui/Button/Button.tsx";

const HomePage: React.FC = () => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <>
            <div className="mx-auto mt-40">
                <div className="flex flex-col items-center justify-center h-full">
                    <img src={StadiumImg} className="w-[400px]" alt="Stadium"/>
                    <h2 className="text-xl mt-3 text-center uppercase">Capturing the intervals <br/> between <span>Victory</span> and <span>Defeat</span></h2>
                    <div className="flex items-center justify-between w-full mt-10">
                        <TextInput
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Email Address"
                            inputClasses="mr-3"
                        />
                        <Button btn-class="w-fit" name="nextButton" onClick={() => {}}>Join Waitlist</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
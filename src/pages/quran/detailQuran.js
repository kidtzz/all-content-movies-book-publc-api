import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DetailQuran() {
    const [name, setName] = useState("");
    const [nameTrans, setNameTrans] = useState("");
    const [nameEng, setNameEng] = useState("");
    const [quranArr, setQuranArr] = useState();

    const { getIdQuranResult } = useSelector((state) => state.reducerQuran);

    useEffect(() => {
        if (getIdQuranResult) {
            setName(getIdQuranResult.name);
            setNameTrans(getIdQuranResult.englishNameTranslation);
            setNameEng(getIdQuranResult.englishName);
            setQuranArr(getIdQuranResult.ayahs);
        }
    }, [getIdQuranResult]);

    // console.log("ini datanya?", getIdQuranResult);

    return (
        <>
            <h1>{name}</h1>
            <h1>{nameTrans}</h1>
            <h1>{nameEng}</h1>

            {quranArr?.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.numberInSurah}</p>
                        <p>{item.text}</p>
                    </div>
                );
            })}
        </>
    );
}

export default DetailQuran;

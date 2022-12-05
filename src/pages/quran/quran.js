import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Controls from "../../components";
import { getQuran, getIdQuran } from "../../redux/action/actionQuran";

function Quran() {
    const { getListQuranResult, getListQuranLoading, getListQuranError } =
        useSelector((state) => state.reducerQuran);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuran());
    }, [dispatch]);
    const navigate = useNavigate();
    const detailQuran = (dataQ) => {
        navigate(`/Quran/${dataQ.englishName.replace(/ /g, "-")}`);
        dispatch(getIdQuran(dataQ));
    };

    return (
        <>
            <div className="container">
                <h2>data ini</h2>
                {getListQuranResult ? (
                    <>
                        <div className="container">
                            <p>{getListQuranResult.data.edition.englishName}</p>
                            <p>{getListQuranResult.data.edition.name}</p>
                            <p>{getListQuranResult.data.edition.identifier}</p>
                        </div>
                        <div className="container">
                            <h4>array surah</h4>
                            {getListQuranResult.data.surahs
                                .slice(0, 10)
                                .map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Controls.ButtonCus
                                                type="button"
                                                buttonStyle="btn--primary--outline"
                                                onClick={() => {
                                                    detailQuran(item);
                                                }}
                                            >
                                                {item.name}
                                            </Controls.ButtonCus>
                                            <p>{item.englishName}</p>
                                        </div>
                                    );
                                })}
                        </div>
                    </>
                ) : getListQuranLoading ? (
                    <>
                        <p> Loading data ngap....</p>
                    </>
                ) : (
                    <p>
                        {getListQuranError
                            ? getListQuranLoading
                            : "data Kosong bg.."}
                    </p>
                )}
            </div>
        </>
    );
}

export default Quran;

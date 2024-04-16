import { FC, useCallback, useState } from 'react';

export const ChartTypeSelector: FC = ()=>{
    const [is3Dchart, setIs3Dchart] = useState(false)
    const onChangeChartType = useCallback(()=>{
        setIs3Dchart(prev=>!prev)
    },[])

    return (
        <>
            <button onClick={onChangeChartType}>{is3Dchart? '2D':'3D'}</button>
            {/* {!is3Dchart && (

            )
            } */}
        </>
    )
}

export default ChartTypeSelector
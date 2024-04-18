import { FC, useCallback, useState } from 'react';
import { ChartType } from '../../../entities/chart';

export type ViewSelectorProps = {
    onChange: (arg0: ChartType) => void;
}

export const ViewSelector: FC<ViewSelectorProps> = ({onChange})=>{
    const [is3Dchart, setIs3Dchart] = useState(false)
    const onChangeChartType = useCallback(()=>{
        onChange(is3Dchart? ChartType.chart2d : ChartType.chart3d)
        setIs3Dchart(prev=>!prev)
    },[onChange, is3Dchart])

    return (
        <>
            <button onClick={onChangeChartType}>{is3Dchart? '2D':'3D'}</button>
        </>
    )
}

export default ViewSelector
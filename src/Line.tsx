import React, { useState } from "react";
import { AxisOptions, Chart } from "react-charts";
interface SequenceItem {
    index: number;
    value: number
}

export default function Line(props: { seq: any; }) {

    const [scaleType, setScaleType] = useState<any>('linear');

    const setScale = (value: any) => {
        setScaleType(value.checked ? 'log': 'linear');        
    }

    const data = [
        {
            series: 'Series 1',
             data: props.seq
        },
    ];
      
  const primaryAxis = React.useMemo<
    AxisOptions<SequenceItem>
  >(
    () => ({
      getValue: (datum) => datum.index,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<SequenceItem>[]
  >(
    () => [
      {
        getValue: (datum) => datum.value,
        scaleType: scaleType
      },
    ],
    [scaleType]
  );

  return (
    <>
    Use Log Scale:
    <input type="checkbox" name="setLogScale" onChange={event => setScale(event.target)} />
      <br /> 
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
    </>
  );
}

import { useEffect, useState } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface SequenceItem {
  index: number;
  value: number
}

export default function Linev2(props: { seq: any; }) {
  const [scaleType, setScaleType] = useState<boolean>(false);
  const defaultOptions = {
    theme: "dark2",
    animationEnabled: true,
    title: {
      text: "Hailstone Sequence"
    },
    axisX: {
      title: "Iterations",
      includeZero: false
    },
    axisY: {
      title: "Integer Values",
      logarithmic: scaleType,
      includeZero: false
    },
    data: [
      {
        toolTipContent: "{y}",
        type: "spline",
        color: "#18d4d9",
        dataPoints: props.seq,
      },
    ],
  };
  const [options, setOptions] = useState(defaultOptions);

  const setScale = (value: any) => {
    setScaleType(value.checked ? true : false);
  }

  useEffect(() => {
    defaultOptions.data[0].dataPoints = props.seq.map((m: SequenceItem) => {
      return {
        x: m.index,
        y: m.value
      }
    });
    setOptions(defaultOptions);
    document.getElementById('chart')?.scrollIntoView({behavior: 'smooth'});
  }, [props.seq, scaleType])



  return (
    <div id="chart">
      <div className="legends">
        <div className="log-check">
          <span>Use Log Scale:</span>
          <input type="checkbox" name="setLogScale" onChange={event => setScale(event.target)} />
        </div>
        <div>
          <span>Initial value: { props.seq[0].value}</span>
        </div>
        <div>
          <span>No. of Iterations: { props.seq.length}</span>
        </div>
      </div>

      <div>
        <CanvasJSChart
          options={options}
        /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    </div>

  );
}

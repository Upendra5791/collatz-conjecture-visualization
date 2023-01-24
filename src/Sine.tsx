import { useEffect, useState } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface SequenceItem {
  index: number;
  value: number
}

export default function Linev3() {

  const [amplitude, setAmplitude] = useState(1);
  const [scaleType, setScaleType] = useState<boolean>(false);
  const generateValues = () => {
    const sineVal =  new Array(50).fill(0).map((v, i) => {
      return {
        x: i,
        y: Math.sin(i) * amplitude
      }
    });
    console.log(sineVal);
    return sineVal;
  }
  const defaultOptions = {
    theme: "dark2",
    animationEnabled: true,
    title: {
      text: "Sine Wave"
    },
    axisX: {
      title: "",
      includeZero: false
    },
    axisY: {
      title: "",
      logarithmic: scaleType,
      includeZero: false
    },
    data: [
      {
        toolTipContent: "{y}",
        type: "spline",
        color: "#18d4d9",
        dataPoints: generateValues(),
      },
    ],
  };
  const [options, setOptions] = useState(defaultOptions);

  const setScale = (value: any) => {
    setScaleType(value.checked ? true : false);
  }

  useEffect(() => {
    setOptions(defaultOptions);
    document.getElementById('chart')?.scrollIntoView({behavior: 'smooth', block: 'end'});
  }, [amplitude])

  return (
    <div id="chart">
      <div className="input">
        <label>Amplitude</label>
        <input type="number" name="amp" id="" value={amplitude} onChange={event => setAmplitude(Number(event.target.value))}/>
      </div>
      <div className="legends">
        <div className="log-check">
          <span>Use Log Scale:</span>
          <input type="checkbox" name="setLogScale" onChange={event => setScale(event.target)} />
        </div>
        {/* <div>
          <span>Initial value: { props.seq[0].value}</span>
        </div>
        <div>
          <span>No. of Iterations: { props.seq.length}</span>
        </div> */}
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

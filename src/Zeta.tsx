import { useEffect, useState } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Linev3() {

  const [val, setVal] = useState(2);
  const [scaleType, setScaleType] = useState<boolean>(false);

  const generateValues = (v:number) => {
    const series =  [];
    let i = 1;
    // series[series.length-1].y <= val
    while (i <= 1000) {
      i++;
      series.push({
        x: (1/Math.pow(i,val)),
        y: 1
      });
    }
    console.log(series);
    return series;
  }

  const defaultOptions = {
    theme: "dark2",
    animationEnabled: true,
    title: {
      text: "Riemann zeta function"
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
    data: new Array(10).fill(0).map((m,i) => {
      return {
        toolTipContent: "{x}",
        type: "spline",
        color: "#18d4d9",
        dataPoints: generateValues(i+1),
      }
    })
  };
  const [options, setOptions] = useState(defaultOptions);

  const setScale = (value: any) => {
    setScaleType(value.checked ? true : false);
  }

  useEffect(() => {
    setOptions(defaultOptions);
    document.getElementById('fibo')?.scrollIntoView({behavior: 'smooth', block: 'end'});
  }, [val, scaleType])

  return (
    <div id="fibo">
      <div className="input">
        <label>Limit</label>
        <input type="number" name="amp" id="" value={val} onChange={event => setVal(Number(event.target.value))}/>
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

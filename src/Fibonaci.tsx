import { useEffect, useState } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Linev3() {

  const [limit, setLimit] = useState(10);
  const [scaleType, setScaleType] = useState<boolean>(false);
  const generateValues = () => {
    const series =  [{x:0,y:1},{x:1,y:1}];
    let i = 1;
    while (series[series.length-1].y <= limit) {
      i++;
      series.push({
        x: i,
        y: series[i-2].y + series[i-1].y
      });
    }
    console.log(series);
    return series;
  }
  const defaultOptions = {
    theme: "dark2",
    animationEnabled: true,
    title: {
      text: "Fibonaci Series"
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
    document.getElementById('fibo')?.scrollIntoView({behavior: 'smooth', block: 'end'});
  }, [limit, scaleType])

  return (
    <div id="fibo">
      <div className="input">
        <label>Limit</label>
        <input type="number" name="amp" id="" value={limit} onChange={event => setLimit(Number(event.target.value))}/>
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

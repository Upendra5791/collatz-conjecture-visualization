import { useEffect, useState } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Linev3() {

  const [val, setVal] = useState(2);
  const [scaleType, setScaleType] = useState<boolean>(false);

  const getSign = () => {
    return Math.random() > 0.5 ? 1 : -1;
  }
  const generateValues = () => {
    const series:{
      x: number;
      y: number;
  }[] =  [];
    let i = 0;
    //  Number(Number(Math.random() * 10 * 1).toFixed(2))
    while (i <= 50) {
      i++;
      series.push({
        x: i,
        y: Number(Number(Math.random() * 10 * val).toFixed(2)) * getSign()
      });
    }
    console.log(series);
    return series;
  }

  const defaultOptions = {
    theme: "dark2",
    animationEnabled: true,
    title: {
      text: "Random chart function"
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
    data: [{
      toolTipContent: "{y}",
      color: "#18d4d9",
      dataPoints: generateValues(),
    }]
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

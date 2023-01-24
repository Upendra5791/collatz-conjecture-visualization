import { useState } from 'react';
import './App.css';
import Line from './Line';
import Linev2 from './Linev2';

interface SequenceItem {
  index: number;
  value: number
}

const f_even = (n: number) => {
  return n / 2;
}
const f_odd = (n: number) => {
  return (3 * n + 1) / 2;
}

const getNextInteger = (n: number) => {
  return n % 2 === 0 ? f_even(n) : f_odd(n);
}

const generateSequence = (n: number) => {
  const arr: SequenceItem[] = [];
  let i = 0;
  arr.push(
    {
      index: i,
      value: n
    }
  );
  while (n !== 1) {
    n = getNextInteger(n);
    i++;
    arr.push(
      {
        index: i,
        value: n
      }
    );
  }
  console.log(arr);
  return arr;
}

function App() {
  const [val, setVal] = useState(0);
  const [seq, setSeq] = useState<SequenceItem[]>([]);

  const updateValue = (input: string) => {
    setVal(Number(input));
  }

  const generate = () => {
    setSeq(generateSequence(val));
  }

  return (
    <>
      <div className="App">
        <header className="app-header">
          <h1>
            Collatz Conjecture
          </h1>
          <span>(3n + 1 sequence)</span>
        </header>
        <article>
          <p>The Collatz conjecture is one of the most famous unsolved problems in mathematics. The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1. It concerns sequences of integers in which each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. </p>
          <p className='highlight'>The conjecture is that these sequences always reach 1, no matter which positive integer is chosen to start the sequence.</p>
        </article>
        <div className='input-int'>
          <p>Try it out yourself! Enter a positive integer below and generate the sequence.</p>
          <input type="number" name="input" min={1} onChange={e => updateValue(e.target.value)} />
        </div>
        <div className='btn-container'>
          <button disabled={!val || val < 1} onClick={generate}>Generate Sequence</button>
        </div>
        <div>
          {/* {<div className="chart-container">
          <Line seq={seq}/>
        </div>} */}
          {
            !!seq.length ?
              <div className="chart-container-v2">
                <Linev2 seq={seq} />
              </div>
              :
              <p></p>
          }
        </div>
      </div>

    </>
  );
}

export default App;

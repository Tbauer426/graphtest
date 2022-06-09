import './App.css';
import Graph from './Graph/Graph';

function App() {
  var arr = [4,	9,	7,	3,	3,
    10,	5,	8,	6,	8,
    10,	2,	3,	6,	9,
    5,	4,	8,	7,	9,
    5,	10,	10,	10,	6,
    10,	4,	1,	3,	3,
    4,	6,	6,	8,	3,
    9,	7,	2,	9,	8,
    7,	10,	4,	7,	3,
    10,	8,	9,	1,	4,
    1,	1, 1, 6,	3,
    8,	6	,10,	2,	2,
    8,	5	,2	,10,	6,
    2,	9	,8	,8,	10,
    2,	1	,7	,4,	6,
    3,	4	,3	,2,	9,
    3,	4	,7	,3,	4,
    7,	3	,2	,3,	7,
    9,	7	,9	,7,	7,
    3,	10,	2,	8,	9];

    function parser(temp){
      let t = {};
      for(let x=0; x<temp.length; x++){
        if(t[arr[x]]===undefined){
          t[arr[x]] = 0;
        }
        t[arr[x]] = t[arr[x]] + 1;
      }
      return t;
    }

  return (
    <div>
      <header>
        <Graph data={parser(arr)}/>
      </header>
    </div>
  );
}

export default App;

import './Counter.css';

function CounterComponent (props) {
    var startCount = props.startingCount;
    var countRate = props.countRate;


    function buttonClick (rate){
        console.log(rate);
        startCount += countRate;
        console.log ("Start Count: ", startCount)

    }

    function minusClick (rate){
        console.log(rate);
        startCount -= countRate;
        console.log ("Start Count: ", startCount)

    }


    return (

     <div className= "container">

      <h1>Counter: {startCount} </h1>
      <h1>Count Rate: {countRate}</h1>
        <div className= "button">
            <button onClick= {()=> buttonClick(startCount, countRate)}> + </button>
            <button onClick= {()=> minusClick(startCount, countRate)}> - </button>
        </div>
    </div>
    )

}

export default CounterComponent;
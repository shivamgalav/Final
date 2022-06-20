import React,{useState} from 'react'
import './ShQuiz.css'
function ShowQuiz(props) {
    const [iterator, setIterator] = useState(0);
    const [marks, setMarks] = useState(0);
    const [showMarks, setShowMarks] = useState(false);//update prev marks if taken
    const [submitted, setSubmitted] = useState(false);
    let it = iterator;
    const handlePrev = ()=>{
        it = iterator;
        it--;
        if(it < 0){
            setIterator(0);
        }
        else if(it >= props.data.length-1){
            setIterator(iterator-1);
        }
        else{
            setIterator(it);
        }
        setShowMarks(false)
    }
    const handleNext = ()=>{
        it = iterator;
        it++;
        if(it < 0){
            setIterator(0);
        }
        else if(it > props.data.length-1){
            setIterator(iterator);
        }
        else{
            setIterator(it);
        }
        handleSubmit();
    }

    const handleSubmit = ()=>{
        let inp = document.getElementsByName("a");
        for(let i = 0;i<inp.length;i++){
            if(inp[i].checked){
                        props.studentData[props.data[iterator].id] = inp[i].value;
            }
        }
        localStorage.setItem(1, JSON.stringify(props.studentData));
        setShowMarks(false)
    }

    const handleMainSubmit = ()=>{
        handleSubmit();
        let mk = 0;
        props.data.map((idx)=>{
            if(props.studentData[idx.id] == idx.options.correctAnswer){
                mk++;
            }
        })
        setMarks(mk);
        setSubmitted(true);
        setShowMarks(false)
    }
    const show = ()=>{
        setShowMarks(true);
    }

    const handleRetake = ()=>{
        setShowMarks(false);
        setSubmitted(false);
        setIterator(0);
        props.data.map((idx)=>{
            props.studentData[idx.id] = "";
        })
        let inp = document.getElementsByName("a");
        for(let i = 0;i<inp.length;i++){
            if(inp[i].checked){
                inp[i].checked = false;
            }
        }
        localStorage.setItem(1, JSON.stringify(props.studentData));
    }
  return (
    <>
    {props.data.length == 0 ? <h1>No quiz for this course</h1>:
        <>
        <button onClick= {handleMainSubmit} className='btn btn-success' style={{marginLeft:"80%",marginTop:"3%"}}>
                Submit
        </button>
        {submitted &&<> <h3 style={{marginLeft:"40%"}}>Submitted Successfully</h3>
        <button onClick= {show} className='btn btn-warning' style={{marginLeft:"42%"}}>
                Show Marks
        </button>
        <button onClick= {handleRetake} className='btn btn-primary' style={{marginLeft:"2%"}}>
                Retake
        </button></>}
        {showMarks && <h3 style={{marginLeft:"43%",marginTop:"1%"}}>Your Marks {marks}</h3>}
        <div class="container mt-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10 col-lg-10">
                <div class="border">
                    <div class="question bg-white p-3 border-bottom">
                        <div class="d-flex flex-row justify-content-between align-items-center mcq">
                            <h4>MCQ Quiz</h4><span>({iterator+1} of {props.data.length})</span></div>
                    </div>
                    <div class="question bg-white p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center question-title">
                            <h3 class="text-danger">Q.</h3>
                            <h5 class="mt-1 ml-2">{props.data[iterator].question}</h5>
                        </div><div class="ans ml-2">
                            <label class="radio"> <input type="radio" name="a" value={props.data[iterator].options.option1}/> <span>{props.data[iterator].options.option1}</span>
                            </label>    
                            </div><div class="ans ml-2">
                            <label class="radio"> <input type="radio" name="a" value={props.data[iterator].options.option2}/> <span>{props.data[iterator].options.option2}</span>
                            </label>    
                            </div><div class="ans ml-2">
                            <label class="radio"> <input type="radio" name="a" value={props.data[iterator].options.option3}/> <span>{props.data[iterator].options.option3}</span>
                            </label>    
                            </div><div class="ans ml-2">
                            <label class="radio"> <input type="radio" name="a" value={props.data[iterator].options.option4}/> <span>{props.data[iterator].options.option4}</span>
                            </label>    
                            </div></div>
                    <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button class="btn btn-primary d-flex align-items-center btn-danger" onClick={handlePrev} type="button"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button class="btn btn-primary border-success align-items-center btn-success" onClick={handleNext} type="button">Next<i class="fa fa-angle-right ml-2"></i></button></div>
                </div>
            </div>
        </div>
    </div>
    </>
}
    </>
  )
}

export default ShowQuiz
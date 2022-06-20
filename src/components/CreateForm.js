import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Question from './Question';
function useForceUpdate(){
        // eslint-disable-next-line
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
      }
function CreateForm(props) {
const forceUpdate = useForceUpdate()
  const [show, setShow] = useState(false);
  const [quest, setQuestion] = useState();
  const [opt1, setOpt1] = useState();
  const [opt2, setOpt2] = useState();
  const [opt3, setOpt3] = useState();
  const [opt4, setOpt4] = useState();
  const [correct, setCorrect] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=()=>{
        setShow(false);
        let temp = {    question:quest,
                        options:{
                        option1 : opt1,
                        option2 : opt2,
                        option3 : opt3,
                        option4 : opt4,
                        correctAnswer : correct
                },
                id: new Date().getTime()
        }
        props.data.push(temp);
        localStorage.setItem(0, JSON.stringify(props.mainData));
        console.log(props.data);
        console.log(props.mainData);

        setOpt1('');
        setOpt2('');
        setOpt3('');
        setOpt4('');
        setCorrect('');
  }

  return (
    <>
        <Button variant="primary" onClick={handleShow} style={{ marginLeft: "70%", marginTop: "1%"}}>
                Add Question 
        </Button>

        {props.data.map(it=>(
                <Question tData = {it} forceUpdate={forceUpdate} delData={props.data} mainData={props.mainData}/>
        ))}
        {/* <Question tData = {props.data[1]}/> */}
        {/* <Question/> */}
        <br/>
        


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                        <div className="container" style={{ minWidth: "20%", maxWidth: "90%" }}>
                                <form autoComplete='off'>
                        <table class="table" style={{ border: "none" }}>
                        
                        <tbody>
                        <tr>
                        <td style={{ border: "none" }}>
                                <div class="form-floating mb-7">
                                <input
                                type="text"
                                class="form-control"
                                id="Question"
                                placeholder="Question"
                                onChange={(e)=>{setQuestion(e.target.value);}}
                                required
                                />
                                <label for="floatingInput">Question Statement</label>
                                </div>
                        </td>
                        </tr>
                        <tr>
                        <td style={{ border: "none" }}>
                                <div class="form-floating mb-7">
                                <input
                                type="text"
                                class="form-control"
                                id="option a"
                                placeholder="option a"
                                onChange={(e)=>{setOpt1(e.target.value);}}
                                required
                                />
                                <label for="floatingInput">Option a</label>
                                </div>
                        </td>
                        </tr>
                        <tr>
                        <td style={{ border: "none" }}>
                                <div class="form-floating mb-7">
                                <input
                                type="text"
                                class="form-control"
                                id="option b"
                                placeholder="option b"
                                onChange={(e)=>{setOpt2(e.target.value);}}
                                required
                                />
                                <label for="floatingInput">Option b</label>
                                </div>
                        </td>
                        </tr>
                        <tr>
                        <td style={{ border: "none" }}>
                                <div class="form-floating mb-7">
                                <input
                                type="text"
                                class="form-control"
                                id="option c"
                                placeholder="option c"
                                onChange={(e)=>{setOpt3(e.target.value);}}
                                required
                                />
                                <label for="floatingInput">Option c</label>
                                </div>
                        </td>
                        </tr>
                        <tr>
                        <td style={{ border: "none" }}>
                                <div class="form-floating mb-7">
                                <input
                                type="text"
                                class="form-control"
                                id="option d"
                                placeholder="option d"
                                onChange={(e)=>{setOpt4(e.target.value);}}
                                required
                                />
                                <label for="floatingInput">Option d</label>
                                </div>
                        </td>
                        </tr>

                        <tr>
                        <td style={{ border: "none" }}>
                                <div class="form-floating mb-7">
                                <input
                                type="text"
                                class="form-control"
                                id="answer"
                                placeholder="correct Answer"
                                onChange={(e)=>{setCorrect(e.target.value);}}
                                required
                                />
                                <label for="floatingInput">Correct Answer</label>
                                </div>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </form>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save Question
          </Button>
        </Modal.Footer>
      </Modal>
        
    </>
  )
}

export default CreateForm
import React, { useState } from "react";


function Question(props) {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [quest, setQuest] = useState(props.tData.question);
  const [option1, setOption1] = useState(props.tData.options.option1);
  const [option2, setOption2] = useState(props.tData.options.option2);
  const [option3, setOption3] = useState(props.tData.options.option3);
  const [option4, setOption4] = useState(props.tData.options.option4);
  const [ans, setAns] = useState(props.tData.options.correctAnswer)

  const handleDel = (e) => {
    // console.log(props.data);
    if (window.confirm("Are u Sure?")) {
      props.delData.splice(
        props.delData.findIndex((a) => a.id == e.currentTarget.id),
        1
      );
      localStorage.setItem(0, JSON.stringify(props.mainData));
      props.forceUpdate();
    }
  };
  const handleQuest = (e) => setQuest(e.target.value);
  const handleOption1 = (e) => setOption1(e.target.value);
  const handleOption2 = (e) => setOption2(e.target.value);
  const handleOption3 = (e) => setOption3(e.target.value);
  const handleOption4 = (e) => setOption4(e.target.value);
  const handleAns = (e)=> setAns(e.target.value);


  const handleEdit = (e) => {
    console.log(props.tData)
    setEdit(true);
    setId(e.currentTarget.id);
  };
  const handleConfirmEdit = () => {
    setEdit(false);
    // console.log(props.data)
    // props.tData.map((obj) => {
    //   if (obj.id == id) {
    //     obj.question = quest;
    //     obj.options.option1 = option1;
    //     obj.options.option2 = option2;
    //     obj.options.option3 = option3;
    //     obj.options.option4 = option4;
    //     console.log(obj)
    //   }
    // });
    props.tData.question = quest;
    props.tData.options.option1 = option1
    props.tData.options.option2 = option2
    props.tData.options.option3 = option3
    props.tData.options.option4 = option4
    props.tData.options.correctAnswer = ans
    localStorage.setItem(0, JSON.stringify(props.mainData));
  };
  return (
    <>
      <div
        className="card"
        style={{
          maxWidth: "50rem",
          marginLeft: "25%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <div className="card-header">
          {!edit && <h5 className="card-title">{props.tData.question}</h5>}
          {edit && (
            <input
              type="title"
              className="form-control"
              id="exampleFormControlInput1"
              value={quest}
              onChange={handleQuest}
            />
          )}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {!edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  a.
                </span>
                <input
                  type="text"
                  class="form-control"
                  style={{ backgroundColor: "white" }}
                  disabled
                  value={option1}
                  onChange={handleOption1}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
            {edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white"}}
                >
                  a.
                </span>
                <input 
                  type="text"
                  class="form-control"
                  value={option1}
                  onChange={handleOption1}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
          </li>
          <li className="list-group-item">
            {!edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  b.
                </span>
                <input
                  type="text"
                  class="form-control"
                  style={{ backgroundColor: "white" }}
                  disabled
                  value={option2}
                  onChange={handleOption2}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
            {edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  b.
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={option2}
                  onChange={handleOption2}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
          </li>
          <li className="list-group-item">
            {!edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  c.
                </span>
                <input
                  type="text"
                  class="form-control"
                  style={{ backgroundColor: "white" }}
                  disabled
                  value={option3}
                  onChange={handleOption3}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
            {edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  c.
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={option3}
                  onChange={handleOption3}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
          </li>
          <li className="list-group-item">
            {!edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  d.
                </span>
                <input
                  type="text"
                  class="form-control"
                  style={{ backgroundColor: "white" }}
                  disabled
                  value={option4}
                  onChange={handleOption4}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
            {edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  d.
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={option4}
                  onChange={handleOption4}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
          </li>
          <li className="list-group-item">
            {!edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                 Ans.
                </span>
                <input
                  type="text"
                  class="form-control"
                  style={{ backgroundColor: "white" }}
                  disabled
                  value={ans}
                  onChange={handleAns}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
            {edit && (
              <div class="input-group">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "white" }}
                >
                  Ans.
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={ans}
                  onChange={handleAns}
                  aria-label="option1"
                  aria-describedby="basic-addon1"
                />
              </div>
            )}
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-success"
              id={props.tData.id}
              onClick={handleEdit}
            >
              Edit Question
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-danger"
              id={props.tData.id}
              onClick={handleDel}
            >
              Delete Question
            </button>
            &nbsp;&nbsp;
            {edit && (
              <button className="btn btn-warning" onClick={handleConfirmEdit}>
                Confirm Edit
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Question;

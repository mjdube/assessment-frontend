import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import questions from "./questions.json";

const App = () => {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          picked: "",
          name: "",
        }}
        onSubmit={() => console.log("clicked")}
      >
        <Form>
          {questions.questions.map((question) =>
            question.code === "Q1" ? (
              <>
                <label className="form-label">{question.text}?</label>
                <div role="group" aria-labelledby="my-radio-group">
                  <label className="form-control form-check-label">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="picked"
                      value={question.trueLabel}
                      onClick={() => setCheck(true)}
                    />
                    {question.trueLabel}
                  </label>
                  <label className="form-control form-check-label">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="picked"
                      value="Two"
                      onClick={() => setCheck(false)}
                    />
                    {question.falseLabel}
                  </label>
                </div>
              </>
            ) : null
          )}
          {check && (
            <>
              {questions.questions.map(
                (q) =>
                  q.code === "Q2" && (
                    <div>
                      <label className="form-label">{q.text}</label>
                      <Field
                        className="form-control mb-3"
                        id="name"
                        name="name"
                        placeholder={q.placeholder}
                        type={q.type}
                      />
                    </div>
                  )
              )}
            </>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;

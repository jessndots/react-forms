import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup';
import './NewTodoForm.css'

/** Form for creating new box to add to BoxList
 * 
 * Has state for the text of the todo list item;
 * on submission, sends {todoText} to fn rec'd from parent
 */

const NewTodoForm = ({ addTodo }) => {

    /** render form */
    return (
        <Formik
            initialValues={{ todoText: '' }}
            validationSchema={Yup.object({
                todoText: Yup.string()
                    .required('Required')
            })}
            onSubmit={(values) => {
                addTodo(values);
            }}
        >
            <Form className="NewTodoForm-Form">
                <div>
                    <label className="NewTodoForm-Label" htmlFor="todoText">Task</label>
                    <Field className="NewTodoForm-Field" id="todoText" name="todoText" type="text" />
                    <ErrorMessage name="todoText" />
                </div>
                <div className="NewTodoForm-Submit">
                    <button type="submit">Add Task</button>
                </div>
            </Form>
        </Formik>

    )
}

export default NewTodoForm;
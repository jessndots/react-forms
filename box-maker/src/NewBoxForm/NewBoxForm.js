import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup';
import './NewBoxForm.css'

/** Form for creating new box to add to BoxList
 * 
 * Has state for the backgroundColor/height/width of box;
 * on submission, sends {backgroundColor, height, width} to fn rec'd from parent
 */

const NewBoxForm = ({ addBox }) => {

    /** render form */
    return (
        <Formik
            initialValues={{ backgroundColor: '#000000', height: '50', width: '50' }}
            validationSchema={Yup.object({
                backgroundColor: Yup.string()
                    .required('Required'),
                height: Yup.number()
                    .min(1, 'Must have height of at least 1px')
                    .required('Required'),
                width: Yup.number()
                    .min(1, "Must have width of at least 1px")
                    .required('Required'),
            })}
            onSubmit={(values) => {
                addBox(values);
            }}
        >
            <Form className="NewBoxForm-Form">
                <div>
                    <label className="NewBoxForm-Label" htmlFor="backgroundColor">Background Color</label>
                    <Field className="NewBoxForm-Field" name="backgroundColor" type="color" />
                    <ErrorMessage name="backgroundColor" />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <Field className="NewBoxForm-Field" name="height" type="number" />
                    <ErrorMessage name="height" />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <Field className="NewBoxForm-Field" name="width" type="number" />
                    <ErrorMessage name="width" />
                </div>

                <div>
                    <button type="submit">Create Box</button>
                </div>
            </Form>
        </Formik>

    )
}

export default NewBoxForm;
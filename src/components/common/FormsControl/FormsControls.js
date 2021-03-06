import React from "react";
import s from "./formsControls.module.css";

const FormControl = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>{children}</div>
            {touched && error && <span>{error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};

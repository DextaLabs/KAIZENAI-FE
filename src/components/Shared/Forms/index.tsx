"use client";
import { FormikErrors, FormikValues, useFormik } from "formik";
import React, { Children, cloneElement } from "react";

type propType = {
  initialValue: FormikValues;
  validate: any;
  onSubmit: (value: FormikValues) => void;
  children: React.ReactElement;
};

const Forms = (props: propType) => {
  const { initialValue, validate, onSubmit, children } = props;

  const {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: validate,
    onSubmit: async values => {
      await onSubmit(values);
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  const filteredError: FormikErrors<FormikValues> = {};
  Object.keys(errors).forEach(key => {
    if (key in touched) {
      filteredError[key] = errors[key];
    }
  });

  return (
    <form
      noValidate
      onSubmit={async e => {
        e.preventDefault();
        e.stopPropagation();
        await handleSubmit(e);
      }}
    >
      {Children.map(children, child =>
        cloneElement(child, {
          handleChange,
          values,
          isSubmitting,
          errors: filteredError,
          handleBlur,
          touched,
        })
      )}
    </form>
  );
};

export default Forms;

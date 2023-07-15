import * as Yup from 'yup'

const validateYupSchema = Yup.object({
    date: Yup.date()
      .required("Date is required"),
    time: Yup.string()
      .required("Time is required"),
    guest: Yup.number()
    .required('Number of Guest is required'),
    occasion: Yup.string()
    .required("Occasion is required")
  });


  export {validateYupSchema}
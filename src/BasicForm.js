import { useFormik } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
    email : 
    yup.string()
    .min(5,"Provide Longer Email")
    .required()
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Pattern Not Matched"),
    password : 
    yup.string()
    .min(8)
    .max(12)
    .required()
  })

// const validateForm = (values) => {

//   const errors = {};

//   if(values.email.length < 5){
//     errors.email = "Provide longer Email"
//   }else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'}
//   if(values.password.length < 8){
//     errors.password = "Provide Bigger Password"
//   }else if(values.password.length > 12){
//     errors.password = "Provide Smaller Password"
//   }
//   return errors;
// }

export default function BasicForm() {

  const {handleBlur,handleSubmit,handleChange,values,errors,touched} = useFormik ({
    initialValues : { email:"", password:""},
    validationSchema : schema,
    onSubmit : (values) => {},
});
console.log("formik.touched",touched)
  return (
    <form onSubmit={handleSubmit}>
      <input
      id="email"
      name="email" 
      type="email" 
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur} />
  
      {touched.email && errors.email ? errors.email :"" }

      <input
      id="password"
      name="password" 
      type="password" 
      placeholder="Password"
      value = { values.password }
      onChange={handleChange}
      onBlur={handleBlur} />

     {touched.password && errors.password ? errors.password : ""}

      <button type="submit">Submit</button>
    </form>
  );
}



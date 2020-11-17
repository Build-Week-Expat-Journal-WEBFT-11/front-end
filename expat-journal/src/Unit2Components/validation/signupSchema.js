import * as yup from "yup"

export default yup.object().shape({
email:yup
.string()
.email("Please provide a valid email address")
.required("Please provide a valid email address"),
password:yup
.string()
.required("Please provide a password")
.min(4,"Password must be at least 5 characters"),
name:yup
.string()
.required("Please tell us your name."),
})

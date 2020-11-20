import * as yup from "yup"

export default yup.object().shape({
email:yup
.string()
.email("Please provide a valid email address")
.required("Please provide a valid email address"),
password:yup
.string()
.required("Please provide a password")
.min(4,"Password must be at least 5 characters")
.matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/, 
"Password must contain one special character"
)
.matches(/.*\d/,"Passwords must contain a number")
.matches(/(?=.*[A-Z])/,"Passwords must contain at least one(1) uppercase character"),
name:yup
.string()
.required("Please tell us your name."),
})

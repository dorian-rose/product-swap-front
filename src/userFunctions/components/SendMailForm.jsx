import { useAuth0 } from "@auth0/auth0-react";
import { dataFetch } from "../../helpers/fetch";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SendMailForm = (props) => {
    //to manage errors, consult result:
    const [ messageSuccess, setMessageSuccess]=useState(false)
     const [ isLoading, setIsLoading]=useState(false)

const navigate = useNavigate();
    //to manage form:
    const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

    //declare necessary variables
    const {user }=useAuth0()
  
    const {title, image, email}=props

    

const sendEmail =async (data)=>{
 setIsLoading(true)
    const {message,includeSender}=data
    

    //variables for fetch to POST email
    const method = "POST";
    const url = import.meta.env.VITE_EMAIL_URL
    const body = {
        "message": message,
        "userName": user.name,
        "userEmail": user.email,
        "sellerEmail": email,
        "title": title,
        "includeSender":includeSender,
    }
    
    //call fetch and receive result (ok)
    const consult =await  dataFetch(url, method, body)
   if (consult.ok){
   setIsLoading(false)
   setMessageSuccess(true) }
}

  return (
    <>  
    <h1 className="mx-5 uppercase tracking-widest text-2xl">
        Contact product poster:
      </h1>
      {isLoading &&   <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />}
      {messageSuccess ?  (<p className="font-thin my-2 mx-5 text-turquoise italic">Message sent successfully!</p>):(  <form className="m-5 border border-turquoise border-1 rounded-md p-5"  onSubmit={handleSubmit((data) => sendEmail(data))}>
    
    <div className="flex"> 
    <div className="w-16">  
        <img
            className=" border rounded-sm align-center"
            src={`http://localhost:3000/uploads/${image}`}
            alt={title}
          />
    </div> 
     <textarea  className="border px-2 h-22 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full ms-2 mb-5" {...register("message", {
    required: "Message is required",
    })} name="message" id="message" defaultValue={`Hello! I'm interested in your product, "${title.toLowerCase()}". Please contact me at ${user.email}.`}>

    </textarea> 
    </div>
  
    <p className="font-thin italic text-burgundy">
          {errors.message?.message}
    </p>
    
    <div>
    <label className="font-thin my-2 me-3" for="includeSender">Do you want to receive a copy of email?</label>
    <input
    {...register("includeSender")} 
      type="checkbox"
      id="includeSender"
      name="includeSender"
      defaultChecked />
   
  </div>
  <input  className="mt-2 w-full border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 " type="submit" defaultValue="Send" />
</form> )}
   

<button
        className="m-5 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
</>
  )
}

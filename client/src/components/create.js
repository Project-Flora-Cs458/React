import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   genus: "",
   species: "",
   description: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newSpecimen = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newSpecimen),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ genus: "", species: "", description: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="genus">Genus</label>
         <input
           type="text"
           className="form-control"
           id="genus"
           value={form.genus}
           onChange={(e) => updateForm({ genus: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="species">Species</label>
         <input
           type="text"
           className="form-control"
           id="species"
           value={form.species}
           onChange={(e) => updateForm({ species: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description</label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />        
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create specimen"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
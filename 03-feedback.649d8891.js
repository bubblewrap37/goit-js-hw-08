const e=document.querySelector(".feedback-form"),t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);t&&(e.elements.email.value=a.email,e.elements.message.value=a.message),e.addEventListener("input",function(e){let t=JSON.stringify({email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value});localStorage.setItem("feedback-form-state",t)});
//# sourceMappingURL=03-feedback.649d8891.js.map
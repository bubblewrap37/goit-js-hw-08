const e=document.querySelector(".feedback-form"),t=JSON.parse(localStorage.getItem("feedback-form-state"));e.elements.email.value=t.email,e.elements.message.value=t.message,e.addEventListener("input",function(e){let t=JSON.stringify({email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value});localStorage.setItem("feedback-form-state",t)});
//# sourceMappingURL=03-feedback.be9ff2bc.js.map

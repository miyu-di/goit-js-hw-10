import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as m,i as d}from"./assets/vendor-a71e76b7.js";let i,u;const h=document.querySelector("button"),y=m("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t&&t.length>0){i=t[0];const e=new Date;i<e?d.error({title:"Error",titleColor:"#fff",color:"#EF4040",message:"Please choose a date in the future",messageColor:"#fff",position:"topRight"}):h.disabled=!1}}});function C(t){u=setInterval(()=>{const e=new Date().getTime(),n=t-e,{days:c,hours:a,minutes:r,seconds:s}=g(n);document.querySelector("[data-days]").textContent=o(c),document.querySelector("[data-hours]").textContent=o(a),document.querySelector("[data-minutes]").textContent=o(r),document.querySelector("[data-seconds]").textContent=o(s),n<=0&&(clearInterval(u),d.success({title:"Success",titleColor:"#fff",color:"#59A10D",message:"Countdown Finished",messageColor:"#fff",position:"topRight"}))},1e3)}function g(t){const r=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:s,minutes:l,seconds:f}}function o(t){return t<0?"00":t<10?`0${t}`:t}document.querySelector("[data-start]").addEventListener("click",()=>{const t=y.selectedDates[0];C(t)});
//# sourceMappingURL=commonHelpers.js.map

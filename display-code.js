export default function displayCode(htmlCode, cssCode, jsCode) {
    const d = document;

    d.querySelectorAll(".menu").forEach(el => {
        el.addEventListener("click", e => {
            if(e.target.matches(".html-button")) {
                el.querySelector(".menu_code-html").classList.add("is-active");
                el.querySelector(".menu_code-css").classList.remove("is-active");
                el.querySelector(".menu_code-js").classList.remove("is-active");
                el.querySelector(".copy-button").classList.add("copy-html");
                el.querySelector(".copy-button").classList.remove("copy-css");
                el.querySelector(".copy-button").classList.remove("copy-js");
    
                el.querySelector(".code").innerText = htmlCode;
            }
            if(e.target.matches(".css-button")) {
                el.querySelector(".menu_code-css").classList.add("is-active");
                el.querySelector(".menu_code-html").classList.remove("is-active");
                el.querySelector(".menu_code-js").classList.remove("is-active");
                el.querySelector(".copy-button").classList.add("copy-css");
                el.querySelector(".copy-button").classList.remove("copy-html");
                el.querySelector(".copy-button").classList.remove("copy-js");

                el.querySelector(".code").innerText = cssCode[el.querySelector(".copy-css").dataset.name];
                
            }
            if(e.target.matches(".js-button")) {
                el.querySelector(".menu_code-js").classList.add("is-active");
                el.querySelector(".menu_code-css").classList.remove("is-active");
                el.querySelector(".menu_code-html").classList.remove("is-active");
                el.querySelector(".copy-button").classList.add("copy-js");
                el.querySelector(".copy-button").classList.remove("copy-html");
                el.querySelector(".copy-button").classList.remove("copy-css");
    
                el.querySelector(".code").innerHTML = jsCode;
            }
        })
    })
    
}
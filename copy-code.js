export default function copyCode(htmlCode, cssCode, jsCode) {
    const d = document;
    d.querySelectorAll(".copy-container").forEach(el => {
        el.addEventListener("click", async(e) => {
            if(e.target.matches(".copy-html") || e.target.matches(".copy-html *")) {
                try {
                    const copy = await navigator.clipboard.writeText(htmlCode);
                    el.querySelector(".copy-icon").style.backgroundImage = "url(assets/icons/copied.svg)";
                    el.querySelector(".copied-code").classList.add("copied");
                    el.querySelector(".copy-code").classList.remove("copy-text");
                    setTimeout(() => {
                        el.querySelector(".copy-icon").style.backgroundImage = "url(assets/icons/copy-clipboard.svg";
                        el.querySelector(".copied-code").classList.remove("copied");
                        el.querySelector(".copy-code").classList.add("copy-text");
                    }, 1000);
                } catch (error) {
                    console.log(error);
                }
            } else if(e.target.matches(".copy-css") || e.target.matches(".copy-css *")) {
                try {
                    const copy = await navigator.clipboard.writeText(cssCode[el.querySelector(".copy-css").dataset.name]);
                    el.querySelector(".copy-icon").style.backgroundImage = "url(assets/icons/copied.svg)";
                    el.querySelector(".copied-code").classList.add("copied");
                    el.querySelector(".copy-code").classList.remove("copy-text");
                    setTimeout(() => {
                        el.querySelector(".copy-icon").style.backgroundImage = "url(assets/icons/copy-clipboard.svg";
                        el.querySelector(".copied-code").classList.remove("copied");
                        el.querySelector(".copy-code").classList.add("copy-text");
                    }, 1000);
                } catch (error) {
                    console.log(error);
                }
            } else if(e.target.matches(".copy-js") || e.target.matches(".copy-js *")) {
                try {
                    const copy = await navigator.clipboard.writeText(jsCode);
                    el.querySelector(".copy-icon").style.backgroundImage = "url(assets/icons/copied.svg)";
                    el.querySelector(".copied-code").classList.add("copied");
                    el.querySelector(".copy-code").classList.remove("copy-text");
                    setTimeout(() => {
                        el.querySelector(".copy-icon").style.backgroundImage = "url(assets/icons/copy-clipboard.svg";
                        el.querySelector(".copied-code").classList.remove("copied");
                        el.querySelector(".copy-code").classList.add("copy-text");
                    }, 1000);
                } catch (error) {
                    console.log(error);
                }
            }
    
        })

    })    
}
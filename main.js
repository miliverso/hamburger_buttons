import displayMenu from "./display-menu.js";
import displayCode from "./display-code.js";
import copyCode from "./copy-code.js";


const htmlCode = `<button class="hamburger-menu_button">
    <div class="hamburguer-box">
        <span class="hamburger__bar-1"></span>
    </div>
</button>`,
cssCode = {
    asymmetric: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
    top: 0;
}

/* *** asymmetric animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.15s cubic-bezier(0.68, -0.6, 0.21, 1.03),
    width 0.1s ease;
}
.hamburger__bar-1 {
    width: 100%;
    height: 14%;
    top: 43%;
}
.hamburger__bar-1::before {
    content: "";
    width: 50%;
    height: 100%;
    top: -0.8rem;
    opacity: 1;
}
.hamburger__bar-1::after {
    content: "";
    width: 75%;
    height: 100%;
    top: 0.8rem;
    right: 24%;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.15s cubic-bezier(0.68, -0.6, 0.21, 1.03);
    transform: rotate(-45deg);
}
.is-active .hamburger__bar-1::before {
    transition: transform 0.15s cubic-bezier(0.68, -0.6, 0.21, 1.03);
    transform: translate(0.75rem, 0.07rem) rotate(90deg);
}
.is-active .hamburger__bar-1::after {
    transition: transform 0.15s cubic-bezier(0.68, -0.6, 0.21, 1.03);
    width: 55%;   
    transform: translate(0.08rem, -0.1rem) rotate(-90deg);
}
/* *** asymmetric animation ends *** */`,
    twister: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
    transition: transform 0.1s ease;
}
.hamburguer-icon.is-active {
	transition: transform 0.2s ease;
	transform: rotate(360deg);
}    
/* *** twister animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.1s ease;
}

.hamburger__bar-1::before {
    content: "";
    height: 100%;
    top: -0.8rem;
    opacity: 1;
}
.hamburger__bar-1::after {
    content: "";
    height: 100%;
    top: 0.8rem;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.1s ease;
    transform: rotate(135deg);
}
.is-active .hamburger__bar-1::before {
    opacity: 0;
    transform: rotate(90deg);
    top: 0;
}
.is-active .hamburger__bar-1::after {
    transition: transform 0.1s ease;
    top: 0;
    transform: rotate(90deg);
}
/* *** twister animation ends *** */`,
    revolx: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
    transition: transform 0.1s ease 0.1s;
}
.hamburguer-icon.is-active {
    transition: transform 0.1s ease;
    transform: rotate(90deg);
}    
/* *** revolx animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.1s ease,
    top 0.1s ease,
    opacity 0.1s ease;
}
.hamburger__bar-1 {
    top: 43%;
    height: 14%;
 }
.hamburger__bar-1::before {
    content: "";
    top: -0.8rem;
    height: 100%;
    opacity: 1;
}
.revolx .hamburger__bar-1::after {
    content: "";
    top: 0.8rem;
    height: 100%;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.1s ease 0.1s;
    transform: rotate(-45deg);
}
.is-active .hamburger__bar-1::before {
    transition: opacity 0.1s ease 0.1s;
    opacity: 0;
}
.is-active .hamburger__bar-1::after {
    transition: transform 0.1s ease 0.1s,
    top 0.1s ease 0.1s;
    transform: rotate(90deg);
    top: 0;
}
/* *** revolx animation ends *** */`,
    crush: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
}   
/* *** crush animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.1s ease,
    top 0.1s ease 0.1s;
}
.hamburger__bar-1 {
    top: 43%;
    height: 14%;
 }
.hamburger__bar-1::before {
    content: "";
    top: -0.8rem;
    height: 100%;
    transition: all 0.1s ease;
    opacity: 1;
}
.hamburger__bar-1::after {
    content: "";
    height: 100%;
    top: 0.8rem;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.1s ease 0.1s;
    transform: rotate(-45deg);
}
.crush .is-active .hamburger__bar-1::before {
    transition: opacity 0.1s ease 0.1s,
    top 0.1s ease;
    top: 0;
    opacity: 0;
}
.crush .is-active .hamburger__bar-1::after{
    transition: transform 0.1s ease 0.1s,
    top 0.1s ease;
    top: 0;
    transform: rotate(90deg);
}
/* *** crush animation ends *** */`,
    jump: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
    top: 0;
}   
/* *** jump animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.1s ease,
    top 0.1s ease,
    bottom 0.2s ease 0.2s,
    opacity 0.1s ease 0.2s;

}
.hamburger__bar-1 {
    top: 43%;
    height: 14%;
 }
.hamburger__bar-1::before {
    content: "";
    top: -0.8rem;
    height: 100%;
}
.hamburger__bar-1::after {
    content: "";
    bottom: -0.8rem;
    height: 100%;
    opacity: 1;
}
.is-active .hamburger__bar-1 {
    transition: top 0.1s ease 0.2s,
    transform 0.2s ease 0.2s;
    top: 42%;
    transform: rotate(45deg);
}
.is-active .hamburger__bar-1::before {
    transition: transform 0.2s ease 0.2s,
    top 0.1s ease 0.2s;
    top: 0;
    transform: rotate(-90deg);
}
.is-active .hamburger__bar-1::after {
    transition: bottom 0.2s ease,
    opacity 0.2s ease 0.1s;
    bottom: 84%;
    opacity: 0;
}
/* *** jump animation ends *** */`,
    spinner: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
}   
/* *** spinner animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.1s ease,
    top 0.1s ease 0.1s;

}
.hamburger__bar-1 {
    top: 43%;
    height: 14%;
 }
.hamburger__bar-1::before {
    content: "";
    top: -0.8rem;
    height: 100%;
    transition: all 0.1s ease;
    opacity: 1;
}
.hamburger__bar-1::after {
    content: "";
    height: 100%;
    top: 0.8rem;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.1s ease 0.1s;
    transform: rotate(135deg);
}
.is-active .hamburger__bar-1::before {
    transition: opacity 0.1s ease 0.1s,
    top 0.1s ease;
    top: 0;
    opacity: 0;
}
.is-active .hamburger__bar-1::after {
    transition: transform 0.1s ease 0.1s,
    top 0.1s ease;
    top: 0;
    transform: rotate(90deg);
}
/* *** spinner animation ends *** */`,
    runner: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
}   
/* *** runner animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.1s ease,
    left 0.1s ease 0.1s,
    top 0.1s ease;
}
.hamburger__bar-1 {
    top: 0;
    height: 14%;
}
.hamburger__bar-1::before {
    content: "";
    top: 0.8rem;
    height: 100%;
    opacity: 1;
    left: 0;
}
.hamburger__bar-1::after {
    content: "";
    height: 100%;
    top: 1.6rem;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.1s ease 0.2s,
    top 0s ease 0.2s;
    transform: rotate(45deg);
    top: 43%;
}
.is-active .hamburger__bar-1::before {
    transition: opacity 0s ease 0.1s,
    left 0s ease;
    left: -4px;
    opacity: 0;
}
.is-active .hamburger__bar-1::after {
    transition: transform 0.1s ease 0.2s,
    top 0.1s ease 0.2s;
    top: 0;
    transform: rotate(-90deg);
}
/* *** runner animation ends *** */`,
    minion: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
    top: 0;
}   
/* *** minion animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: top 0.1s ease,
    bottom 0.1s ease;
}
.hamburger__bar-1 {
    top: 43%;
    height: 14%;
}
.hamburger__bar-1::before {
    content: "";
    height: 100%;
    top: -0.8rem;
}
.hamburger__bar-1::after {
    content: "";
    height: 100%;
    top: 0.8rem;
}
.is-active .hamburger__bar-1::before {
    transition: top 0.1s ease;
    top: 0;
}
.is-active .hamburger__bar-1::after {
    transition: top 0.1s ease;
    top: 0;
}
/* *** minion animation ends *** */`,
    fantastic: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
    top: 0;
}   
/* *** fantastic animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    opacity 0.3s ease 0.1s;

}
.hamburger__bar-1 {
    top: 0;
    height: 14%;
}
.hamburger__bar-1::before {
    content: "";
    top: 0.8rem;
    height: 100%;
    opacity: 1;
}
.hamburger__bar-1::after {
    content: "";
    height: 100%;
    top: 1.6rem;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.275s 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: translateY(8px) rotate(135deg);
}
.is-active .hamburger__bar-1::before {
    transition: opacity 0.1s ease 0.1s;
    opacity: 0;
}
.is-active .hamburger__bar-1::after {
    transition: transform 0.275s 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: translateY(-16px) rotate(-90deg);
}
/* *** fantastic animation ends *** */`,
    crumble: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
}   
/* *** crumble animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
    transition: transform 0.1s ease,
    top 0.1s ease 0.1s,
    opacity 0.1s ease;
}
.hamburger__bar-1 {
    top: 43%;
    height: 14%;
}
.hamburger__bar-1::before {
    content: "";
    top: -0.8rem;
    height: 100%;
    opacity: 1;
}
.hamburger__bar-1::after {
    content: "";
    height: 100%;
    bottom: -0.8rem;
}
.is-active .hamburger__bar-1 {
    transition: transform 0.1s ease 0.1s,
    top 0.1s ease;
    transform: rotate(-135deg);
}
.is-active .hamburger__bar-1::before {
    transition: opacity 0.1s ease;
    top: 0;
    opacity: 0;
}
.is-active .hamburger__bar-1::after {
    transition: transform 0.1s ease;
    bottom: 0;
    transform: rotate(-90deg);
}
/* *** crumble animation ends *** */`,
    monotonous: `:root {
    --menu-color: #242424;
    --menu-background-color: #f9d210;
    --menu-size: 6rem;
}
/* *** hambuger button css *** */
.hamburger-menu_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: var(--menu-size);
    height: var(--menu-size);
    background-color: var(--menu-background-color);
    border: none;
    border-radius: 50%;
    z-index: 999;
}
.hamburguer-icon {
    position: relative;
    width: 49%;
    height: 31%;
    top: 0;
}   
/* *** monotonous animation starts *** */
.hamburger__bar-1,
.hamburger__bar-1::before,
.hamburger__bar-1::after {
    position: absolute;
    display: block;
    width: 100%;
    background-color: var(--menu-color);
    border-radius: 25px;
}
.hamburger__bar-1 {
    top: 43%;
    height: 14%;
}
.hamburger__bar-1::before {
    content: "";
    top: -0.8rem;
    height: 100%;
    opacity: 1;
}
.hamburger__bar-1::after {
    content: "";
    top: 0.8rem;
    height: 100%;
}
.is-active  .hamburger__bar-1 {
    transform: rotate(45deg);
}
.is-active  .hamburger__bar-1::before {
    opacity: 0;
}
.is-active  .hamburger__bar-1::after {
    top: 0;
    transform: rotate(90deg);
}
/* *** monotonous animation ends *** */`
},

jsCode = `${displayMenu}
d.addEventListener("DOMContentLoaded", (e) => {
    displayMenu(".hamburger-menu_button", ".hamburguer-icon");
    })`;


document.addEventListener("DOMContentLoaded", (e) => {
    displayMenu(".hamburger-menu_button", ".hamburguer-icon");
    displayCode(htmlCode, cssCode, jsCode);
    copyCode(htmlCode, cssCode, jsCode);
})
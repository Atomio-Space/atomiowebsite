// assets/new-animation.js
const cursor = document.getElementById("cursor");
const amount = 20;
const sineDots = Math.floor(amount * 0.3);
const width = 26;
const idleTimeout = 150;
let lastFrame = 0;
let mousePosition = {x: 0, y: 0};
let dots = [];
let timeoutID;
let idle = false;
let hoverButton;
let hoverTL;

class HoverButton {
    constructor(id) {
        this.hovered = false;
        this.animatingHover = false;
        this.forceOut = false;
        this.timing = 0.65;
        this.el = document.getElementById(id);
        this.bg = this.el.getElementsByClassName("bg")[0];
        this.el.addEventListener("mouseenter", this.onMouseEnter);
        this.el.addEventListener("mouseleave", this.onMouseLeave);
    }

    onMouseEnter = () => {
        this.hoverInAnim();
    };

    hoverInAnim = () => {
        if (!this.hovered) {
            this.hovered = true;
            this.animatingHover = true;
            this.forceOut = false;
            TweenMax.fromTo(
                this.bg,
                this.timing,
                {x: "-112%"},
                {
                    x: "-12%",
                    ease: Power3.easeOut,
                    onComplete: () => {
                        this.animatingHover = false;
                        if (this.forceOut) {
                            this.foceOut = false;
                            this.hoverOutAnim();
                        }
                    }
                }
            );
        }
    };

    onMouseLeave = () => {
        if (!this.animatingHover) {
            this.hoverOutAnim();
        } else {
            this.forceOut = true;
        }
    };

    hoverOutAnim = () => {
        this.hovered = false;
        TweenMax.to(this.bg, this.timing, {
            x: "100%",
            ease: Power3.easeOut,
            onComplete: () => {
            }
        });
    };
}

// ... (continue with the rest of the JavaScript) ...

init();

var parentElemetn = document.querySelector("header .container .navbarNav ul");
var children = parentElemetn.children;
var childrenArray = Array.from(children)
var selectChildren = childrenArray.slice(0,-1);
for(let link of selectChildren){
    link.addEventListener("mouseenter",(event)=>{
        selectChildren.forEach((link)=>{
            link.querySelector("a").classList.remove("activeC")
        })
        link.querySelector("a").classList.add("activeC")
    })
    link.addEventListener("mouseleave",(event)=>{
        selectChildren.forEach((link)=>{
            link.querySelector("a").classList.remove("activeC")
        })
        selectChildren[0].querySelector("a").classList.add("activeC")
    })
}

// console.log(selectChildren)
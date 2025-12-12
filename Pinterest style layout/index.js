const gallery = document.getElementById("gallery")

const items = Array.from(gallery.children)

let columnWidth = 200;
let gap = 20;
let columns = 5;
let columnHeights = Array(columns).fill(0);

items.forEach(item => {

        let minColumn = columnHeights.indexOf(Math.min(...columnHeights));
        let x = minColumn * (columnWidth + gap) + gap;
        let y = columnHeights[minColumn];
        item.style.transform = `translate(${x}px, ${y}px)`;
        columnHeights[minColumn] += item.offsetHeight + gap;
        item.style.visibility = "visible";
        gallery.style.height = Math.max(...columnHeights) + "px";
    })

// window.addEventListener("resize", ()=>{
//     // console.log(gallery.offsetWidth)
// })


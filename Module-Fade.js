export const Fadeout = function(elemen){
    elemen.style.display = "none";
}
export const Fadein = function(elemen){
    elemen.style.display = "block";
}

export const MulchFadein = (...palam)=>{
    for(let i=0;i<palam.length;i++){
        palam[i].style.display = "block";
    }
    console.log(palam);
}
export const MulchFadeout = (...palam)=>{
    for(let i=0;i<palam.length;i++){
        palam[i].style.display = "none";
    }
    console.log(palam);
}
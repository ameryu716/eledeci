export class FooterGear {
  constructor() {
    this.question = [
    "実はまだ未解決のバグがあります",
    "ロボ君をタップで不正ができます",
    "問題文は作者の黒歴史......？",
    "作者のおすすめは勝ち抜きモード！",
    "新問題等アイデアを常時募集中！",
    "読みしか出題しないのは何故？",
    "Node.jsもやってみたい作者",
    "最近マイクラを買ったらしい",
    "特に書くことが無い",
    "特に書くことも無い"]
    this.massagenum = 0;
    this.massageinner = document.getElementById("massagediv");
    this.prodactkunarea = document.getElementById("prodactkunarea");
    this.mamesdiv = document.getElementById("mamesdiv");
    this.mametisikiarea = document.getElementById("mametisikiarea");
    setInterval(this.footerengine(),30000);
  }
  Fadeout(elemen){
    console.log("Method-Fadeout!!");
    elemen.style.display = "none";
  }
  Fadein(elemen){
    console.log("Method-Fadein!!");
    elemen.style.display = "block";
  }
  //mamespan === massageinner!!!!
  footerdice() {
    console.log("Method-footerdice!!");
    let footerdicenum = Math.floor(Math.random()*4)+1;
    return footerdicenum;
  }
  mamassagechange(){
    console.log("Method-mamassagechange!!");
    this.massageinner.innerHTML = this.question[this.massagenum];
  }
  productappear(){
    console.log("Method-productappear!!");
    this.Fadein(prodactkunarea);
    setTimeout(()=>{
    this.Fadeout(prodactkunarea);
              },7000);
  };//3秒プロダクト君表示

  massageappear(){
    console.log("Method-massageappear!!")
    mamesdiv.classList.remove("seriforange","serifgreen","serifwater");
    
    switch(this.massagenum){
      case 0:
      case 1:
      case 2:
        this.mamesdiv.classList.add("seriforange");
        this.massageinner.style.left = "8vw";
        break;
      case 3:
      case 4:
      case 5:
        this.mamesdiv.classList.add("serifgreen");
        this.massageinner.style.left = "5%";
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        this.mamesdiv.classList.add("serifwater")
        this.massageinner.style.left = "9vw";
        break;
    }
    
    this.Fadein(mametisikiarea);//300
    this.mamesdiv.style.opacity = "1";
    //this.mamesdiv.style.marginTop = "50px";
  
    setTimeout(()=>{
    this.Fadeout(mametisikiarea);//0
    this.mamesdiv.style.opacity = "0.5";
    //this.mamesdiv.style.marginTop = "50px";
              },25000);
  };//3秒メッセージ表示

  footerengine(){
    console.log("Method-footer-Engine!!");
    switch(this.footerdice()){//return 1~4
      case 1:
        this.productappear();
        break;
      case 2:
      case 3:
      case 4:
        this.massagenum = Math.floor(Math.random()*9);
        this.mamassagechange();
        this.massageappear();
        break;
    }
    setTimeout(()=>{       
    this.footerengine();
              },30000);
  };

}
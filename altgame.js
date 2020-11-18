import {Fadein,Fadeout,MulchFadein,MulchFadeout,DelayFadein,DelayFadeout} from './Module-Fade';
import {FooterGear} from './Module-FooterEngine';

var cen = 0;  //問題文
var aju = 0;  //正解
var axy = 0;  //選んだ答え
var afi = 0;  //1番
var ase = 0;  //2番

var mondaigime = 0; //ランダム問題決め
var clickflag = true;　//多重処理防止
var seikaisuu = 0;　//一次正解数
var huseikaisuu = 0;　//一次不正解数
var kotaetakazu = 0;　//一次出題数

var totalsei = 0;　//総合正解数
var totalhusei = 0;　//総合不正解数
var totalsyutudai = 0;　//総合出題数
var totalratec = 0;

var optionlimit = 0;  //間違えました変数・undefeated用
var modecheck = 0;  //モード変更チェックボックスの状態
var threemodes =0;  //モード＝？
  //1=unlimited
  //2=20limited
  //3=undefeated
var randomhyouka = 0;
var sikenyo = 0;

var ratecorrect = 0;  //正解率
var unlimitedcontinue = 0;  //50問以上で表示・続けるかどうか

const hyouka = document.getElementById("hyouka");
const gamecorner = document.getElementsByClassName("game-corner");
const bplaydisp = document.getElementsByClassName("bplaydisp");//double-Elements-back.
const clearop = document.getElementsByClassName("clearop");
const scorenode = document.getElementById("scorerail"); 
const logonode = document.getElementById("logo");
const gamestartbtn = document.getElementById("gamestartbtn");
const selectans1 = document.getElementById("selectans-1");
const selectans2 = document.getElementById("selectans-2");

//1＝問題文
//2＝第一選択肢
//3＝第二選択肢
//4＝正しい選択肢（数字）

alert("JQuery撲滅！！Newver45!!");

new FooterGear();


const Erabu = [
  ['星の"奔流"',"ほんりゅう","はんりゅう",1],
  ['軍隊"行脚"',"あんどん","あんぎゃ",2],
  ['"清澄"なる神気',"せいりょう","せいちょう",2],
  ['"汗顔"も至れり',"かんがん","こうがん",1],
  ['"手狭"な支配地',"しゅきょう","てぜま",2],
  ['"稽古"の時間じゃい',"こうこ","けいこ",2],
  ['"古刹"とはなんぞい',"こさつ","こせつ",1],
  ['西洋街を"興す"',"とおす","おこす",2],
  ['"通暁"なる知識',"つうぼん","つうぎょう",2],
  ['海辺での"営巣"',"えいさん","えいそう",2],
  ['"崇高"なる御方',"すうこう","ほうこう",1],
  ['戸籍"抄本"',"しょうほん","しゃほん",1],
  ['"弔辞"の先に',"とうじ","ちょうじ",2],
  ['"激甚"災害',"げきざん","げきじん",2],
  ['神像への"拭浄"',"ふじょう","しょくじょう",2],
  ['"堪えて"こそ',"たえて","こたえて",1],
  ['課金に"充てる"',"くわだてる","あてる",2],
  ['"凡庸"な剣士',"はんよう","ぼんよう",2],
  ['"遡上"の化身',"そじょう","さじょう",1],
  ['"数寄屋"造りに置く牛丼',"すうきおく","すきや",2],
  ['某氏"稚拙"なり',"ちせつ","ちしゅつ",1],
  ['"併せ"て無限の力なり',"あわせ","はせ",1],
  ['"折衷案"の捻出',"せっとあん","せっちゅうあん",2],
  ['魔王の座を「"罷免"」とする',"ろめん","ひめん",2],
  ['情のままに"喝破"する',"こうは","かっぱ",2],
  ['なんとまあ"神々しい"ソファだ',"こうごうしい","かみがみしい",1],
  ['儀式への"督励"',"とうれい","とくれい",2],
  ['魔王と王朝の"癒着"',"いちゃく","ゆちゃく",2],
  ['信仰の"神酒"',"みしゅ","みき",2],
  ['"霜柱"群',"しもばしら","しもちゅー",1],
  ['契約の"履行"',"りこう","れこう",1],
  ['幻界への"遷都"',"へんと","せんと",2],
  ['執行人の"境涯"',"けいがい","きょうがい",2],
  ['悪王の"業"',"ぎょう","ごう",2],
  ['噂の"流布"',"りゅふ","るふ",2],
  ['"享楽"への天誅',"ていらく","きょうらく",2],
  ['"窮迫"する状況',"きんぱく","きゅうはく",2],
  ['血を越えた"契り"',"ちぎり","かぎり",1],
  ['"甚だ"迷惑な',"じんだ","はなはだ",2],
  ['それも"滅菌"だ',"めっきん","げんきん",1],
  ['病の"平癒"',"ひょうゆ","へいゆ",2],
  ['"秀逸"な作品',"いつひつ","しゅういつ",2],
  ['"沸々"と湧くもの',"ふふ","ふつふつ",2],
  ['"反物"を積む',"たんもの","たもの",1],
  ['新教契約への"押印"',"おついん","おういん",2],
  ['人生の"升目"',"しょうもく","ますめ",2],
  ['"惰弱"なる地主',"だず","だじゃく",2],
  ['"深閑"とする蒼夜',"みがく","しんかん",2],
  ['怒りを"鎮める"',"おさめる","しずめる",2],
  ['"窮余"の一策',"くよ","きゅうよ",2],
  ['天使の"韻律"',"しょうりつ","いんりつ",2],
  ['領地の"沼沢"',"しょうたく","ぬまさわ",1],
  ['"貪欲"なる蠍',"どんよく","ひんよく",1],
  ['見上げる"群青"',"ぐんせい","ぐんじょう",2],
  ['"詳述"：特になし',"せいじゅつ","しょうじゅつ",2],
  ['悠遠の"借款"',"しゃっこ","しゃっかん",2],
  ['"懐"の部屋',"おふくろ","ふところ",2],
  ['"倣って"習得する',"ぬって","ならって",2],
  ['"凄絶"な最後',"そうぜつ","せいぜつ",2],
  ['"傑出"した実力',"けっしゅつ","けいしゅつ",1],
  ['あまりに爽快な"挿話"',"さしばなし","そうわ",2],
  ['"剛腹"の境地',"こうふく","ごうふく",2],
  ['杜撰な"抄録"',"しょうろく","しゃろく",2],
  ['"賦与"されし兎',"ふよ","ぞくにくみふ",1],
  ['蒼花への"哀悼"',"ついとう","あいとう",2],
  ['教卓からの"教唆"',"きょうそ","きょうさ",1],
  ['"色艶"ある猫',"いろつや","しきび",1],
  ['"因循"からの解放',"いんとん","いんじゅん",2],
  ['後顧の"愁い"',"いこい","うれい",2],
  ['火と水の"媒酌"',"ばいしゃく","ぼうしゃく",1],
  ['ニンジンと仏像の"山車"',"だしゃ","だし",2],
  ['連炎の"法被"',"はっぴ","ほっぴ",1],
  ['永遠なる"私淑"',"しとぎ","ししゅく",2],
  ['"水仙"の花',"すいせん","みずな",1],
  ['鳴り響いた"訃報"',"ふほう","とほう",1],
  ['メガネの"巣窟"',"そうくつ","すくつ",1],
  ['"自嘲"の極み',"じちょう","じしょう",1],
  ['氷水業界の"要衝"',"ようしょう","ようこう",1],
  ['"瑠璃色"の尻尾',"るりいろ","くるいろ",1],
  ['恐竜の"痕跡"',"そうせき","こんせき",2],
  ['最恐の"俊傑"',"しゅんけつ","しゅうけつ",1],
  ['"僅少"な学力',"こうしょう","きんしょう",2],
  ['"漸増"する戦力',"ざんぞう","ぜんぞう",2],
  ['"験を"担ぐ',"げん","かつぎ",1],
  ['穏やかな"観桜"会',"みさくら","かんおう",2],
  ['"懐郷"の情',"かいごう","かいきょう",2],
  ['執念と"怨念"',"えんねん","おんねん",2],
  ['若い"施主"',"せしゅ","ししゅ",1],
  ['"畏敬"の念が消えない',"ふけい","いけい",2],
  ['"滋味"たっぷりの食材',"じみ","じまい",1],
  ['"妖艶"な鬼女',"ようび","ようえん",2],
  ['悪辣の"権化"',"ごんごう","ごんげ",2],
  ['辺境"桟道"',"さんどう","せんどう",1],
  ['饅頭"贈賄"の嫌疑',"ぞうゆう","ぞうわい",2],
  ['"枢要"なる関係',"くよう","すうよう",2],
  ['既に"破綻"している',"はたん","はじょう",1],
  ['図書館での"渉猟"',"ほりょう","しょうりょう",2],
  ['"堕落"した天使',"ついらく","だらく",2],
  ['"硝煙"が示す',"せきえん","しょうえん",2],
  ['"納戸"と蔵',"なんど","なっと",1],
  ['球技を"窮める"',"きわめる","こわめる",1],
  ['想像に"難くない"',"むずくない","かたくない",2],
  ['"冥利"に尽きる',"みょうり","めいり",1],
  ['"粛然"たる寺社',"そくぜん","しゅくぜん",2],
  ['ご"相伴"にあずかる',"ぞうはん","しょうばん",2],
  ['柳桜が"枝垂れる"',"えだたれる","しだれる",2],
  ['"間隙"を縫う',"かんげき","かんへき",1],
  ['"苛烈"な視線',"さいれつ","かれつ",2],
  ['"荒漠"の極地',"さんばく","こうばく",2],
  ['"悠揚"な仕草',"ゆうよう","ゆうちょう",1],
  ['雪に濡れる"督促"状',"こうそく","とくそく",2],
  ['"秘奥"を知る',"ひおう","ほうおう",1],
  ['"逓増"する貝',"じゅんぞう","ていぞう",2],
  ['地獄の"領袖"',"りょうしゅう","りょうゆう",1],
  ['"好悪"の情',"こうえ","こうお",2],
  ['"徹宵"する',"てっしゅう","てっしょう",2],
  ['器物の"毀損"',"きそん","いそん",1],
  ['"繁閑"両極端',"はんせん","はんかん",2],
  ['真紅の"頭巾"',"ずきん","とうきん",1],
  ['"風霜"高潔',"かざしも","ふうそう",2],
  ['淹れたての"煎茶"',"いりちゃ","せんちゃ",2],
  ['"筆禍"にあうは必然',"ひっか","ひつか",1],
  ['"唯美"主義',"ゆうび","ゆいび",2],
  ['大"内裏"',"だいり","ないり",1],
  ['"頑是"がない人',"がんだい","がんぜ",2],
  ['"溺愛"',"そうあい","できあい",2],
  ['"慄然"とする男',"りつぜん","しょうぜん",1],
  ['"尼僧"は語らない',"へそう","にそう",2],
  ['"蛇腹"剣',"じゃばら","だかつ",1],
  ['"植栽"の達人',"しょくぼん","しょくさい",2],
  ['"肝腎"な時に',"かんじん","かんだん",1],
  ['"麗しい"武人',"うれいしい","うるわしい",2],
  ['"薫陶"を受けた',"かんとう","くんとう",2],
  ['"聴聞"の意義',"ちょうもん","ちょうぶん",1],
  ['"荘重"・荘厳',"そうじゅう","そうちょう",2],
  ['"魚河岸"の歴史',"うおがし","ぎょこうがん",1],
  ['"舌鼓"を打つ',"したつづみ","こぶ",1],
  ['"旦夕"に迫る',"ちょうゆう","たんせき",2],
  ['"殊"にと云う',"こと","たま",1],
  ['只々"憧憬"する',"そうけい","しょうけい",2],
  ['"勃興"したジャンル',"ちょっこう","ぼっこう",2],
  ['"軽侮"の念を謝罪する',"けいぶ","けいまい",1],
  ['"冶金"学',"ときん","やきん",2],
  ['晴天続く"沃土"',"よくど","ようど",1],
  ['"堆積"する',"ちせき","たいせき",2],
  ['種の"角逐"',"かくちく","がくちく",1],
  ['"棟上げ"の日',"むねあげ","とうあげ",1],
  ['"唾棄"している',"とき","だき",2],
  ['意気"沖天"',"すいてん","ちゅうてん",2],
  ['"苦吟"を味わう',"くぎん","くごん",1],
  ['氷冠の"戴冠"',"たいかん","ふかん",1],
  ['"各"の行動',"おのおの","かく",1],
  ['"質朴"を嫌う',"しぼく","しつぼく",2],
  ['"諭旨"を明確にする',"ろんし","ゆし",2],
  ['"漸進"主義',"ぜんしん","ざんしん",1],
  ['"一献"傾ける',"いっけん","いっこん",2],
  ['"好事家"を好く',"すぎか","こうずか",2],
  ['"築山"の設計',"つきやま","ちくざん",1],
  ['"紺青"色の布',"こんぜい","こんじょう",2],
  ['"霜害"対策',"そうがい","はくがい",1],
  ['"精緻"な筆筋',"せいち","せいこう",1],
  ['"暮色"蒼然',"くれいろ","ぼしょく",2],
  ['消えぬ"怨恨"',"おんこん","えんこん",2],
  ['"橋桁"の構成',"はだ","はしげた",2],
  ['衝撃で"喪心"する',"そうしん","もしん",1],
  ['"壮挙"を成す',"そうき","そうきょ",2],
  ['"逓減"と急増',"ていげん","じゅんげん",1],
  ['"償還"の義務',"しゅうかん","しょうかん",2],
  ['心に"疎い"',"にぶい","うとい",2],
  ['「ご"清祥"」などと',"そうしょう","せいしょう",2],
  ['"雄々しい"姿',"ゆうゆうしい","おおしい",2],
  ['Xへの"俸給"',"ほうきゅう","ぼうきゅう",1],
  ['"藤色"の青み',"ふじいろ","とうしょく",1],
  ['"早暁"の仕事',"そうばん","そうぎょう",2],
  ['"庫裏"での会議',"くり","こり",1],
  ['"寛厳"自在',"こうげん","かんげん",2],
  ['"謡"',"うたい","なりうた",1],
  ['懸命な"端役"',"たんやく","はやく",2],
  ['"痩身"美麗',"そうしん","せいしん",1],
  ['"緑青"の毒説',"りょくじょう","ろくしょう",2],
  ['"咽喉"の痛み',"いんこう","いんとう",1],
  ['"春宵"一刻値千金',"しゅんしょう","しゅんぼん",1],
  ['続く"宿弊"',"しゅくほん","しゅくへい",2],
  ['"油井"の仕組み',"ゆい","ゆせい",2],
  ['"罷業"権',"ひぎょう","かぎょう",1],
  ['"勾留"期間',"くりゅう","こうりゅう",2],
  ['"窯業"を知る',"かんぎょう","ようぎょう",2],
  ['"羨望"の眼差し',"せんぼう","ざんぼう",1],
  ['奇跡の"快癒"',"きゆ","かいゆ",2],
  ['彼にとっての"好餌"',"こうじ","きじ",1],
  ['"紡織"は人力に資らず',"ぼうさく","ぼうしょく",2],
  ['"定石"の一手',"じょうせき","ていせき",1],
  ['御"祝言"',"しゅうげん","しゅくげん",1],
  ['"布石"を打つ',"ほせき","ふせき",2],
  ['"端的"に言えば',"たんてき","はてき",1],
  ['"迷妄"の連鎖',"めいもう","めいまい",1],
  ['"恣意的"な解釈',"しいてき","さくいてき",1],
  ['老舗の"餅屋"',"もちや","とうおく",1],
  ['"苦衷"を察する',"くもう","くちゅう",2],
  ['現代の"鼓吹"',"こすい","こほう",1],
  ['物見"遊山"',"ゆうざん","ゆさん",2],
  ['新緑の"山麓"',"さんれい","さんろく",2],
  ['"物憂げな"雰囲気',"ものうれいげな","ものうげな",2],
  ['深海のような"邦楽"',"ふがく","ほうがく",2],
  ['"漸次"寒くなる',"ぜんじ","ざんじ",1],
  ['"示唆"する',"ししょう","しさ",2],
  ['生活の"窮乏"',"こうぼう","きゅうぼう",2],
  ['"圧搾"技術',"あっさく","あっしょう",1],
  ['"従容"な振る舞い',"しょうよう","じゅうよう",1],
  ['"壮図"を描く',"そうと","しょうず",1],
  ['自己"蔑視"',"べっし","けいし",1],
  ['"摂政"の意義',"せっせい","せっしょう",2],
  ['"喉頭"の痛み',"こうとう","いんとう",1],
  ['"錦秋"の候',"きんしゅう","こんしゅう",1],
  ['質の"拐帯"',"ぎんたい","かいたい",2],
  ['"詩吟"教室',"しぎん","しぎょう",1],
  ['"顎"関節症',"がく","あご",1],
  ['"既往症"',"きうしょう","きおうしょう",2],
  ['"股関節"強化',"しかんせつ","こかんせつ",2],
  ['"舷側"からの音',"げんばん","げんそく",2],
  ['"籠城"戦',"ゆじょう","ろうじょう",2],
  ['"時宜"をはかる',"じそう","じぎ",2],
  ['"右舷"と左舷',"うげん","うぎょう",1],
  ['"禁錮"500年',"こんこ","きんこ",2],
  ['"牙城"に迫る',"がじょう","きじょう",1],
  ['"才媛"と名高い',"さいよう","さいえん",2],
  ['"茨"の籠城',"かみばら","いばら",2],
  ['"城柵"の仕掛け',"じょうさく","しろば",1]
   
];//問題考案

const hyoukalist = {
  h_heibon : ["高みを目指して！","もうちょっとで頂上","惜しい！あと少しです。","あとちょっと！！"],//正解率75%以上
  h_bonjin : ["そんなに褒めてほしいのか","ま、良いんじゃね？","レベル・凡人","まだまだいけるよ"],//正解率50~75%
  h_manten : ["君は神かもしれない","君に教えることはもうない","その力で世界を救え","レベル・神"],//正解率100%
  h_gomten : ["馬鹿なの？（直球）","何故生きている！？","えぇ.....（困惑）","大丈夫ですか？（煽り）"],//正解率50%以下
  h_tukumogami : ["逆位相の神","貴殿こそ本物だ","七十二柱が一柱","賽の河原に就職"]//正解率0%
}

const hyoukafase = function(){
  ratecorrect = 0;
  randomhyouka = Math.floor(Math.random()*4);
  sikenyo = "";
  
  ratecorrect = seikaisuu/kotaetakazu;
  ratecorrect = Math.round(ratecorrect*100)/100;
 
  if(ratecorrect>0.74&&ratecorrect<1){
    sikenyo = hyoukalist.h_heibon[randomhyouka];
  }else if(ratecorrect>0.49&&ratecorrect<0.75){
    sikenyo = hyoukalist.h_bonjin[randomhyouka];
  }else if(ratecorrect===1){
    sikenyo = hyoukalist.h_manten[randomhyouka];
  }else if(ratecorrect<0.5&&ratecorrect>0){
    sikenyo = hyoukalist.h_gomten[randomhyouka];
  }else if(ratecorrect===0){
    sikenyo = hyoukalist.h_tukumogami[randomhyouka];
  }
    document.getElementById("hyoukaspa").innerHTML = sikenyo;
    Fadein(hyouka);
};

const resetsur = function(){

 cen = 0;  //問題文
 aju = 0;  //正解
 axy = 0;  //選んだ答え
 afi = 0;  //1番
 ase = 0;  //2番

 mondaigime = Math.floor(Math.random()*227)+1;//乱数から問セッティング
 cen = Erabu[mondaigime][0];
 aju = Erabu[mondaigime][3];
 afi = Erabu[mondaigime][1];
 ase = Erabu[mondaigime][2];
}

const htchange = function(){ //問題文変更
  document.getElementById("missiontitle").innerHTML = cen;
  document.getElementById("selectans-1").innerHTML = afi;
  document.getElementById("selectans-2").innerHTML = ase;
}

const modechange = function(){
  modecheck = document.getElementsByName("limitchange");
  threemodes = 0;
  optionlimit = false;
  unlimitedcontinue = true;
    
      if(modecheck[0].checked){
        threemodes = 1;
        alert("モード「アンリミテッド」");
      }
      else if(modecheck[1].checked){
        threemodes = 2;
        alert("モード「20リミット」");
      }
      else if(modecheck[2].checked){
        threemodes = 3;
        alert("モード「無敗の聖剣」");
      }
}

const logoandend = function(){
  alert("回答を中断します");
  DelayFadeout(1,hyouka);
  Fadeout(gamecorner[0]);
  totalsyutudai = totalsyutudai + kotaetakazu;
  kotaetakazu = 0;
  while(scorenode.firstChild){
    scorenode.removeChild(scorenode.firstChild);
  }
  totalsei = totalsei + seikaisuu;
  seikaisuu = 0;
  totalhusei = totalhusei + huseikaisuu;
  huseikaisuu = 0;
  totalratec = totalsei/totalsyutudai;
  totalratec = Math.round(totalratec*100);
  DelayFadein(2,bplaydisp[0],bplaydisp[1]);
  document.getElementById("alsc1").innerText = "トータル正解："+totalsei+"/"+totalsyutudai;
  document.getElementById("alsc2").innerText = "正解率："+totalratec+"%";
}; //正解率出力+ホーム遷移

logonode.onclick = ()=>{
  if(threemodes===3){
    alert("引き返すことは出来ないようだ......");
  }else{
    let logoconfu = window.confirm("回答を中断しますか？");//ホームorトライ選択
    if(logoconfu){
      logoandend();
    } 
  }
};  //Logoリスタート


const optioncb = document.getElementsByClassName("optioncb");
  for(let i=0;i<optioncb.length;i++){
      optioncb[i].onclick = function(){
        optioncb[0].checked = false;
        optioncb[1].checked = false;
        optioncb[2].checked = false;
        this.checked = true;
      }
  }

gamestartbtn.addEventListener("mouseenter",()=>{
  DelayFadein(0.5,document.getElementById("heximg"),document.getElementById("greenhex"));
})
gamestartbtn.addEventListener("mouseleave",()=>{
  DelayFadeout(0.5,document.getElementById("heximg"),document.getElementById("greenhex"));
})

//正解エフェクト不正解エフェクト
const okimg = document.getElementById("okimg");//〇
const okaud = document.getElementById("okaud");//ピンポーン
const gameobrn = document.getElementById("gameobrn");//デレレーンゲームオーバー
const ngbrn = document.getElementById("ngbrn");//バーン！！動画
const audbn = document.getElementById("audbn");//バーン！！音声
const scorerail = document.getElementById("scorerail");

const seigohantei = function(){
  if(aju==axy){ //正解
      Fadein(clearop[0]);
      Fadein(okimg);//500
      if(!okaud.paused){
        okaud.pause();
        okaud.currentTime = 0;
      }//正解音をまだ再生しているなら

      okaud.play();
      let railchild = document.createElement("li");
      railchild.innerHTML = "<img src='https://lhaidelabo.com/wp-content/uploads/2020/05/minimaru.png'>";
      scorerail.appendChild(railchild);
      seikaisuu = seikaisuu + 1;
      kotaetakazu = kotaetakazu + 1;

    }else{  //不正解
      //無敗モード時gameover挿入
      if(threemodes===3){
        Fadein(clearop[0]);
        DelayFadein(1,gameobrn);
        gameobrn.play();
        optionlimit = true;
        huseikaisuu = huseikaisuu + 1;
        kotaetakazu = kotaetakazu + 1;
      }else{
        Fadein(clearop[0]);
        DelayFadein(0.3,ngbrn);
        if(!ngbrn.paused){
          ngbrn.pause();
          ngbrn.currentTime = 0;
        }//爆発動画をまだ再生しているなら
        if(!audbn.paused){
          audbn.pause();
          audbn.currentTime = 0;
        }//爆発音をまだ再生しているなら

        ngbrn.play();
        audbn.play();
        let railchild = document.createElement("li");
        railchild.innerHTML = "<img src='https://lhaidelabo.com/wp-content/uploads/2020/05/minibatu.png'>";
        scorerail.appendChild(railchild);
        huseikaisuu = huseikaisuu + 1;
        kotaetakazu = kotaetakazu + 1;
      }
    }
}

gamestartbtn.addEventListener("click",()=>{
  DelayFadeout(0.5,bplaydisp[0],bplaydisp[1]);
  modechange();
  resetsur();
  htchange();
  Fadein(gamecorner[0]);
  //問題設定宣言
})
  
$('#hyouka').click(function(){
  
    if(gameobrn.paused){
      DelayFadeout(1,gameobrn,clearop[0],hyouka);
      Fadeout(gamecorner[0]);
      totalsyutudai = totalsyutudai + kotaetakazu;
      kotaetakazu = 0;
      scorerail.innerHTML = "";
      //$('#scorerail').empty();
      totalsei = totalsei + seikaisuu;
      seikaisuu = 0;
      totalhusei = totalhusei + huseikaisuu;
      huseikaisuu = 0;
      totalratec = totalsei/totalsyutudai;
      totalratec = Math.round(totalratec*100);
      DelayFadein(2,bplaydisp[0],bplaydisp[1]);
      document.getElementById("alsc1").innerText = "トータル正解："+totalsei+"/"+totalsyutudai;
      document.getElementById("alsc2").innerText = "正解率："+totalratec+"%";
    }
})

selectans1.onclick = function(){
  if(clickflag){
    clickflag = false;
  axy=1;
  Fadeout(gamecorner[0]);
  seigohantei();
  if(threemodes===3&&optionlimit){
  }else{
    DelayFadeout(1,okimg,ngbrn,clearop[0]);
  }
  resetsur();
  htchange();

  switch(threemodes){
    case 1:
      if(kotaetakazu>49){
        if(unlimitedcontinue){
          var logoconfu2 = window.confirm("まだ挑戦しますか？");
          if(logoconfu2){
            unlimitedcontinue = false;
          }else{
            hyoukafase();
          }
        }else{
          if(kotaetakazu>99){
            alert("100問回答達成です！おめでとうございます！！");
            hyoukafase();
          }
        }
        
      }
      break;
    case 2:
      if(kotaetakazu>19){
        hyoukafase();
      }
      break;
    case 3:
      if(optionlimit){
        //3秒待機
        setTimeout(()=>{
          hyoukafase();
        },7000);
      }
  }  
  Fadein(gamecorner[0]);
  } else {
    return false;
  } clickflag = true;
}

    
selectans2.onclick = function(){
  if(clickflag){
    clickflag = false;
  axy=2;
  Fadeout(gamecorner[0]);//500
  seigohantei();//正誤判定
  
  if(threemodes===3&&optionlimit){
  
  }else{
    DelayFadeout(1,okimg,ngbrn,clearop[0]);
  }
  resetsur();
  htchange();
    
  switch(threemodes){
    case 1:
      if(kotaetakazu>49){
        if(unlimitedcontinue){
          var logoconfu2 = window.confirm("まだ挑戦しますか？");
          if(logoconfu2){
            unlimitedcontinue = false;
          }else{
            hyoukafase();
          }
        }else{
          if(kotaetakazu>99){
            alert("100問回答達成です！おめでとうございます！！");
            hyoukafase();
          }
        }
        
      }
      break;
    case 2:
      if(kotaetakazu>19){
        hyoukafase();
      }
      break;
    case 3:
      if(optionlimit){
        //3秒待機
        setTimeout(()=>{
          hyoukafase();
        },7000);   
      }
    }
  DelayFadein(1,gamecorner[0]);
  } else {
    return false;
  } 
  clickflag = true;
}
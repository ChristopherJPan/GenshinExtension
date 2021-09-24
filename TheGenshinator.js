const genshinImpactImages = [`/Images/1.jpg`,"/Images/2.jpg","/Images/3.jpg","/Images/4.jpg","/Images/5.jpeg","/Images/6.jpg","/Images/7.jpg","/Images/8.jpg","/Images/9.jpg","/Images/10.jpg","/Images/11.jpg","/Images/12.jpg","/Images/1.jpg"]

const genshinImpactQuotes = ["You should know that all power comes at a price. For every bit of power you gain, so too do you gain more responsibility. - Zhongli",
"Reality is the stillness buried deep beneath the illusion - Raiden Shogun", 
"If you can change something, change it. If you can't, don't waste time thinking about it. - Beidou",
"Every journey has its final day. Don't rush! - Zhongli", 
"As the wind continues to blow, so too shall I continue to fight. - Jean Gunnhildr",
"Are you deaf, or just stupid? When did I give you the right... to issue your own orders? -Scaramouche", 
"Fine. You can touch my ears for a second, but the tail is off limits! - Diona", 
"Some ambitions have the power to heal wounds, to bring victory, to inspire hope. But some ambitions, outlive their masters, long after their soul ascends. They remain as they were in the beginning, burning bright and true, for all eternity. - Yae Miko",
"Yesterday's experiences make me stronger today. - Keqing",
"Discipline is everything. Unbridled passion can have disastrous consequences. Trust me, I would know. - Chongus",
"What does freedom really mean, when demanded of you by a god? - Dainslef",
"The fate that brings people together is not a cord so easily cut. -  Kaedehara Kazuha",
"Some use the wind's whistling to drown out the sound of their crimes. - Diluc",
"Come on, let's get moving. We're not frozen in place, after all. - Kaeya",
"A true knight can't afford to be a picky eater. - Jean Gunnhildr",
"If you make a promise, you keep it, if you make a mistake, you apologize. And if you give someone a dream, you defend it to the end.  Childe",
"I love it when it snows. The world falls completely silent... and I can sleep undisturbed. - Kaedehara Kazuha",
"But mortal arrogation never stops. - Dainslef",
"WINDBLADE!!! - Traveler",
"Glory has green eyes.",
"Chris spent $10,000 on Genshin Impact - Jen :)",
"All the girls are so cute... - Sylvia",
"All the boys are so cute... - Sylvia",
"Brandon is F2P - Brandon",
"Wangshu inn’s cat is called Wei.",
"Ella Musk is the older sister of Dr. Edith.",
"Glaze Lily only blooms at night.",
"Pyro Hilichurl Grenader cannot dig slimes on water.",
"Jiangxue threw away his vision",
"Alice gave Echo a potion to cure his stutter, but sadly it failed to cure his illness, and now he repeats everything that he says.",
"To point out a fact about Xiuhua, she actually switched places with her twin sister to skip work.",
"Tababito. Tababito. Tababito. Tababito.",
"Mona is best waifu",
"boingo :) ",
"Cats can't be pet in Genshin Impact. That's a bug, not a feature",
"Ceo of Geo is Daddy Zhong Dong.",
"Uncle Liu is ashamed of asking out Shuzhi.",
"Shuzhi is waiting for Liu to confess his feeling for 40 years.",
"Yanshang Teahouse has the rudest employees in all of Liyue.",
"Genshin made enough money in a single year compared to many gacha games entire lifespan. But their anniversary rewards are dog.",
"Copium is Hopium",
"Kokomi has a -100% Crit Rate. It's equivalent to the profit Mihoyo made",
"Albedo and Qiqi is not life",
"It costs 248,000 Mora to upgrade a weapon from Level 80 to Level 90.",
"Mihoyo is a smol indie company.",
"Mihoyo was originally founded by three dudes that graduated from college.",
"The predecessor of Genshin Impact is Honkai Impact 3. It is assumed that Teyvat is a bubble universe.",
"There is a game called Genshin Honkai Impact Sword Ultimate. It is the best competitor to Genshin currently /s",
"Traveler fights with a Dull Blade.",
"You lose every 50/50 to Qiqi. It is predetermined.",
"Monass.",
"Lisa's moans.",
"Jean has the name of Dandelion Knight. It is an option to say she is the Dandelion Tights in game.",
"Glory's boyfriend, who she assumes is traveling the world and far away, is actually only a few hours away from her. He's hiding out of shame.",
"In your dreams - Yae Miko.",
"Eternity - Ei",
"Eternity - Raiden Shogun",
"Jen is kind of a beast. She wins almost every 50/50 to Qiqi",
"Klee says Da-da-da",
"Klee's favorite way to fish is to blow them up with bombs.",
"Albedo is a homonculus.",
"Rosaria doesn't know how to pronounce the Anemo Archon. It's not because she's drunk.",
"Genshin Impact is now worth billions.",
"Everytime the battle music starts playing in Liyue and you don't know where the enemy is, it's a slime.",
"Burn the grass.",
"There was a patch that increased the damage from burning grass. It was immediately patched because of the uproar.",
"Liyue is just better than Mondstadt. It just is. - Brandon",
"Inazuma's music is so ridiculously good.",
"Yu Pung Chen is heralded as the Music Archon.",
"You can also refer to Yu Peng Chen as 'Yu Peng Chad'",
"This is a free Chrome Extension for Genshin Impact. You're welcome, Amber.",
"Amber is the official Outrider for Mondstadt.",
"Kaeya has a butt. It is confirmed.",
"Kaeya is just as strong as Diluc, but he's a four star while Diluc is a five star.",
"Pizza was introduced to Inazuma by the Traveler.",
"Paimon is theorized to be the Unknown God",
"Kazuha had a poor sales in his banner, but people greatly regret not pulling for him once they realized he is ridiculously good. He's also very fun to play.",
"Aloy has one of the slowest mecahnics in Genshin.",
"Zhongli made it way too easy to not dodge in Genshin. I lost all of my mechanics.",






];

const bgMUSIC = [ 'Images/001.mp3', 'Images/002.mp3', 'Images/004.mp3', 'Images/007.mp3', 'Images/GenshinImpact.mp3'];


/* kristina's code
console.log("smiles in cat");
let filenames = [
    "catSmile1.png",
    "catSmile2.png",
    "catSmile3.png",
    "catSmile4.png",
    "catSmile5.png",
];

let imgs = document.getElementsByTagName("img");

for (imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = "images/" + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(imgElt.src);
}*/


//It's time to replace every single image with genshin


// replace bg picture
const body1 = document.getElementsByTagName('body');

// set font text to body this ugly ass color
document.body.style.color = '#51f73b';
// make sure all the divs have this color too
const divColor = document.getElementsByTagName('div');
for(let el of divColor){
    el.style.color = '#51f73b';
}

// set bg image to pink, and this repeating monstrosity
document.body.style.background = "#fccccc url('https://sensortower-itunes.s3.amazonaws.com/blog/2021/09/genshin-impact-version-2-1-150-million-revenue-first-week.jpg') repeat"
// const divbg = document.g etElementsByTagName("div");
// for (let i = 0; i < divbg.length; i++) {
//     let randomImgs = Math.floor(Math.random() * genshinImpactImages.length);
//     let file = genshinImpactImages[randomImgs];
//     // chromify url lol
//     let url = chrome.extension.getURL(file);
//     divbg[i].innerHTML = url;
// } 


// And all of the text as well
const text = document.getElementsByTagName("h1");
for (let i = 0; i < text.length; i++) {
    // length-1 to get 0 length
    let randomQuotes = Math.floor(Math.random() * genshinImpactQuotes.length);
    text[i].innerText = genshinImpactQuotes[randomQuotes];
    // text["background-image"] = "https://sensortower-itunes.s3.amazonaws.com/blog/2021/09/genshin-impact-version-2-1-150-million-revenue-first-week.jpg"
} 


const words = document.getElementsByTagName("p");
for (let i = 0; i < words.length; i++) {
    let randomQuotes = Math.floor(Math.random() * genshinImpactQuotes.length);
    words[i].innerText = genshinImpactQuotes[randomQuotes];
    // words["background-image"] = "https://sensortower-itunes.s3.amazonaws.com/blog/2021/09/genshin-impact-version-2-1-150-million-revenue-first-week.jpg"
} 
const moreWords = document.getElementsByTagName("h2");
for (let i = 0; i < moreWords.length; i++) {
    let randomQuotes = Math.floor(Math.random() * genshinImpactQuotes.length);
    moreWords[i].innerText = genshinImpactQuotes[randomQuotes];
    // moreWords["background-image"] = "https://sensortower-itunes.s3.amazonaws.com/blog/2021/09/genshin-impact-version-2-1-150-million-revenue-first-week.jpg"
} 
const yupWords = document.getElementsByTagName("h3");
for (let i = 0; i < yupWords.length; i++) {
    let randomQuotes = Math.floor(Math.random() * genshinImpactQuotes.length);
    yupWords.innerText = genshinImpactQuotes[randomQuotes];
    // yupWords["background-image"] = "https://sensortower-itunes.s3.amazonaws.com/blog/2021/09/genshin-impact-version-2-1-150-million-revenue-first-week.jpg"
} 

const listsWords = document.getElementsByTagName("li");
for (let i = 0; i < listsWords.length; i++) {
    let randomQuotes = Math.floor(Math.random() * genshinImpactQuotes.length);
    listsWords[i].innerText = genshinImpactQuotes[randomQuotes];
    // listsWords["background-image"] = "https://sensortower-itunes.s3.amazonaws.com/blog/2021/09/genshin-impact-version-2-1-150-million-revenue-first-week.jpg"
} 

const aDistinct = document.getElementsByTagName("a");
for (let i = 0; i < aDistinct.length; i++) {
    let randomQuotes = Math.floor(Math.random() * genshinImpactQuotes.length);
    aDistinct[i].innerText = genshinImpactQuotes[randomQuotes];
    // aDistinct["background-image"] = "https://sensortower-itunes.s3.amazonaws.com/blog/2021/09/genshin-impact-version-2-1-150-million-revenue-first-week.jpg"
} 
// play.audio();
// new Audio('Sounds/GenshinImpact.mp3');

// randomize bg music 
//FIX IT CHRIS. I BELIEVE IN YOU.
const bgURLRandom = Math.floor(Math.random() * 5);
console.log(bgURLRandom);
// let myAudio = new Audio(chrome.runtime.getURL('Images/GenshinImpact.mp3'));
let myAudio = new Audio(chrome.runtime.getURL(bgMUSIC[bgURLRandom]));
myAudio.volume = 0.4; // <---- 0.2 lower the better try pls
console.log(myAudio);
myAudio.play(); // 
// does it work
//YES YES YES AHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHHAHAHAAH
// yayyyyy oh was it randomized to 10?
//LET'S GO0OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//So Chris, do i just go like. Yeah this is our probject. "Here you go Chris. Tka eit away with the screen and speech" do i leave now
// IDK I DONT FUCKING CARE IT WORKS

//chris chris chris chris chris chris chris
// WHAT WHAT HWAT i am practicing my speach got like 10 mintues
//look at 198. oh yeah unless you want to say anything else kkkkkkkk lol
//u/nolkaeyss  Lol no. I'm just ognna say thisi s our project and leae the floor to you. Take it away big boi
//Ty jen. You saved us. I will also offer you boba
// chris owes me 2 boba < == lol rip chris. No more whale life for you in Genshin
// brandon owes me 1 boba < im gonna leave so it don't break :)
//brooo these guys are bitches they aint got nothing on us ahah k
//how do we shotout Jen ? Do we? 
const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
    let randomImgs = Math.floor(Math.random() * genshinImpactImages.length);
    let file = genshinImpactImages[randomImgs];
    // chromify url lol
    let url = chrome.extension.getURL(file);
    imgs[i].src = url;
} 

// need to set the sound lower because it is REALLY LOUD!!!!!!!!!

const sfxMusicArray = ['Images/1.mp3','Images/2.mp3','Images/3.mp3','Images/4.mp3', 'Images/5.mp3', 'Images/6.mp3', 'Images/7.mp3', 'Images/klee.mp3'];

// const onload = document.get
// document.addEventListener('DOMContentLoaded', () => {
    // const body = document.querySelector('body');
    
    document.body.addEventListener('keydown', (e) => {
        const randosfx = Math.floor(Math.random() * sfxMusicArray.length);
        let soundEffects = new Audio(chrome.runtime.getURL(sfxMusicArray[randosfx]));
        console.log('play');
        soundEffects.volume = 0.2; // did u want the sound fx to be lower? 
        soundEffects.play(); //ganbatte
       myAudio.play(); // <----
    });
// });

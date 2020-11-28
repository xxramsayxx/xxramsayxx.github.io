window.onload = function () {
    var loader = document.getElementById("loader");
    var cornerlogo = document.getElementById("cornerlogo");
    cornerlogo.addEventListener("click", spin);
    cornerlogo.addEventListener("transitionend", spin);
    homeBtn = document.getElementById("homeBtn");
    var searchbar = document.getElementById("searchbar");
    var searchbar1 = document.getElementById("searchbar1");
    searchbar.addEventListener("focusout", raisesearch);
    ['focus', 'mouseover'].forEach(function (evt) {
        searchbar.addEventListener(evt, lowersearch, false);
    });
    ['focusout', 'mouseout'].forEach(function (evt) {
        searchbar.addEventListener(evt, raisesearch, false);
    });
    spin();

    ['focus', 'mouseover'].forEach(function (evt) {
        searchbar1.addEventListener(evt, lowersearch, false);
    });
    ['focusout', 'mouseout'].forEach(function (evt) {
        searchbar1.addEventListener(evt, raisesearch, false);
    });
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        document.addEventListener("backbutton", backbutton, false);
        function backbutton() {
            alert("this worked");

     }    }
}

function brightBtn(bright) {
var buttonz = document.querySelectorAll(".buttonz"); 
for (i = 0; i < buttonz.length; i++) {
  buttonz[i].style.filter = "brightness(35%)";
  bright.style.filter = "brightness(100%)";
}}

function screenChange(screenName) {
var screenz = document.querySelectorAll(".screenz");
for(i=0; i < screenz.length; i++) {
    screenz[i].style.display = "none";
    screenName.style.display = "block";
    blurr.style.display = "none";
    screenz[i].scrollTop = 0;
}}

function lowersearch() {
    let lowdown = document.querySelectorAll(".search-icon");
    for(i=0; i < lowdown.length; i++) {
        lowdown[i].style.top = "20px";
    
}}
function raisesearch() {
    let lowdown = document.querySelectorAll(".search-icon");
    for(i=0; i < lowdown.length; i++) {
    lowdown[i].style.top = "8px";
    
}}

function spin() {
    cornerlogo.style.transform = "scale(.0, .0)";
    loader.style.transform = "scale(3,3)";
    
    setTimeout(function () {
        cornerlogo.style.transform = "scale(1, 1)";
    }, 300);

    setTimeout(function () {
        loader.style.display = "none";
        let boog = document.querySelector(".images3")
        boog.style.display = "inherit";
    }, 30);

}
function tvhopen() {
    alert("this is tv list");
}
function movieshopen() {
    alert("this is movielist");
}
function mylisthopen() {
    alert("this is my list");
}


function openpop() {
    blurr = document.getElementById("blurr");
    popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.style.transform = "translateY(-350px)";
    
    setTimeout(function () {
        blurr.style.display = "block";
    }, 10);
}
function closepopup() {
    blurr.style.display = "none";
    popup.style.transform = "translateY(600px) ";
}
function closepopup1() {
    popup.style.display = "none";

}
function grandpa() {
    document.getElementById('describe').textContent = 'Peter and his grandpa used to be very close, but when Grandpa Jack moves in with the family, Peter is forced to give up his most prized possession: his bedroom. Peter will stop at nothing to get his room back, scheming with friends to devise a series of pranks to drive him out. However, grandpa doesnt give up easily, and it turns into an all-out war between the two.'
    describetitle.innerHTML = ("The War With Grandpa");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfgni4b7jqf8NfaEw4NkIFkhzUomDF7l-JEq0w-FySSsR7n9isNB81qrMQ-08&s=10")';
    blurr = document.getElementById("blurr");
    popup.style.transform = "scale(1, 1)"
    openpop();
}
function ghostbusters() {
    document.getElementById('describe').textContent = 'After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become "ghostbusters" to wage a high-tech battle with the supernatural for money. They stumble upon a gateway to another dimension, a doorway that members will release evil upon the city. The Ghostbusters must now save New York from complete destruction.'
    describetitle.innerHTML = ("Ghostbusters");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQguiu7v1qhYwW6rr1y01mXwIgOvNAFh-_-fmnt5x-OpWpCnGP")';
    openpop();

}
function themask() {
    document.getElementById('describe').textContent = 'When timid bank clerk Stanley Ipkiss (Jim Carrey) discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle (Cameron Diaz). Unfortunately, under the masks influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell (Peter Greene), whose goons get blamed for the heist.'
    describetitle.innerHTML = ("The Mask");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJTpSkkYdXhjhUVEWL-KSc1Ox-n-Pt7f6E7geykjNqF-RVaEIUgU5QrPjd2V2&s=10")';
    openpop();

}
function sausageparty() {
    document.getElementById('describe').textContent = "Life is good for all the food items that occupy the shelves at the local supermarket. Frank (Seth Rogen) the sausage, Brenda (Kristen Wiig) the hot dog bun, Teresa Taco and Sammy Bagel Jr. (Edward Norton) can't wait to go home with a happy customer. Soon, their world comes crashing down as poor Frank learns the horrifying truth that he will eventually become a meal. After warning his pals about their similar fate, the panicked perishables devise a plan to escape from their human enemies."
    describetitle.innerHTML = ("Sausage Party");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbnsmEAVX6BSd7vGJRq-q9KloEWQBUM_iTiG2aHKZIkGtTl1ZPRRBUX6Xl39w&s=10")';
    openpop();

}
function jumanji() {
    document.getElementById('describe').textContent = "Four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever."

    describetitle.innerHTML = ("Jumanji");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANrEj3vjRr4yMAA0qqgzOTSoFzUKxHr2KhuNxRSrZw6tL2k6D")';
    openpop();

}
function cops() {
    document.getElementById('describe').textContent = 'Best pals Ryan (Jake Johnson) and Justin (Damon Wayans Jr.) are stalled in their respective careers -- a fact that is painfully driven home when they go to a college reunion. Dressed as police in the mistaken belief that they were to attend a costume party, Ryan and Justin find that the uniforms earn them much respect and attention. Although Justin is uncomfortable with the idea, Ryan decides to continue with the charade, putting them both in increasingly dangerous situations.'

    describetitle.innerHTML = ("Let's Be Cops");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3DV9jURYiKwx9LVTDTegHRX4sxwLKXa4iCI3u9wTBpFeC0Tfl")';
    openpop();

}
function happy() {
    document.getElementById('describe').textContent = "All Happy Gilmore (Adam Sandler) has ever wanted is to be a professional hockey player. But he soon discovers he may actually have a talent for playing an entirely different sport: golf. When his grandmother (Frances Bay) learns she is about to lose her home, Happy joins a golf tournament to try and win enough money to buy it for her. With his powerful driving skills and foulmouthed attitude, Happy becomes an unlikely golf hero -- much to the chagrin of the well-mannered golf professionals."

    describetitle.innerHTML = ("Happy Gilmore");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkRVuCWAKRbcKuOELKJT4JE_JP-WKQEQdBv0qERxvdqZNjcvIO")';
    openpop();

}
function mary() {
    document.getElementById('describe').textContent = "Ted's (Ben Stiller) dream prom date with Mary (Cameron Diaz) never happens due to an embarrassing injury at her home. Years later, Ted hires Pat Healy (Matt Dillon) to track down Mary so he can reconnect with her. Pat lies to Ted about Mary and he finds out everything he can about her to trick her into dating him. Ted travels to meet Mary and has to weave through the web of lies that Pat and Mary's friend Tucker (Lee Evans) have woven to try and win her over."
    describetitle.innerHTML = ("Something About Mary");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRI9zRpySlKD4ptyVd4hu7jbcue8QkPkV_1ZHyzfoWTODcsJ5Ia")';
    openpop();

}
function hangover() {
    document.getElementById('describe').textContent = "Two days before his wedding, Doug (Justin Bartha) and three friends (Bradley Cooper, Ed Helms, Zach Galifianakis) drive to Las Vegas for a wild and memorable stag party. In fact, when the three groomsmen wake up the next morning, they can't remember a thing; nor can they find Doug. With little time to spare, the three hazy pals try to re-trace their steps and find Doug so they can get him back to Los Angeles in time to walk down the aisle."
    describetitle.innerHTML = ("The Hangover");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mNKrZTKJ-3jMDgEOA_XNR4rA7QIMeIe1tCk0CHiMAD2wqVqR")';
    openpop();

}
function tnights() {
    document.getElementById('describe').textContent = "NASCAR superstar Ricky Bobby (Will Ferrell) is at the top of his game; adored by fans, a trophy wife by his side, and incredible wealth. But Ricky loses it all when French Formula One champion Jean Girard (Sacha Baron Cohen) roars onto the scene. Ricky, with the help of his ruthless father, must pull himself out of the depths of despair and restore his honor on the racetrack."
    describetitle.innerHTML = ("Talladega Nights");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3LU2lUVplPPL-Rt8KujK0IijcDUnn2mDAgdpC77xtq2LpLQA")';
    openpop();

}
function tropic() {
    document.getElementById('describe').textContent = "While shooting a war film, the director attempts to liven up proceedings by dropping the principle actors into the middle of a real jungle, claiming he is going to capture their performance with hidden cameras. The hapless group including drug-addled comedy star Jeff Portnoy and po-faced method man Kirk Lazarus are completely unaware when a series of unfortunate events leads them into the middle of a real war zone."
    describetitle.innerHTML = ("Tropic Thunder");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeK0h6SlNK7EuC4x3iQ_xsivuK1akRvjJtp10XHCJ1Ddal4-5d")';
    openpop();

}
function brothers() {
    document.getElementById('describe').textContent = "Brennan Huff (Will Ferrell) and Dale Doback (John C. Reilly) have one thing in common: they are both lazy, unemployed leeches who still live with their parents. When Brennan's mother and Dale's father marry and move in together, it turns the overgrown boys' world upside down. Their insane rivalry and narcissism pull the new family apart, forcing them to work together to reunite their parents."
    describetitle.innerHTML = ("Step Brothers");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6DSZO6tqcrRiuWOdzouhf6Gu6KEyAmFlu_AHTXBKhklNtCw48")';
    openpop();

}
function joker() {
    document.getElementById('describe').textContent = "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker."
    describetitle.innerHTML = ("Joker");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeftA4e1k4VW4PRhpDccXT0ktWmEH83QT15DeyctV&s")';
    openpop();

}
function revenant() {
    document.getElementById('describe').textContent = "While exploring the uncharted wilderness in 1823, frontiersman Hugh Glass (Leonardo DiCaprio) sustains life-threatening injuries from a brutal bear attack. When a member (Tom Hardy) of his hunting team kills his young son (Forrest Goodluck) and leaves him for dead, Glass must utilize his survival skills to find a way back to civilization. Grief-stricken and fueled by vengeance, the legendary fur trapper treks through the snowy terrain to track down the man who betrayed him."
    describetitle.innerHTML = ("Revenant");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxDkgUWqjkjmoQYf95hBETzvPsgMH90RE8F81O70Y63u_GdrQ")';
    openpop();

} function sniper() {
    document.getElementById('describe').textContent = "U.S. Navy SEAL Chris Kyle (Bradley Cooper) takes his sole mission -- protect his comrades -- to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime target of insurgents. Despite grave danger and his struggle to be a good husband and father to his family back in the States, Kyle serves four tours of duty in Iraq. However, when he finally returns home, he finds that he cannot leave the war behind."
    describetitle.innerHTML = ("American Sniper");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPDSHlKi10xVfysOTA49wDxpx2Bj1qRvr4cgIT6GPhEmsH2xwj")';
    openpop();

}
function martian() {
    document.getElementById('describe').textContent = "When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission."
    describetitle.innerHTML = ("The Martian");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSiwreHO3oFxkPPk2yyQXBEgB5RMaGsJguPKY8rtdwLaau_DW0f")';
    openpop();

}
function fury() {
    document.getElementById('describe').textContent = "In April 1945, the Allies are making their final push in the European theater. A battle-hardened Army sergeant named Don Wardaddy Collier (Brad Pitt), leading a Sherman tank and a five-man crew, undertakes a deadly mission behind enemy lines. Hopelessly outnumbered, outgunned and saddled with an inexperienced soldier (Logan Lerman) in their midst, Wardaddy and his men face overwhelming odds as they move to strike at the heart of Nazi Germany."
    describetitle.innerHTML = ("Fury");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOvuNs46WYgmsBrb3PqpoDJJHpTWpRA4184bcGdtcXo-u4Tq4X")';
    openpop();

}
function snowden() {
    document.getElementById('describe').textContent = "Disillusioned with the intelligence community, top contractor Edward Snowden (Joseph Gordon-Levitt) leaves his job at the National Security Agency. He now knows that a virtual mountain of data is being assembled to track all forms of digital communication -- not just from foreign governments and terrorist groups, but from ordinary Americans. When Snowden decides to leak this classified information, he becomes a traitor to some, a hero to others and a fugitive from the law."
    describetitle.innerHTML = ("Snowden");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBMhlaVE1TXq5aw44RY5o7NmatHS_H-52Rp2F0K8Xm1pjwzccm")';
    openpop();

}
function arrival() {
    document.getElementById('describe').textContent = "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind."
    describetitle.innerHTML = ("Arrival");
    popuppic.style.backgroundImage = 'url("https://cdn3-www.comingsoon.net/assets/uploads/gallery/arrival/arrivalposter.jpg")';
    openpop();

}
function compton() {
    document.getElementById('describe').textContent = "In 1988, a groundbreaking new group revolutionizes music and pop culture, changing and influencing hip-hop forever. N.W.A's first studio album, Straight Outta Compton, stirs controversy with its brutally honest depiction of life in Southern Los Angeles. With guidance from veteran manager Jerry Heller, band members Ice Cube (O'Shea Jackson Jr.), Dr. Dre (Corey Hawkins), Eazy-E, DJ Yella and MC Ren navigate their way through the industry, acquiring fame, fortune and a place in history."
    describetitle.innerHTML = ("Straight Outta Compton");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_Fdo1BDLDKpaoUmIseDRLpP5Y7U9PhpY-wG2TKXF_dIx44TRH")';
    openpop();

}
function django() {
    document.getElementById('describe').textContent = "Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave."
    describetitle.innerHTML = ("Django");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSj9kwdFsi7pfCyGYZoKy7hFYpN0AP0wgjthO3QYjc39hOOGssW")';
    openpop();

}
function creed() {
    document.getElementById('describe').textContent = "Adonis Johnson (Michael B. Jordan) never knew his famous father, boxing champion Apollo Creed, who died before Adonis was born. However, boxing is in his blood, so he seeks out Rocky Balboa (Sylvester Stallone) and asks the retired champ to be his trainer. Rocky sees much of Apollo in Adonis, and agrees to mentor him, even as he battles an opponent deadlier than any in the ring. With Rocky's help, Adonis soon gets a title shot, but whether he has the true heart of a fighter remains to be seen."
    describetitle.innerHTML = ("Creed");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ07u0Xj8IACCXv1lvFffsLYW4RgE4lq9O0QCXVgI6JHlJIije2")';
    openpop();

}
function fighter() {
    document.getElementById('describe').textContent = "For Micky Ward (Mark Wahlberg), boxing is a family affair. His tough-as-nails mother is his manager. His half-brother, Dicky (Christian Bale), once a promising boxer himself, is his very unreliable trainer. Despite Micky's hard work, he is losing and, when the latest fight nearly kills him, he follows his girlfriend's advice and splits from the family. Then Micky becomes a contender for the world title and he -- and his family -- earns a shot at redemption."
    describetitle.innerHTML = ("Fighter");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNTRb4sKWh3ueN0Tf2Pz3YSQyz_8SDZBV1lv5f9GGqo1oDxjaf")';
    openpop();

}
function snitch() {
    document.getElementById('describe').textContent = "At 18 years old, Jason receives a mandatory 10-year prison sentence after being caught with a package that contained illegal drugs, although he was unaware of its contents. His father, businessman John Matthews (Dwayne Johnson), is devastated. When Jason turns down a chance to lessen his sentence by manufacturing evidence to implicate someone else, John begs to be sent under cover instead, but the already dangerous venture turns deadly after he exposes a major player in the Mexican drug trade."
    describetitle.innerHTML = ("Snitch");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAbaz6AMX4KyxjpEsV7ZTwDAu5rlMDCq8YgkKLYB89irx_4_0h")';
    openpop();

}
function halloween() {
    document.getElementById('describe').textContent = "On a cold Halloween night in 1963, six year old Michael Myers brutally murdered his 17-year-old sister, Judith. He was sentenced and locked away for 15 years. But on October 30, 1978, while being transferred for a court date, a 21-year-old Michael Myers steals a car and escapes Smith's Grove. He returns to his quiet hometown of Haddonfield, Illinois, where he looks for his next victims."
    describetitle.innerHTML = ("Halloween");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSY2iHyDk4CRvqN4eLvAp9dJmloSzAqbU_Pg0f4DeLE3d7SMhBq")';
    openpop();

} function shining() {
    document.getElementById('describe').textContent = "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family."
    describetitle.innerHTML = ("The Shining");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfWqUZeOS0kkid0unmHjF3KCG64pQJYvqKxyN0T3hgBuYUyB-_")';
    openpop();

}
function humanc() {
    document.getElementById('describe').textContent = "Two pretty but ditsy American girls are on a road trip through Europe. In Germany, they end up alone at night and when their car breaks down, they take shelter in an isolated villa. They wake in the morning to find themselves in a makeshift hospital along with a Japanese man. Here they meet a psychotic German surgeon whose life-long fantasy is to connect humans together via their gastric systems."
    describetitle.innerHTML = ("Human Centipede");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1y1GiK27NrDbY5NrMyZmIDKwUV4pGvF5em04GBEpQKTlKsFCL")';
    openpop();

}
function jaws() {
    document.getElementById('describe').textContent = "When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that the loss of tourist revenue will cripple the town. Ichthyologist Matt Hooper (Richard Dreyfuss) and grizzled ship captain Quint (Robert Shaw) offer to help Brody capture the killer beast, and the trio engage in an epic battle of man vs. nature."
    describetitle.innerHTML = ("Jaws");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKiATr7rDz89_qv3MzZ2jRuIoFaHehdK_G2pZIVxoZVaCIhrfn")';
    openpop();

}
function silence() {
    document.getElementById('describe').textContent = "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out."
    describetitle.innerHTML = ("Silence Of The Lambs");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTa-ZZcQIsRGqAziVSvy1uovUDgOPu8ms_UIF8AZWNpiJcBhsc3")';
    openpop();

}
function friday() {
    document.getElementById('describe').textContent = "Crystal Lake's history of murder doesn't deter counselors from setting up a summer camp in the woodsy area. Superstitious locals warn against it, but the fresh-faced young people -- Jack (Kevin Bacon), Alice (Adrienne King), Bill (Harry Crosby), Marcie (Jeannine Taylor) and Ned (Mark Nelson) -- pay little heed to the old-timers. Then they find themselves stalked by a brutal killer. As they're slashed, shot and stabbed, the counselors struggle to stay alive against a merciless opponent."
    describetitle.innerHTML = ("Friday The 13th");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRm8_ZKvLk9WXfmLIMWjsnanRuMUDxyWc7oEbg7fRIKsRp_ySdf")';
    openpop();

}
function halloween() {
    document.getElementById('describe').textContent = "On a cold Halloween night in 1963, six year old Michael Myers brutally murdered his 17-year-old sister, Judith. He was sentenced and locked away for 15 years. But on October 30, 1978, while being transferred for a court date, a 21-year-old Michael Myers steals a car and escapes Smith's Grove. He returns to his quiet hometown of Haddonfield, Illinois, where he looks for his next victims."
    describetitle.innerHTML = ("Halloween");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSY2iHyDk4CRvqN4eLvAp9dJmloSzAqbU_Pg0f4DeLE3d7SMhBq")';
    openpop();

} function shining() {
    document.getElementById('describe').textContent = "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family."
    describetitle.innerHTML = ("The Shining");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfWqUZeOS0kkid0unmHjF3KCG64pQJYvqKxyN0T3hgBuYUyB-_")';
    openpop();

}
function humanc() {
    document.getElementById('describe').textContent = "Two pretty but ditsy American girls are on a road trip through Europe. In Germany, they end up alone at night and when their car breaks down, they take shelter in an isolated villa. They wake in the morning to find themselves in a makeshift hospital along with a Japanese man. Here they meet a psychotic German surgeon whose life-long fantasy is to connect humans together via their gastric systems."
    describetitle.innerHTML = ("Human Centipede");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1y1GiK27NrDbY5NrMyZmIDKwUV4pGvF5em04GBEpQKTlKsFCL")';
    openpop();

}
function jaws() {
    document.getElementById('describe').textContent = "When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that the loss of tourist revenue will cripple the town. Ichthyologist Matt Hooper (Richard Dreyfuss) and grizzled ship captain Quint (Robert Shaw) offer to help Brody capture the killer beast, and the trio engage in an epic battle of man vs. nature.";

    describetitle.innerHTML = ("Jaws");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKiATr7rDz89_qv3MzZ2jRuIoFaHehdK_G2pZIVxoZVaCIhrfn")';
    openpop();

}
function silence() {
    document.getElementById('describe').textContent = "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out."
    describetitle.innerHTML = ("Silence Of The Lambs");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTa-ZZcQIsRGqAziVSvy1uovUDgOPu8ms_UIF8AZWNpiJcBhsc3")';
    openpop();

}
function exorcist() {
    document.getElementById('describe').textContent = "One of the most profitable horror movies ever made, this tale of an exorcism is based loosely on actual events. When young Regan (Linda Blair) starts acting odd -- levitating, speaking in tongues -- her worried mother (Ellen Burstyn) seeks medical help, only to hit a dead end. A local priest (Jason Miller), however, thinks the girl may be seized by the devil. The priest makes a request to perform an exorcism, and the church sends in an expert (Max von Sydow) to help with the difficult job."
    describetitle.innerHTML = ("The Exorcist");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQk9LvINiNL-rRYdRbMhfIXU4e4qH_5vT8IRUnP325yEzRxCgpG")';
    openpop();

}
function friday() {
    document.getElementById('describe').textContent = "Crystal Lake's history of murder doesn't deter counselors from setting up a summer camp in the woodsy area. Superstitious locals warn against it, but the fresh-faced young people -- Jack (Kevin Bacon), Alice (Adrienne King), Bill (Harry Crosby), Marcie (Jeannine Taylor) and Ned (Mark Nelson) -- pay little heed to the old-timers. Then they find themselves stalked by a brutal killer. As they're slashed, shot and stabbed, the counselors struggle to stay alive against a merciless opponent."
    describetitle.innerHTML = ("Friday The 13th");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRm8_ZKvLk9WXfmLIMWjsnanRuMUDxyWc7oEbg7fRIKsRp_ySdf")';
    openpop();

}
function scream() {
    document.getElementById('describe').textContent = "Wes Craven re-invented and revitalised the slasher-horror genre with this modern horror classic, which manages to be funny, clever and scary, as a fright-masked knife maniac stalks high-school students in middle-class suburbia. Craven is happy to provide both tension and self-parody as the body count mounts - but the victims aren't always the ones you'd expect."
    describetitle.innerHTML = ("Scream");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVknGCtgkcQzRIHl1QyahndTADhw4baeuZ5Ufqm-WdgYMqnTKh")';
    openpop();

}
function nightofdead() {
    document.getElementById('describe').textContent = "The radiation from a fallen satellite causes the recently deceased to rise from the grave and seek the living to use as food."
    describetitle.innerHTML = ("Night of The Living Dead");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQepSwd73NK9hRkE508z_W31HmbDASXo84PeyIa3-S_gUrKuINh")';
    openpop();

}
function omen() {
    document.getElementById('describe').textContent = "American diplomat Robert (Gregory Peck) adopts Damien (Harvey Stephens) when his wife, Katherine (Lee Remick), delivers a stillborn child. After Damien's first nanny hangs herself, Father Brennan (Patrick Troughton) warns Robert that Damien will kill Katherine's unborn child. Shortly thereafter, Brennan dies and Katherine miscarries when Damien pushes her off a balcony. As more people around Damien die, Robert investigates Damien's background and realizes his adopted son may be the Antichrist."
    describetitle.innerHTML = ("The Omen");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTySNJ5hmIsVV_PcRmpW5vQAEjRrYRy3tW2WfmE2un18pIX90J9")';
    openpop();

}
function saw() {
    document.getElementById('describe').textContent = "Photographer Adam Stanheight (Leigh Whannell) and oncologist Lawrence Gordon (Cary Elwes) regain consciousness while chained to pipes at either end of a filthy bathroom. As the two men realize they've been trapped by a sadistic serial killer nicknamed Jigsaw and must complete his perverse puzzle to live, flashbacks relate the fates of his previous victims. Meanwhile, Dr. Gordon's wife (Monica Potter) and young daughter (Makenzie Vega) are forced to watch his torture via closed-circuit video."
    describetitle.innerHTML = ("Saw");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQDT7PEjjhVUoNQ2xV9oXjrzFtk1pOr6sFLmkTmD3HvY3l07Y7")';
    openpop();

}
function freaks() {
    document.getElementById('describe').textContent = "Kept locked inside the house by her father, 7-year-old Chloe lives in fear and fascination of the outside world. It's a place where Abnormals are a constant threat -- or so she believes. But when a mysterious stranger offers her a glimpse of what's really happening, Chloe soon learns that the truth isn't so simple -- but the danger is very real."
    describetitle.innerHTML = ("Freaks");
    popuppic.style.backgroundImage = 'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJwIj3Mbn7LiDy33fwXtac3hfAN4eg84vWBj0oXV4prR0JsHTc")';
    openpop();

}
function badboys() {
    document.getElementById('describe').textContent = ("The wife and son of a Mexican drug lord embark on a vengeful quest to kill all those involved in his trial and imprisonment -- including Miami Detective Mike Lowrey. When Mike gets wounded, he teams up with partner Marcus Burnett and AMMO -- a special tactical squad -- to bring the culprits to justice. But the old-school, wisecracking cops must soon learn to get along with their new elite counterparts if they are to take down the vicious cartel that threatens their lives.")
    describetitle.innerHTML=("Bad Boys");
    popuppic.style.backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQMwHJ24fNSNgN1NRPjxaTVnAENBZhA_YskLk6sI3-DlVtDaG")';
    openpop();
    
    }
    function bookofeli() {
        document.getElementById('describe').textContent = ("Thirty years after war turned the world into a wasteland, a lone warrior named Eli (Denzel Washington) marches across the ruined landscape, carrying hope for humanity's redemption. Only one other man (Gary Oldman) understands the power of what Eli carries, and he is determined to take it for himself. Though Eli prefers peace, he will risk death to protect his precious cargo, for he must fulfill his destiny to help restore mankind.")
        
        describetitle.innerHTML=("bookofeli");
        
        popuppic.style.backgroundImage='url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlwtVwH4EYn_LsjPA42hJPsOBWpyFyjHB7o1N0GHCNJyLFhNiE")';
        openpop();
        
        }
        function batman() {
            document.getElementById('describe').textContent = ("It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.")
            
            describetitle.innerHTML=("The Dark Knight Rises");
            
            popuppic.style.backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJoHOaEfKLlDB_uplMvhAJ3AhOnLBx2kmMc_DxeTOPdk57534")';
            openpop();
            
            }
            function johnwick() {
                document.getElementById('describe').textContent = ("After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.")
                
                describetitle.innerHTML=("John Wick");
                
                popuppic.style.backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScI_Tbe-E0NkPjGbylb5_ZiFddmgWW5AofIShL6QKYB1OhZ6nb")';
                openpop();
                
                }
                function venom() {
                    document.getElementById('describe').textContent = ("Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.")
                    
                    describetitle.innerHTML=("venom");
                    
                    popuppic.style.backgroundImage='url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzh6VKG-NGn8BDHdAQso_xpjy-DGMmgYrQuJcQQq5QuvA8c-Q_")';
                    openpop();
                    
                    }
                    function twoguns() {
                        document.getElementById('describe').textContent = ("For the past year, DEA agent Bobby Trench (Denzel Washington) and U.S. Navy intelligence officer Marcus Stigman (Mark Wahlberg) have been working under cover as members of a narcotics syndicate. The twist: Neither man knows that the other is an undercover agent. When their attempt to infiltrate a Mexican drug cartel and recover millions goes haywire, the men are disavowed by their superiors. Trench and Stigman must go on the run lest they wind up in jail or in a grave.")
                        
                        describetitle.innerHTML=("Two Guns");
                        
                        popuppic.style.backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICmmKmhJ3XNgVJRGcpSsy2xWhAB8MDMC_uWQxtIV-Ze1SZYZ0")';
                        openpop();
                        
                        }
                        function jurassicworld() {
                            document.getElementById('describe').textContent = ("Three years after the destruction of the Jurassic World theme park, Owen Grady and Claire Dearing return to the island of Isla Nublar to save the remaining dinosaurs from a volcano that's about to erupt. They soon encounter terrifying new breeds of gigantic dinosaurs, while uncovering a conspiracy that threatens the entire planet.")
                            
                            describetitle.innerHTML=("Jurassic World");
                            
                            popuppic.style.backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDh09MIU-RGYkALiml4YDjVDSfx7f2ol_ASouFTzgtbkQs5ihE")';
                            openpop();
                            
                            }
                            function godzilla() {
                                document.getElementById('describe').textContent = ("Members of the crypto-zoological agency Monarch face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species-thought to be mere myths-rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.")
                                
                                describetitle.innerHTML=("Godzilla");
                                
                                popuppic.style.backgroundImage='url("https://pbs.twimg.com/media/D4clHP2UIAAeTs0.jpg:large")';
                                openpop();
                                
                                }
                                function honestthief() {
                                    document.getElementById('describe').textContent = ("Hoping to cut a deal, a professional bank robber agrees to return all the money he stole in exchange for a reduced sentence. But when two FBI agents set him up for murder, he must now go on the run to clear his name and bring them to justice.")
                                    
                                    describetitle.innerHTML=("Honest Thief");
                                    
                                    popuppic.style.backgroundImage='url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnhsNJK67j6w2oqxnWrO5vbiyCKffPlaTLjMOGuxZMU1ra8npY")';
                                    openpop();
                                    
                                    }
                                    function blackpanther() {
                                        document.getElementById('describe').textContent = ("After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.")
                                        
                                        describetitle.innerHTML=("Black Panther");
                                        
                                        popuppic.style.backgroundImage='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3UHmuft7zz-Ccup-UfFKoCc94KgsVjQLqJsUlY3qOpUsz55f")'
                                        openpop();
                                        ;
                                        
                                        
                                        }



let word;

function generateNewWord() {
    let temp = "Abaft,Aboon,About,Above,Adown,Afore,After,Along,Aloof,Among,Below,Circa,Cross,Furth,Minus,Neath,Round,Since,Spite,Under,Until,Abaft,Aboon," +
        "About,Above,Accel,Adown,Afoot,Afore,Afoul,After,Again,Agape,Agogo,Agone,Ahead,Ahull,Alife,Alike,Aline,Aloft,Alone,Along,Aloof,Aloud,Amiss,Amply,Amuck," +
        "Apace,Apart,Aptly,Arear,Aside,Askew,Awful,Badly,Bally,Below,Canny,Cheap,Clean,Clear,Coyly,Daily,Dimly,Dirty,Ditto,Drily,Dryly,Dully,Early,Extra,False," +
        "Fatly,Feyly,First,Fitly,Forte,Forth,Fresh,Fully,Funny,Gaily,Gayly,Godly,Great,Haply,Heavy,Hella,Hence,Hotly,Icily,Infra,Jildi,Jolly,Laxly,Lento,Light," +
        "Lowly,Madly,Maybe,Never,Newly,Nobly,Oddly,Often,Other,Ought,Party,Piano,Plain,Plonk,Plumb,Prior,Queer,Quick,Quite,Ramen,Rapid,Redly,Right,Rough,Round," +
        "Sadly,Secus,Selly,Sharp,Sheer,Shily,Short,Shyly,Silly,Since,Sleek,Slyly,Small,So-So,Sound,Spang,Srsly,Stark,Still,Stone,Stour,Super,Tally,Tanto,There," +
        "Thick,Tight,Today,Tomoz,Truly,Twice,Under,Utter,Verry,Wanly,Wetly,Where,Wrong,Wryly,Aback,Afore,After,Bothe,Other,Since,Slash,Until,Where,While,Acute," +
        "Alive,Alone,Angry,Aware,Awful,Basic,Black,Blind,Brave,Brief,Broad,Brown,Cheap,Chief,Civil,Clean,Clear,Close,Crazy,Daily,Dirty,Early,Empty,Equal,Exact," +
        "Extra,Faint,False,Fifth,Final,First,Fresh,Front,Funny,Giant,Grand,Great,Green,Gross,Happy,Harsh,Heavy,Human,Ideal,Inner,Joint,Large,Legal,Level,Light," +
        "Local,Loose,Lucky,Magic,Major,Minor,Moral,Naked,Nasty,Naval,Other,Outer,Plain,Prime,Prior,Proud,Quick,Quiet,Rapid,Ready,Right,Roman,Rough,Round,Royal," +
        "Rural,Sharp,Sheer,Short,Silly,Sixth,Small,Smart,Solid,Sorry,Spare,Steep,Still,Super,Sweet,Thick,Third,Tight,Total,Tough,Upper,Upset,Urban,Usual,Vague," +
        "Valid,Vital,White,Whole,Wrong,Young,Above,Admit,Adopt,Agree,Allow,Alter,Apply,Argue,Arise,Avoid,Begin,Blame,Break,Bring,Build,Burst,Carry,Catch,Cause," +
        "Check,Claim,Clean,Clear,Climb,Close,Count,Cover,Cross,Dance,Doubt,Drink,Drive,Enjoy,Enter,Exist,Fight,Focus,Force,Guess,Imply,Issue,Judge,Laugh,Learn," +
        "Leave,Let’s,Limit,Marry,Match,Occur,Offer,Order,Phone,Place,Point,Press,Prove,Raise,Reach,Refer,Relax,Serve,Shall,Share,Shift,Shoot,Sleep,Solve,Sound," +
        "Speak,Spend,Split,Stand,Start,State,Stick,Study,Teach,Thank,Think,Throw,Touch,Train,Treat,Trust,Visit,Voice,Waste,Watch,Worry,Would,Write,There,Where," +
        "Which,Whose,Whoso,Yours,Yours,Abuse,Adult,Agent,Anger,Apple,Award,Basis,Beach,Birth,Block,Blood,Board,Brain,Bread,Break,Brown,Buyer,Cause,Chain,Chair," +
        "Chest,Chief,Child,China,Claim,Class,Clock,Coach,Coast,Court,Cover,Cream,Crime,Cross,Crowd,Crown,Cycle,Dance,Death,Depth,Doubt,Draft,Drama,Dream,Dress," +
        "Drink,Drive,Earth,Enemy,Entry,Error,Event,Faith,Fault,Field,Fight,Final,Floor,Focus,Force,Frame,Frank,Front,Fruit,Glass,Grant,Grass,Green,Group,Guide," +
        "Heart,Henry,Horse,Hotel,House,Image,Index,Input,Issue,Japan,Jones,Judge,Knife,Laura,Layer,Level,Lewis,Light,Limit,Lunch,Major,March,Match,Metal,Model," +
        "Money,Month,Motor,Mouth,Music,Night,Noise,North,Novel,Nurse,Offer,Order,Other,Owner,Panel,Paper,Party,Peace,Peter,Phase,Phone,Piece,Pilot,Pitch,Place," +
        "Plane,Plant,Plate,Point,Pound,Power,Press,Price,Pride,Prize,Proof,Queen,Radio,Range,Ratio,Reply,Right,River,Round,Route,Rugby,Scale,Scene,Scope,Score," +
        "Sense,Shape,Share,Sheep,Sheet,Shift,Shirt,Shock,Sight,Simon,Skill,Sleep,Smile,Smith,Smoke,Sound,South,Space,Speed,Spite,Sport,Squad,Staff,Stage,Start," +
        "State,Steam,Steel,Stock,Stone,Store,Study,Stuff,Style,Sugar,Table,Taste,Terry,Theme,Thing,Title,Total,Touch,Tower,Track,Trade,Train,Trend,Trial,Trust," +
        "Truth,Uncle,Union,Unity,Value,Video,Visit,Voice,Waste,Watch,Water,While,White,Whole,Woman,World,Youth";
    let array = temp.split(",");

    word = array[generateRandomNumber(590)];
}

function generateRandomNumber(max) {
    let number = Math.floor(Math.random() * max);

    return number;
}

function check(guess) {


    let final = ["N", "N", "N", "N", "N"];

    //Checking if any of the letters are in the word and changing them to I
    for (let j = 0; j < 5; j++) {
        if (word.includes(guess[j])) {
            final[j] = "I";
        }
    }

    word.split(""); //index i

    //Checking if any of the letters are in the correct spot and changing them to C
    for (let i = 0; i < 5; i++) {
            if (guess[i] === word[i]) {
                final[i] = "C";
            }
    }
        return final.join("");
}

function playnow(play) {
    let guess = document.querySelector("#guess" + play).value;
    let message = document.querySelector("#answer6");
    let button = document.querySelector("#button" + play);

    guess.split("");
    let final = check(guess);
    let final2 = final.split("");
        //Splitting the string variable guess into an array of characters


    let selector;

    button.remove();
    if (final === "CCCCC") {
        message.innerHTML = "You won";
    }
    else if (play === 6) {
        message.innerHTML = "Sorry you lost, the word was: " + word;
    }
    else {
        for (let i = 0; i < 5; i++) {
            selector = document.querySelector("#answer" + play + (i + 1));
            selector.innerHTML = guess[i];
            if (final2[i] === "C") {
                selector.classList.add("green");
            }
            else if (final2[i] === "I") {
                selector.classList.add("yellow");
            }
            else {
                selector.classList.add("grey");
            }
        }
    }
}
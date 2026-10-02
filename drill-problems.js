/*
  猛特訓アプリ 問題データ（このファイルだけ編集すれば問題を追加できます）

  追加のしかた：
  「▲ ここより上に追加」の行の直上に、下の形のセットを1つ貼ります（前のセットの } のあとにカンマ）。
  { title:"セット名", items:[
      { q:"日本語（意味のかたまり）", a:"English chunk" },
      { q:"つなげる日本語", a:"English chunk chunk" },
      { q:"全文の日本語", a:"Full English sentence.", full:true }   // 最後は full:true
  ]}

  ルール：
  ・a（英語）はユーザーが決めた英文をそのまま使う（書き換えない）
  ・すべての a は、全文の英語の「連続した一部分」にする
  ・最後の1問に full:true を付ける

  下のセットは動作確認用のサンプルです。自分の問題を追加したら、消して構いません。
*/
window.DRILL_SETS = [
  { title:"サンプル：父の通勤", items:[
    { q:"私の父は", a:"My father" },
    { q:"小さな会社で働いている", a:"who works at a small company" },
    { q:"私の父は、小さな会社で働いていて、", a:"My father, who works at a small company," },
    { q:"毎日電車で会社へ行きます", a:"goes to the office by train every day." },
    { q:"小さな会社で働いている私の父は、毎日電車で会社へ行きます。", a:"My father, who works at a small company, goes to the office by train every day.", full:true }
  ]},
  { title:"サンプル：もしもの話", items:[
    { q:"もしもっと時間があれば", a:"If I had more time," },
    { q:"毎朝英語を勉強するのに", a:"I would study English every morning." },
    { q:"もしもっと時間があれば、毎朝英語を勉強するのに。", a:"If I had more time, I would study English every morning.", full:true }
  ]},
  { title:"例文：§366", items:[
  { q:"何か起こったときのために", a:"In case anything happens," },
  { q:"すぐに電話をくれ", a:"give me a call immediately;" },
  { q:"何か起こったらすぐに電話をくれ", a:"In case anything happens, give me a call immediately;" },
  { q:"急行するよ", a:"I'll rush over" },
  { q:"君の居るところに着くために", a:"to get to where you are." },
  { q:"君の居るところへ急行するよ", a:"I'll rush over to get to where you are." },
  { q:"何か起こったらすぐに電話をくれ。君の居るところへ急行するよ。", a:"In case anything happens, give me a call immediately; I'll rush over to get to where you are.", full:true },
  { q:"そら見たことか", a:"Serves you right." },
  { q:"(私は)あなたに言った", a:"I told you" },
  { q:"データのコピーを取っておくように", a:"to make a copy of the data" },
  { q:"データのコピーを取っておくように言ったのに", a:"I told you to make a copy of the data" },
  { q:"コンピュータの調子が悪くなるといけないので", a:"in case the computer went wrong." },
  { q:"コンピュータの調子が悪くなるといけないので、データのコピーを取っておくように言ったのに", a:"I told you to make a copy of the data in case the computer went wrong." },
  { q:"そら見たことか。コンピュータの調子が悪くなるといけないので、データのコピーを取っておくように言ったのに。", a:"Serves you right. I told you to make a copy of the data in case the computer went wrong.", full:true },
  { q:"もうおいとましよう", a:"We'd better go now" },
  { q:"余計に時間がかかるかもしれないから", a:"in case it takes more time" },
  { q:"予定より", a:"than we expect" },
  { q:"そこに着くのに", a:"to get there" },
  { q:"そこに着くのに予定より余計に時間がかかるかもしれないから", a:"in case it takes more time than we expect to get there" },
  { q:"交通渋滞のために", a:"because of the traffic jam." },
  { q:"交通渋滞のためにそこに着くのに予定より余計に時間がかかるかもしれないから", a:"in case it takes more time than we expect to get there because of the traffic jam." },
  { q:"交通渋滞のためにそこに着くのに予定より余計に時間がかかるかもしれないから、もうおいとましよう。", a:"We'd better go now in case it takes more time than we expect to get there because of the traffic jam.", full:true }
]},
{ title:"例文：§370", items:[
  { q:"20歳になったのだから", a:"Now that I'm twenty," },
  { q:"(私は)酒が飲める", a:"I can drink" },
  { q:"存分に", a:"to my satisfaction." },
  { q:"存分に酒が飲める", a:"I can drink to my satisfaction." },
  { q:"20歳になったのだから、存分に酒が飲めるぞ。", a:"Now that I'm twenty, I can drink to my satisfaction.", full:true },
  { q:"テクノロジーが大変進歩したので", a:"Now that technology has improved a lot," },
  { q:"以前は叶わないと思われていた", a:"which were considered (to be) impossible before" },
  { q:"夢の多く", a:"many of the dreams" },
  { q:"以前は叶わないと思われていた夢の多く", a:"many of the dreams which were considered (to be) impossible before" },
  { q:"(それらは)今や実現可能である", a:"They can now be made possible." },
  { q:"以前は叶わないと思われていた夢の多くも今や実現可能である", a:"many of the dreams which were considered (to be) impossible before can now be made possible." },
  { q:"テクノロジーが大変進歩したので、以前は叶わないと思われていた夢の多くも今や実現可能である。", a:"Now that technology has improved a lot, many of the dreams which were considered (to be) impossible before can now be made possible.", full:true },
  { q:"人は言うが", a:"People say," },
  { q:"大学生になったのだから", a:"now that I have become a college student" },
  { q:"辛い試験を乗り越えて", a:"getting over the hard exam," },
  { q:"辛い試験を乗り越えて大学生になったのだから", a:"now that I have become a college student getting over the hard exam," },
  { q:"リラックスすればよい", a:"I should relax." },
  { q:"辛い試験を乗り越えて大学生になったのだから、リラックスすればよいと人は言う", a:"People say, now that I have become a college student getting over the hard exam, I should relax." },
  { q:"怠惰に過ごしたくはない", a:"But I don't want to live an idle life" },
  { q:"大学時代に", a:"in my college days." },
  { q:"大学時代を怠惰に過ごしたくはない", a:"But I don't want to live an idle life in my college days." },
  { q:"辛い試験を乗り越えて大学生になったのだから、リラックスすればよいと人は言うが、大学時代を怠惰に過ごしたくはない。", a:"People say, now that I have become a college student getting over the hard exam, I should relax. But I don't want to live an idle life in my college days.", full:true }
]},
  { title:"§381", items:[
  { q:"私達の経済的に苦しい状況が", a:"Our difficult economic situation" },
  { q:"(それが)私達に計画を断念させた", a:"It made us give up the plan" },
  { q:"経済的に苦しかったので、私達は計画を断念せざるを得なかった", a:"Our difficult economic situation made us give up the plan" },
  { q:"結婚披露宴を行う", a:"to have our wedding reception" },
  { q:"一流ホテルで", a:"at a first-class hotel." },
  { q:"一流ホテルで結婚披露宴を行う", a:"to have our wedding reception at a first-class hotel." },
  { q:"経済的に苦しかったので、私達は一流ホテルで結婚披露宴を行う計画を断念せざるを得なかった。", a:"Our difficult economic situation made us give up the plan to have our wedding reception at a first-class hotel.", full:true },
  { q:"寄付を募って", a:"Collecting donations," },
  { q:"町長は", a:"the town's mayor" },
  { q:"寄付を募って、町長は", a:"Collecting donations, the town's mayor" },
  { q:"(彼は)その道路を建設しようとしている", a:"He is trying to have the road constructed" },
  { q:"大統領のパレードが行われるまでに", a:"before the President's parade is held." },
  { q:"大統領のパレードが行われるまでに、その道路を建設しようとしている", a:"is trying to have the road constructed before the President's parade is held." },
  { q:"町長は寄付を募って、大統領のパレードが行われるまでに、その道路を建設しようとしている。", a:"Collecting donations, the town's mayor is trying to have the road constructed before the President's parade is held.", full:true },
  { q:"議題は", a:"Though the subject" },
  { q:"(それは)直接、彼には関係なかったが", a:"It wasn't directly related to him," },
  { q:"議題は直接、経理部長に関係なかったが", a:"Though the subject wasn't directly related to him," },
  { q:"(私達は)経理部長に", a:"we had the account manager" },
  { q:"会議に参加してもらった", a:"join the meeting" },
  { q:"経理部長に会議に参加してもらった", a:"we had the account manager join the meeting" },
  { q:"議題は直接関係なかったが、経理部長に会議に参加してもらった", a:"Though the subject wasn't directly related to him, we had the account manager join the meeting" },
  { q:"必要になると困るので念のため", a:"in case he was needed." },
  { q:"議題は直接、経理部長に関係なかったが、もし彼が必要になると困るので念のため会議に参加してもらった。", a:"Though the subject wasn't directly related to him, we had the account manager join the meeting in case he was needed.", full:true }
]},
{ title:"§382", items:[
  { q:"少年はうさぎ風船を手放し", a:"The boy let the rabbit-shaped balloon go" },
  { q:"(彼は)それが上って行くのを見つめた", a:"He watched it rise" },
  { q:"少年はうさぎ風船を手放し、それが上って行くのを見つめた", a:"The boy let the rabbit-shaped balloon go and watched it rise" },
  { q:"夜空へ", a:"into the night sky" },
  { q:"満月に照らされた", a:"lit by the full moon" },
  { q:"満月に照らされた夜空へ", a:"into the night sky lit by the full moon" },
  { q:"少年はうさぎ風船を手放し、それが満月の夜空に上って行くのを見つめた", a:"The boy let the rabbit-shaped balloon go and watched it rise into the night sky lit by the full moon" },
  { q:"つまずいて転んだ拍子に", a:"when he stumbled and fell." },
  { q:"少年はつまずいて転んだ拍子にうさぎ風船を手放し、それが満月の夜空に上って行くのを見つめた。", a:"The boy let the rabbit-shaped balloon go and watched it rise into the night sky lit by the full moon when he stumbled and fell.", full:true },
  { q:"その工場を訪れ", a:"Visiting the factory" },
  { q:"自動車が造られているのを見て", a:"seeing cars made," },
  { q:"その工場を訪れ、自動車が造られているのを見て", a:"Visiting the factory and seeing cars made," },
  { q:"私達は感銘を受けた", a:"we were impressed" },
  { q:"その能率の良さに", a:"by its efficiency." },
  { q:"その能率の良さに感銘を受けた", a:"we were impressed by its efficiency." },
  { q:"その工場を訪れ、自動車が造られているのを見て、私達はその能率の良さに感銘を受けた。", a:"Visiting the factory and seeing cars made, we were impressed by its efficiency.", full:true }
]},

  /* 出典：Science Journal for Kids（CC BY）の記事の英文を使用。日本語訳と区切りは独自。https://www.sciencejournalforkids.org/ */
  { title:"ハチドリ（出典：Science Journal for Kids）", items:[
  { q: "驚くべき生き物", a: "amazing creatures." },
  { q: "ハチドリは実に驚くべき生物である。", a: "Hummingbirds are amazing creatures.", full: true },
  { q: "彼らは空中で静止できる", a: "They can hover in the air," },
  { q: "(彼らは)後ろ向きに飛べる", a: "They can fly backward," },
  { q: "空中で静止し、後ろ向きに飛ぶことができる", a: "They can hover in the air, fly backward," },
  { q: "(彼らは)花の蜜を吸える", a: "They can drink nectar from flowers" },
  { q: "羽がとても速く動いている間に", a: "while their wings beat very fast." },
  { q: "羽をとても速く動かしながら、花の蜜を吸う", a: "and drink nectar from flowers while their wings beat very fast." },
  { q: "彼らは空中で静止することができ、後方飛行も可能で、さらに非常に高速で羽ばたきながら花の蜜を吸うことができる。", a: "They can hover in the air, fly backward, and drink nectar from flowers while their wings beat very fast.", full: true },
  { q: "(それらは)とても小さくもある", a: "They are also very small." },
  { q: "しかし同時に、ハチドリは極めて小型でもある。", a: "But hummingbirds are also very small.", full: true },
  { q: "ノドグロマンゴーハチドリは", a: "A Black-throated Mango hummingbird" },
  { q: "(それは)わずか約8グラムの重さしかない", a: "It weighs only about 8 grams." },
  { q: "例えばノドグロマンゴーハチドリの体重はわずか約8グラム。", a: "A Black-throated Mango hummingbird weighs only about 8 grams.", full: true },
  { q: "砂糖小さじ2杯", a: "two teaspoons of sugar!" },
  { q: "砂糖小さじ2杯より少ない", a: "less than two teaspoons of sugar!" },
  { q: "これは砂糖小さじ2杯分にも満たない重さだ。", a: "That is less than two teaspoons of sugar!", full: true },
  { q: "ハチドリは食べることができる", a: "A hummingbird can eat" },
  { q: "自分の体重の3倍以上", a: "more than three times its own body weight" },
  { q: "ハチドリは自分の体重の3倍以上を食べることができる", a: "A hummingbird can eat more than three times its own body weight" },
  { q: "蜜で、毎日", a: "in nectar each day" },
  { q: "ただ動き続けるために", a: "just to keep moving." },
  { q: "ただ動き続けるために、毎日蜜で", a: "in nectar each day just to keep moving." },
  { q: "ハチドリは1日に自身の体重の3倍以上に相当する量の蜜を摂取しなければ、ただ生きるだけでもエネルギーが不足してしまう。", a: "A hummingbird can eat more than three times its own body weight in nectar each day just to keep moving.", full: true },
  { q: "彼らは速く動く", a: "they move fast!" },
  { q: "そしてその動きは驚くほど速い！", a: "And they move fast!", full: true },
  { q: "私たちは知っている", a: "We know" },
  { q: "(彼らは)時速31マイルまで達することができる", a: "they can reach up to 31 miles per hour" },
  { q: "前進飛行で", a: "in forward flight." },
  { q: "前進飛行で時速31マイルまで達することができる", a: "they can reach up to 31 miles per hour in forward flight." },
  { q: "前進飛行時には時速31マイル（約49キロメートル）に達することが確認されている。", a: "We know they can reach up to 31 miles per hour in forward flight.", full: true }
]},

  // ▲ ここより上に追加
];

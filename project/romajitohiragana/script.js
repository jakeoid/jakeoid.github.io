function check()
{
  var n1 = document.getElementById('input').value

  	.replace(/kya/gi, 'きゃ')
  	.replace(/kyu/gi, 'きゅ')
  	.replace(/kyo/gi, 'きょ')
  	.replace(/gya/gi, 'ぎゃ')
  	.replace(/gyu/gi, 'ぎゅ')
  	.replace(/gyo/gi, 'ぎょ')
  	.replace(/sha/gi, 'しゃ')
  	.replace(/shu/gi, 'しゅ')
  	.replace(/sho/gi, 'しょ')
  	.replace(/ja/gi, 'じゃ')
  	.replace(/ju/gi, 'じゅ')
  	.replace(/jo/gi, 'じょ')
  	.replace(/cha/gi, 'ちゃ')
  	.replace(/chu/gi, 'ちゅ')
  	.replace(/cho/gi, 'ちょ')
  	.replace(/nya/gi, 'にゃ')
  	.replace(/nyu/gi, 'にゅ')
  	.replace(/nyo/gi, 'にょ')
  	.replace(/hya/gi, 'ひゃ')
  	.replace(/hyu/gi, 'ひゅ')
  	.replace(/hyo/gi, 'ひょ')
  	.replace(/bya/gi, 'びゃ')
  	.replace(/byu/gi, 'びゅ')
  	.replace(/byo/gi, 'びょ')
  	.replace(/pya/gi, 'ぴゃ')
  	.replace(/pyu/gi, 'ぴゅ')
  	.replace(/pyo/gi, 'ぴょ')
  	.replace(/mya/gi, 'みゃ')
  	.replace(/myu/gi, 'みゅ')
  	.replace(/myo/gi, 'みょ')
  	.replace(/rya/gi, 'りゃ')
  	.replace(/ryu/gi, 'りゅ')
  	.replace(/ryo/gi, 'りょ')
  	.replace(/ka/gi, 'か')
  	.replace(/ki/gi, 'き')
  	.replace(/ku/gi, 'く')
  	.replace(/ke/gi, 'け')
  	.replace(/ko/gi, 'こ')
  	.replace(/ga/gi, 'が')
  	.replace(/gi/gi, 'ぎ')
  	.replace(/gu/gi, 'ぐ')
  	.replace(/ge/gi, 'げ')
  	.replace(/go/gi, 'ご')
  	.replace(/sa/gi, 'さ')
  	.replace(/shi/gi, 'し')
  	.replace(/su/gi, 'す')
  	.replace(/se/gi, 'せ')
  	.replace(/so/gi, 'そ')
  	.replace(/za/gi, 'ざ')
  	.replace(/ji/gi, 'じ')
  	.replace(/zu/gi, 'ず')
  	.replace(/ze/gi, 'ぜ')
  	.replace(/zo/gi, 'ぞ')
  	.replace(/ta/gi, 'た')
  	.replace(/chi/gi, 'ち')
  	.replace(/tsu/gi, 'つ')
  	.replace(/te/gi, 'て')
  	.replace(/to/gi, 'と')
  	.replace(/da/gi, 'だ')
  	.replace(/ji/gi, 'ぢ')
  	.replace(/zu/gi, 'づ')
  	.replace(/de/gi, 'で')
  	.replace(/do/gi, 'ど')
  	.replace(/na/gi, 'な')
  	.replace(/ni/gi, 'に')
  	.replace(/nu/gi, 'ぬ')
  	.replace(/ne/gi, 'ね')
  	.replace(/no/gi, 'の')
  	.replace(/ha/gi, 'は')
  	.replace(/hi/gi, 'ひ')
  	.replace(/fu/gi, 'ふ')
  	.replace(/he/gi, 'へ')
  	.replace(/ho/gi, 'ほ')
  	.replace(/ba/gi, 'ば')
  	.replace(/bi/gi, 'び')
  	.replace(/bu/gi, 'ぶ')
  	.replace(/be/gi, 'べ')
  	.replace(/bo/gi, 'ぼ')
  	.replace(/pa/gi, 'ぱ')
  	.replace(/pi/gi, 'ぴ')
  	.replace(/pu/gi, 'ぷ')
  	.replace(/pe/gi, 'ぺ')
  	.replace(/po/gi, 'ぽ')
  	.replace(/ma/gi, 'ま')
  	.replace(/mi/gi, 'み')
  	.replace(/mu/gi, 'む')
  	.replace(/me/gi, 'め')
  	.replace(/mo/gi, 'も')
  	.replace(/ya/gi, 'や')
  	.replace(/yu/gi, 'ゆ')
  	.replace(/yo/gi, 'よ')
  	.replace(/ra/gi, 'ら')
  	.replace(/ri/gi, 'り')
  	.replace(/ru/gi, 'る')
  	.replace(/re/gi, 'れ')
  	.replace(/ro/gi, 'ろ')
  	.replace(/wa/gi, 'わ')
  	.replace(/wa/gi, 'を')
  	.replace(/n/gi, 'ん')
  	.replace(/m/gi, 'ん')
  	.replace(/a/gi, 'あ')
  	.replace(/i/gi, 'い')
  	.replace(/u/gi, 'う')
  	.replace(/e/gi, 'え')
  	.replace(/o/gi, 'お');

  
  var n2 = document.getElementById('output');

  n2.value = n1;

}
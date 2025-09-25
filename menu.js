const words=["遺影に向かって〜いえーい","足らぬ足らぬはやる気が足らぬ","地球が平面だという人はいるが、4次元のドーナツだという人は全くいない。","おはようございます","粉末ソースを先に入れちゃった...😢","視力検査のアレ、ランドルト環というらしい",'<math display="block" class="tml-display" style="display:block math;"><mrow><msup><mi>i</mi><mn>2</mn></msup><mo>=</mo><msup><mi>j</mi><mn>2</mn></msup><mo>=</mo><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mi>i</mi><mi>j</mi><mi>k</mi><mo>=</mo><mo form="prefix" stretchy="false">−</mo><mn>1</mn></mrow></math>','<math display="block" class="tml-display" style="display:block math;"><mrow><msup><mi>e</mi><mrow class="tml-sml-pad"><mi>i</mi><mi>π</mi></mrow></msup><mo>=</mo><mo form="prefix" stretchy="false">−</mo><mn>1</mn></mrow></math>'];
function randomword(){
    const today=document.getElementById("today");
    today.innerHTML=words[Math.floor(Math.random()*words.length)];
}
randomword();
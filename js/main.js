function janken(myHand) {

    let handArray = ['グー', 'チョキ', 'パー'];

    console.log('プレイヤーの手は,' + handArray[myHand]);

    // コンピュータの手をランダムに決める
    // Math.random()は, 0以上1未満の疑似乱数分布から1つ値を返す
    let rand = Math.random() * 100;
    console.log(rand);

    // Math.floor()は,与えられた引数以下の最大の整数を返す
    let rand_int = Math.floor(rand);
    console.log(rand_int);

    // じゃんけん手は3パターンなので。3で割った余りをコンピュータの手とする
    let computerHand = rand_int % 3;
    console.log('コンピュータの手は,' + handArray[computerHand]);

    // 結果を入れる変数
    let result = 0;

    // 結果の文字列を格納する配列
    let resultText = ['アイコです！', 'あなたの負けです！', 'あなたの勝ちです！'];

    // 勝ち負けの判定
    if (myHand === 0) {
        if (computerHand === 0) {
            result = 0;

        } else if (computerHand === 1) {
            result = 2;

        } else if (computerHand === 2) {
            result = 1;
        }

    } else if (myHand === 1) {
        if (computerHand === 0) {
            result = 1;

        } else if (computerHand === 1) {
            result = 0;

        } else if (computerHand === 2) {
            result = 2;
        }

    } else if (myHand === 2) {
        if (computerHand === 0) {
            result = 2;

        } else if (computerHand === 1) {
            result = 1;

        } else if (computerHand === 2) {
            result = 0;

        }
    }
 

    // 結果を表示する
    console.log(resultText[result]);

    // HTMLに結果を表示する
    // 表示領域を取得
    const result_p = document.querySelector('#janken-result');
    // 表示領域の文字列を変更（タグで挟まれた部分の文字列を任意の文字列で置き換える）
    result_p.textContent = resultText[result];

}
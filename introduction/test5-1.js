// あいさつをする関数を定義
function greet(name, age) {
    if (age !== undefined) {
        console.log("\u3084\u3042\u3084\u3042, ".concat(name, "\uFF01\u3042\u306A\u305F\u306F ").concat(age, " \u6B73\u3002\u305D\u308C\u3067\u306F\u3001\u304A\u307E\u3093\u3053\uFF01"));
    }
    else {
        console.log("\u3084\u3042\u3084\u3042, ".concat(name, "\u3002\u305D\u308C\u3067\u306F\u3001\u304A\u307E\u3093\u3053\uFF01"));
    }
}
greet("ゲドン");
greet("ヨロイ元帥", 42);

function get_calc(btn) {
    var display = document.querySelector('.display');
    var lastChar = display.value.slice(-1); // 最後の文字を取得

    // 入力が "=" の場合
    if (btn.value == "=") {
        display.value = eval(display.value);
    }
    // 入力が "AC" の場合
    else if (btn.value == "AC") {
        display.value = "";
    }
    // 入力が演算子の場合
    else if (btn.value.match(/[+\-*/]/)) {
        // 最後の文字が演算子の場合、新しい演算子で上書きしない
        if (!lastChar.match(/[+\-*/]/)) {
            display.value += btn.value;
        }
    }
    // 入力が数値の場合
    else if (!isNaN(btn.value)) {
        // 先頭に0がある場合は、新しい数値で上書きしない
        if (display.value === "0") {
            display.value = btn.value;
        } else {
            display.value += btn.value;
        }
    }
    // 入力が小数点の場合
    else if (btn.value == ".") {
        // 最後の文字が小数点でない場合、小数点を追加
        if (!lastChar.match(/[.]/)) {
            display.value += btn.value;
        }
    }
}
function samba() {
    let area = document.getElementById('text-area');
    let p_element = document.createElement('p');
    p_element.textContent = "カエルチョ・パンダ・サンバ";
    area.append(p_element);

    // text-arerの要素数取得
    let count = area.childElementCount;
    console.log(count);
    if (count == 4) {
        h_element = document.createElement('h1');
        h_element.textContent = "カエルチョ・パンダ・サンバ!!!";
        area.append(h_element);
    } else {
        null;
    }
}
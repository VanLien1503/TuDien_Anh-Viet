function check() {
    let index = -1;
    let result;
    let arrENG = ["one", "tow", "three", "four", "five"];
    let arrTV = ["1", "2", "3", "4", "5"];
    let language = document.getElementById("language").value;
    let input = document.getElementById("input").value;
    if (language === "TV") {
        if (arrTV.indexOf(input) === -1) {
            result = "Không Tìm Thấy"
        } else {
            index = arrTV.indexOf(input);
            result = arrENG[index];
        }
    } else {
        if (arrENG.indexOf(input) === -1) {
            result = "Không Tìm Thấy"
        } else {
            index = arrENG.indexOf(input);
            result = arrTV[index];
        }
    }
    document.getElementById("result").innerHTML = "<h1>" + result + "</h1>";
}
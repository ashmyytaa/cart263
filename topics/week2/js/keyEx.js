window.onload = function () {
    console.log("keys");

    window.addEventListener("keydown",
        function (e) {//body of callback function
            console.log(e);
            console.log(e.key);
            console.log(e.code);

        });

    //  function interactiveKeys
}
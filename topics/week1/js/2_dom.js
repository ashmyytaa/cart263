

window.onload = setup

function setup() {

    //-- ACCESSING THINGS FROM THE DOM --

    //  console.log(document.getElementById("one"));
    // console.log(document.querySelector("#one")); //another way of using it

    //  console.log(document.getElementsByTagName("div")); //an "array" kinda

    //  let allDivs = document.getElementsByTagName("div"); //how many times there is div in the html doc
    //  console.log(allDivs[1]); //gets a specific div from the html doc

    // console.log(document.getElementsByTagName("div").length); //total
    // console.log(document.getElementsByTagName("div")[0]); //first one



    //  console.log(document.querySelector("div")); //first one in the html doc, first match


    //console.log(document.querySelectorAll("div")); //an "array" kinda of all the divs that we find in the html doc
    // console.log(document.querySelectorAll("div p")); //an "array" kinda of all the divs that we find in the html doc

    // console.log(document.querySelectorAll("div").length); //total
    //console.log(document.querySelectorAll("div")[0]); //first one

    //console.log(document.getElementsByClassName("square_shape"));

    //  console.log(document.getElementsByClassName("square_shape").length);
    //  console.log(document.getElementsByClassName("square_shape")[0]);


    //console.log(document.querySelectorAll(".square_shape"));
    // console.log(document.querySelectorAll(".square_shape").length);
    //console.log(document.querySelectorAll(".square_shape")[0]);

    //console.log(document.getElementById("two").innerHTML);
    // console.log(document.getElementById("two").textContent);

    // console.log(document.querySelector("#five").getAttribute("id"));
    // console.log(document.querySelector("#five").getAttribute("class"));

    // console.log(document.querySelector("#two").classList);
    // console.log(document.querySelector("#two").getAttribute("class"));
    // console.log(typeof (document.querySelector("#two").getAttribute("class")));

    // console.log(document.querySelector("#five").getAttributeNames());

    //  console.log(document.querySelector("#one").style);
    // console.log(document.querySelector("#one").style.background);

    //  console.log(document.querySelector("#six").style);
    //  console.log(document.querySelector("#six").style.background);
    // console.log(document.querySelector("#six").style.width);

    // -- MODIFYING DOM ELEMENTS --

    //  console.log(document.querySelectorAll("span"));
    // console.log(document.querySelectorAll("span")[0]);
    // console.log(document.querySelectorAll("span")[0].parentElement)
    // console.log(document.querySelectorAll("span")[0].parentElement.parentElement);

    //console.log(document.querySelector(".wrapper_flex_box").children)
    //console.log(document.querySelector(".wrapper_flex_box").children[0])


    //MOFYFYING HTML CONTENT
    // document.getElementById("two").children[0].innerHTML = "<h2> Hello Js </h2>"; //changes the content
    // document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>"; //changes the context another way

    let childrenofTwo = document.getElementById("two").children;
    for (let i = 0; i < childrenofTwo.length; i++) {
        // childrenofTwo[i].innerHTML = "<h3> Hello Js </h3>";
        childrenofTwo[i].textContent = "Hello Js";

    }


    // -- MODIFYING ATTRIBUTES --


    document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
    document.querySelector(".square_shape").classList.add("another_class");


    //-- ADDING ELEMENTS TO THE DOM -- 
    document.querySelector("h1").setAttribute("id", "newId");
    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";
    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)


    //--REMOVING ELEMENTS FROM THE DOM--
    let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box")
    let toRemove = document.getElementById("six");
    parentElementToRemoveFrom.removeChild(toRemove);



    console.log("running setup");

}
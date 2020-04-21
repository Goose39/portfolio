function handleJs() {
    handleThumbnailClicks();
    formSubmit();
    initializeScreenshot();
}

function initializeScreenshot() {
    $(".screenshot").each( function() {
        const closestUrl = $(this).find("img").attr("src");
        $(this).css("background-image", `url(${closestUrl}`);
    })
}

function handleThumbnailClicks() {
    $(".screenshot").on("click", ".thumbnail", function(event) {
        const src = $(this).attr("src");
        $(this).closest(".screenshot").css("background-image", `url(${src})`);
    })
}; 

function genE(msg) {
    let str = "";
        str = str + "mail" + "to:" + "goose39.dev" + "@" + "gmail" + ".com?";
        str += `subject=Portfolio Site - Message&body=${msg}`
        return str
}

function formSubmit() {
    $(".submit").on("click", function(event) {
        event.preventDefault();
        let msg = $(".msg-text").val();
        if (msg === "Send me an email, I would be happy to hear from you!" || msg === "") {
            alert("Please enter a message to send to me");   
        } else window.open(`${genE(msg)}`);
    })
   
}

$(handleJs);
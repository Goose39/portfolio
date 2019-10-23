function handlejs() {
    handleThumbnailClicks();
    mailClick();
    textClick();
    formSubmit();
}

function textClick() {
    $(".contact").on("click", ".msg-text", function() {
        str = $(".msg-text").val();
        if (str === "Send me an email, I would be happy to hear from you!") {
            $(".msg-text").val("");
        }
    })
}

function handleThumbnailClicks() {
    $(".screenshot").on("click", ".thumbnail", function(event) {
        const src = $(this).attr("src");
        console.log(`${src}`);
        $(".screenshot").css("background-image", `url(${src})`);
    })
}; 

function mailClick() {
    $(".social").on("click", ".mail-icon", function(event) {
        window.location.href = `${genE("Hi Shaun, ")}`;
    })
}

function genE(msg) {
    let str = "";
        str = str + "mail" + "to:" + "goose39.dev" + "@" + "gmail" + ".com?";
        str += `subject=Portfolio-Site-Message&body=${msg}`
        return str
}

function formSubmit() {
    $(".submit").on("click", function(event) {
        event.preventDefault();
        let msg = $(".msg-text").val();
        window.location.href = `${genE(msg)}`
    })
   
}




$(handlejs);
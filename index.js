function handleThumbnailClicks() {
    $(".screenshot").on("click", ".thumbnail", function(event) {
        const src = $(this).attr("src");
        console.log(`${src}`);
        $(".screenshot").css("background-image", `url(${src})`);
    })
}; 

$(handleThumbnailClicks);
function checkTheme(){
    if(document.body.classList.contains('theme-dark')){
        return true
    }else{
        return false
    }
}


// Change theme
function changeTheme(){
    //console.log(document.body.classList.contains('theme-dark'));
    if(checkTheme()){
        document.body.classList.remove("theme-dark");
        console.log(checkTheme());
    }else{
        console.log(document.body.classList.add("theme-dark"));
        document.body.classList.add("theme-dark");
        console.log(checkTheme());
    }
}
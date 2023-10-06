function toggleMode(){
    const html = document.documentElement;

    /*if(html.classList.contains('light')){
        html.classList.remove('light').style.transition = "button 2s";
    }else{
        html.classList.add('light').style.transition = "button 5s";
    }*/

    html.classList.toggle('light');

}
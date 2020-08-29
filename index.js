// buttons
var btnFullStack;
var btnGameDev;
var btn3dArt;

// showcase content containers
var showcaseFullStack;
var showcaseGameDev;
var showcase3dArt;
var showcaseContentContainer;

window.onload = () => {
    document.getElementById('no-js').classList.add('hidden');
    document.getElementById('page-container').classList.remove('hidden');

    btnFullStack = document.getElementById('btn-fullstack');
    btnGameDev = document.getElementById('btn-gamedev');
    btn3dArt = document.getElementById('btn-3dart');

    showcaseFullStack = document.getElementById('showcase-display-fullstack');
    showcaseGameDev = document.getElementById('showcase-display-gamedev');
    showcase3dArt = document.getElementById('showcase-display-3dart');
    showcaseContentContainer = document.getElementById('showcase-display-content-container');
};

// TODO: animate collapsing/expanding smoothly
function showContent(section) {
    section == 'fullstack' ?
        btnFullStack.classList.add('showcase-display-tab-button-active') :
        btnFullStack.classList.remove('showcase-display-tab-button-active');
    section == 'fullstack' ?
        showcaseFullStack.classList.remove('hidden') :
        showcaseFullStack.classList.add('hidden');

    section == 'gamedev' ?
        btnGameDev.classList.add('showcase-display-tab-button-active') :
        btnGameDev.classList.remove('showcase-display-tab-button-active');
    section == 'gamedev' ?
        showcaseGameDev.classList.remove('hidden') :
        showcaseGameDev.classList.add('hidden');

    section == '3dart' ?
        btn3dArt.classList.add('showcase-display-tab-button-active') :
        btn3dArt.classList.remove('showcase-display-tab-button-active');
    section == '3dart' ?
        showcase3dArt.classList.remove('hidden') :
        showcase3dArt.classList.add('hidden');
}
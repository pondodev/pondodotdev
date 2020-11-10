// buttons
var btnOverview;
var btnFullStack;
var btnGameDev;
var btn3dArt;

// showcase content containers
var showcaseOverview;
var showcaseFullStack;
var showcaseGameDev;
var showcase3dArt;
var showcaseContentContainer;

// slice up that email real good like so bots dont see it
// it's not fool proof, but it'll get the bots that don't deserve it ;)
var emailSlices = ['pon', 'm', 'ev', 'do.d', 'e@'];

window.onload = () => {
    document.getElementById('page-container').classList.remove('hidden');
    deobfuscate();

    btnOverview = document.getElementById('btn-overview');
    btnFullStack = document.getElementById('btn-fullstack');
    btnGameDev = document.getElementById('btn-gamedev');
    btn3dArt = document.getElementById('btn-3dart');

    showcaseOverview = document.getElementById('showcase-display-overview');
    showcaseFullStack = document.getElementById('showcase-display-fullstack');
    showcaseGameDev = document.getElementById('showcase-display-gamedev');
    showcase3dArt = document.getElementById('showcase-display-3dart');
    showcaseContentContainer = document.getElementById('showcase-display-content-container');
};

// TODO: animate collapsing/expanding smoothly
function showContent(section) {
    section == 'overview' ?
        btnOverview.classList.add('showcase-display-tab-button-active') :
        btnOverview.classList.remove('showcase-display-tab-button-active');
    section == 'overview' ?
        showcaseOverview.classList.remove('hidden') :
        showcaseOverview.classList.add('hidden');

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

function deobfuscate() {
    let emails = document.getElementsByClassName('email');
    for (let email of emails) {
        email.href = 'mailto:';
        email.href += emailSlices[1];
        email.href += emailSlices[4];
        email.href += emailSlices[0];
        email.href += emailSlices[3];
        email.href += emailSlices[2];
    }
}
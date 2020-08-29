// buttons
var btnFullStack;
var btnGameDev;
var btn3dArt;

// showcase content containers
var showcaseFullStack;
var showcaseGameDev;
var showcase3dArt;
var showcaseContentContainer;

// showcase state
// can be values 'fullstack', 'gamedev', or '3dart'
var showcaseState = 'fullstack';

window.onload = () => {
    btnFullStack = document.getElementById('btn-fullstack');
    btnGameDev = document.getElementById('btn-gamedev');
    btn3dArt = document.getElementById('btn-3dart');

    showcaseFullStack = document.getElementById('showcase-display-fullstack');
    showcaseGameDev = document.getElementById('showcase-display-gamedev');
    showcase3dArt = document.getElementById('showcase-display-3dart');
    showcaseContentContainer = document.getElementById('showcase-display-content-container');

    showContent(showcaseState);
};

// TODO: animate collapsing/expanding smoothly
function showContent(section) {
    switch (section) {
        case 'fullstack':
            btnFullStack.classList.add('showcase-display-tab-button-active');
            btnGameDev.classList.remove('showcase-display-tab-button-active');
            btn3dArt.classList.remove('showcase-display-tab-button-active');

            showcaseFullStack.classList.remove('hidden');
            showcaseGameDev.classList.add('hidden');
            showcase3dArt.classList.add('hidden');
            break;

        case 'gamedev':
            btnFullStack.classList.remove('showcase-display-tab-button-active');
            btnGameDev.classList.add('showcase-display-tab-button-active');
            btn3dArt.classList.remove('showcase-display-tab-button-active');

            showcaseFullStack.classList.add('hidden');
            showcaseGameDev.classList.remove('hidden');
            showcase3dArt.classList.add('hidden');
            break;

        case '3dart':
            btnFullStack.classList.remove('showcase-display-tab-button-active');
            btnGameDev.classList.remove('showcase-display-tab-button-active');
            btn3dArt.classList.add('showcase-display-tab-button-active');

            showcaseFullStack.classList.add('hidden');
            showcaseGameDev.classList.add('hidden');
            showcase3dArt.classList.remove('hidden');
            break;

        default:
            console.log('uh oh, this shouldn\'nt have happened. unhandled show content');
            break;
    }
}
import './css/scrollTop.scss'

export const getToTop = () => {
    window.scrollTo({top:0,left:0,behavior : 'instant'})
}

function ScrollToTop(props) {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        let mybutton = document.querySelector(`#scrollBtn`)
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = 'flex'
            mybutton.style.transition = '0.2s'
        } else {
            mybutton.style.display = 'none'
            mybutton.style.transition = '0.2s'
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <>
            <button id={`scrollBtn`} onClick={() => topFunction()} title="Go to top"></button>
        </>
    )
}

export default ScrollToTop
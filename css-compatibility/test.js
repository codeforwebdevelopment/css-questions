if('opacity' in document.body.style)
    {
    // do stuff
    }


    
// declare var Modernizr;

if (Modernizr.canvas) {
// let's draw some shapes!
} else {
// no native canvas support available :(
}

// Another way is to use new API CSS.supports. It is supported in most browsers except IE.
// CSS.supports(property, value)
console.log(CSS.supports("text-decoration-style", "blink"),
CSS.supports("display", "flex"),
CSS.supports('--foo', 'red'),
CSS.supports('(--foo: red)'),
// CSS.supports(DOMstring)
CSS.supports("( transform-origin: 5% 5% )"),
CSS.supports("( transform-style: preserve ) or ( -moz-transform-style: preserve ) or " + "( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve )")
)
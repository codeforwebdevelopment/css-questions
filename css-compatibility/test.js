if('opacity' in document.body.style)
    {
    // do stuff
    }


if (Modernizr.canvas) {

console.log("let's draw some shapes!");
} else {
    console.log("no native canvas support available :(");
}

if (Modernizr.localstorage) {
    // Code for localStorage
    console.log('LocalStorage is supported!');
  } else {
    // Fallback code if localStorage isn't supported
    console.log('LocalStorage is not supported!');
  }
  
  // You can check other features as well
if (Modernizr.flexbox) {
    console.log('This browser supports Flexbox');
  } else {
    console.log('This browser does not support Flexbox');
  }
  
  // Example with CSS Grid detection
  if (Modernizr.cssgrid) {
    console.log('This browser supports CSS Grid');
  } else {
    console.log('This browser does not support CSS Grid');
  }

  if (Modernizr.geolocation) {
    // Browser supports geolocation API
  } else {
    // Browser does not support geolocation
  }

  if (!Modernizr.queryselector) {
    var script = document.createElement('script');
    script.src = 'path/to/querySelectorAll-polyfill.js';
    document.head.appendChild(script);
  }

  
// Another way is to use new API CSS.supports. It is supported in most browsers except IE.
// CSS.supports(property, value)
console.log(CSS.supports("text-decoration-style", "blink"),
CSS.supports("display", "flex"),
CSS.supports('--foo', 'red'),
CSS.supports('(--foo: red)'),
// CSS.supports(DOMstring)
CSS.supports("( transform-origin: 5% 5% )"),
CSS.supports("( transform-style: preserve ) or ( -moz-transform-style: preserve ) or " + "( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve )"))
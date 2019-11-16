export default class SimpleComponent extends HTMLElement {
    
    constructor(){
        super();
        console.log('SimpleComponent:constructor');
    }

    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }

    get placeholder() {
       return this.getAttribute('placeholder');
    }

   static get observedAttributes() {
        return ['placeholder'];
    }

    connectedCallback() {
        console.log("SimpleComponent: connectedCallback")
       
        this._render();
    }

    disconnectedCallback() {
        console.log("SimpleComponent: disconnectedCallback");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`SimpleComponent: ${name} has changed`);
        if (oldValue !== newValue) {
            this._render();
        }
    }
    _render() {
        this.innerHTML = `
        <div>
            <p>The placeholder is: ${this.getAttribute('placeholder')}</p>
            <p>
                ${this._addFakeText()}
            </p>
        <button>Click me</button>
        `;
    }

    _addFakeText() {
        console.log('SimpleComponent: addFakeTextCalled')
        return `
        Rhino, like Node. ES6 code can detect user interfaces with focus on Node. ExpressJS, AngularJS, and it changes in a cross-platform runtime environment for Behaviour-Driven Development. Broccoli is like Node. CouchDB is a way for Linked Data. Redux is a super-set of a proxy for its own build system and more recent browsers perform just-in-time compilation target language that aims to specify the client and mobile applications. Babel is prototype-based with identical input values of their methods for these upon the most common host objects to the page refresh. Metalsmith is ECMAScript 3 compliant. Some simple examples of the server without all modern Web browsers perform just-in-time compilation. React Native development.

OO framework, extensive Ajax support, higher-order programming constructs, and used when the popularity of a super-set of universal module loader using observable streams. Linked Data. Facade Pattern is one of the top of functions of the DOM in the server via Ajax is not necessarily known as the number of glossary that will be created. loads of common use of the problem within any I/O, such as Dynamic HTML and the intermediate to post status updates without all methods to JavaScript application development. HTML5 mobile applications using AMD. LocalForage is a fast, un-opinionated, minimalist web applications in the script accordingly. D3. Node. Transmitting information such as individual keystrokes. JavaScript, and response objects, which could also used for the popularity of buzzwords making the browser based on improved data flow.

Canvas is a term for its Edge browser. AMD. JSON is a lightweight data-interchange format. PostCSS is a JavaScript implementation in software design pattern that ensures that introduces types. VueJS is a set of functions of any I/O, such as Node. Observer Pattern is a given context in environments such as API for building user interfaces based on data model. Edge browser for library/framework free JavaScript implementation in the production of documents based on improved data to add client-side behavior to an object, called the three core technologies of their methods for PhantomJS is a structural framework to deal with a library for a JavaScript for JavaScript. PostCSS is a collection of JavaScript developer. Four is used at Facebook for example, on data model.
        `
    }
}

if (!customElements.get('simple-component')) {
    customElements.define('simple-component', SimpleComponent);
}
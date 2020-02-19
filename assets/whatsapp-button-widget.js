class LandbotWhatsAppBtn {

    constructor({ dialcode, phone, text}) {
        this.dialcode = dialcode
        this.phone = phone
        this.text = text
        this.segmentLoaded = false
        this.loadSegment()
    } 

    loadSegment() {
      var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
        analytics.load("sSnmeJKKUKWb3nCNyHTINdMkD7niGFwk");
        analytics.page();
        this.segmentLoaded = true;
      }
    }

    triggerSegment() {
        if (this.segmentLoaded) {
            analytics.track('Growth Tools > WhatsappButton clicked');
        }
    }
    
    renderButton() {
        let fontAwesome = document.createElement('script')
        fontAwesome.setAttribute('src', 'https://kit.fontawesome.com/2640aa91b4.js')
        document.body.appendChild(fontAwesome)

        let roboto = document.createElement('link')
        roboto.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto&display=swap')
        roboto.setAttribute('rel', 'stylesheet')
        document.body.appendChild(roboto)

        let styles = document.createElement('link')
        styles.setAttribute('href', 'https://static.landbot.io/whatsapp-widget/whatsapp-button-widget.css')
        styles.setAttribute('rel', 'stylesheet')
        styles.setAttribute('type', 'text/css')
        document.body.appendChild(styles)

        let root = document.createElement('div')
        root.className = 'WhatsAppButton__root'
        root.setAttribute('style', 'position: fixed; bottom: 10px; right: 20px;')
        document.body.appendChild(root);

            let button_root = document.createElement('a')
            button_root.setAttribute('href', `https://api.whatsapp.com/send?phone=${this.dialcode}${this.phone}&text=${this.text}`)
            button_root.setAttribute('style', 'text-decoration: none')
            button_root.setAttribute('target', '_blank')
            root.appendChild(button_root)

                let button = document.createElement('button')
                button.setAttribute('class', 'landbot-whatsapp__button')
                button.addEventListener('click', () => this.triggerSegment())
                button_root.appendChild(button)

                    let whatsappIcon = document.createElement('i')
                    whatsappIcon.setAttribute('class', 'fab fa-whatsapp')
                    whatsappIcon.setAttribute('style', 'font-size: 24px; margin-right: 5px')
                    button.appendChild(whatsappIcon)

                    let button_text = document.createElement('p')
                    button_text.setAttribute('style', 'margin: 0')
                    button_text.innerText = 'Send via WhatsApp'
                    button.appendChild(button_text)
            
            let poweredByButton = document.createElement('a')
            poweredByButton.setAttribute('href', 'https://landbot.io/whatsapp/?utm_source=WhatsAppButton')
            poweredByButton.setAttribute('class', 'whatsapp__poweredBy')
            poweredByButton.setAttribute('target', '_blank')
            poweredByButton.innerText = 'WhatsApp ⚡️ by Landbot.io'
            root.appendChild(poweredByButton)
    
    }
}
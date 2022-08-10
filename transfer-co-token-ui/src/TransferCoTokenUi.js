import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './TransferCoTokenUi-styles.js';
import '@bbva-web-components/bbva-web-header-multistep';
import '@bbva-web-components/bbva-web-button-multistep-back';
import '@bbva-web-components/bbva-text';
import '@bbva-web-components/bbva-web-button-default';
import '@bbva-web-components/bbva-web-panel-token';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<transfer-co-token-ui></transfer-co-token-ui>
```

##styling-doc

@customElement transfer-co-token-ui
*/
export class TransferCoTokenUi extends LitElement {
  static get is() {
    return 'transfer-co-token-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('transfer-co-token-ui-shared-styles')
    ];
  }

  // Define a template
 

  header() {
    return html`
    <div class="header">
    <div class="zone">
    <bbva-web-header-multistep info="" fit-to-grid="" block-title="Transfiere y recibe" process-title="Process title"></bbva-web-header-multistep>
    <bbva-web-button-multistep-back>Anterior</bbva-web-button-multistep-back>
    </div>
    </div>
    `;
  }
  descriptionTK(){
    return html`
      <div class="description1">
      <bbva-text text="Por seguridad, debes 
      habilitar tu Token BBVA" 
      size="3XL"></bbva-text>
      </div>
      <div class="description2">
      <bbva-text text="Para continuar con tus operaciones es necesario
      que habilites tu token digital en la App BBVA. 
      Ahí recibirás los códigos de seguridad para 
      que tus operaciones puedan realizarse con éxito." size="6XL"></bbva-text>
      </div>
      <div class="button-habilited">
      <bbva-web-button-default class="max">Ya habilité mi BBVA móvil
      </bbva-web-button-default>
    </div>  `;
  }
   ilustrationSection(){
    return html`
      <div class="ilustration">
      <p>Habilita tu BBVA móvil y genera tu código ingresando a la aplicacion:
      </p>
      <p>Menú > Token > 
      Generar Token BBVA net
      </p>
      </div>
    `; 
   }
   render() {
    return html`
     ${this.descriptionTK()}
     ${this.ilustrationSection()}
    `;
  }
}

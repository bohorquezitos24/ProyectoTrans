import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CoMenuOptionsTransfer-styles.js';
import '@bbva-web-components/bbva-web-header-multistep';
import '@bbva-web-components/bbva-web-button-multistep-back';
import '@bbva-web-components/bbva-text';
import '@bbva-web-components/bbva-foundations-icons';


/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<co-menu-options-transfer></co-menu-options-transfer>
```

##styling-doc

@customElement co-menu-options-transfer
*/
export class CoMenuOptionsTransfer extends LitElement {
  static get is() {
    return 'co-menu-options-transfer';
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
      getComponentSharedStyles('co-menu-options-transfer-shared-styles')
    ];
  }

  // Define a template
  header(){
    return html`
    <div class="header">
    <div class="zone">
    <bbva-web-header-multistep info="" fit-to-grid="" block-title="Transfiere y recibe" process-title="Process title"></bbva-web-header-multistep>
    <bbva-web-button-multistep-back>Anterior</bbva-web-button-multistep-back>
    </div>
    </div>
    `;
  }
  containerOptions() {
    return html`
    <div class="textContainer">
    <bbva-text text="¿Que deseas hacer hoy?" 
    size="6XL"></bbva-text>
    <div class="text">
    <bbva-text text="Transferir a:" 
    size="6XL"></bbva-text>
    </div>
    </div>
    <div class="buttonPhone">
    <bbva-button-group-item value="phone">Celulares</bbva-button-group-item>
    <bbva-web-button-group-item icon="bbva:mobile">Label</bbva-web-button-group-item>
    <bbva-button-group-item value="accounts">Cuentas</bbva-button-group-item>
    <bbva-web-button-group-item icon="bbva:bank">Label</bbva-web-button-group-item>
    <bbva-button-group-item value="myAccounts">Mis cuentas BBVA</bbva-button-group-item>
    <bbva-web-button-group-item icon="bbva:portfolio">Label</bbva-web-button-group-item>
    <bbva-button-group-item value="recivedCash">Recibir dinero</bbva-button-group-item>
    <bbva-web-button-group-item icon="bbva:receivemoneydollar">Label</bbva-web-button-group-item>
    <bbva-button-group-item value="sendCash">Enviar dinero</bbva-button-group-item>
    <bbva-web-button-group-item icon="bbva:sendmoneydollar">Label</bbva-web-button-group-item>
    </div>
    `;
  }
  render() {
    return html`
   ${this.containerOptions()}
   ${this.header()}
    `;
  }
}

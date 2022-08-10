import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CoListaccounts-styles.js';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-web-header-multistep-type-heading';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-web-header-category';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-web-header-multistep';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-web-divider';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-notification-help';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-web-button-multistep-back';


/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<co-listAccounts></co-listAccounts>
```

##styling-doc

@customElement co-listAccounts
*/
export class CoListaccounts extends LitElement {
  static get is() {
    return 'co-listAccounts';
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
      getComponentSharedStyles('co-listAccounts-shared-styles'),

    ];
  }

  // Define a template
  listOptionsAccounts(){
    return html`
    <div class="header">
    <div class="zone">
      <bbva-web-header-multistep info="" block-title="Block title" process-title="Process title" variant="closing"></bbva-web-header-multistep>
      <bbva-web-button-multistep-back>Anterior</bbva-web-button-multistep-back>
    </div>
    </div>
    <bbva-web-header-multistep-type-heading 
    locales-host=".." 
    current="1" max="5" 
    step-title="Cuenta de origen" 
    description="Selecciona la cuenta desde donde quieres transferir el dinero">
    </bbva-web-header-multistep-type-heading>
    <div>
    <bbva-web-header-category link="Ver mas">
      <bbva-web-date slot="text" date="CUENTAS"></bbva-web-date>
    </bbva-web-header-category>
    </div>
    <div class="listAccounts">
    <bbva-list-option disabled-tabindex="" 
    type-radio-button="" name="day" value="yesterday"
     content-title="Cuenta de ahorros" 
     title-amount="300.000"
     header-description="Saldo disponible"
     account="1234" 
     account-description="account description">
    </bbva-list-option>
    </div>
    
    <div class="gmf">
    <bbva-notification-help
    accessibility-label-icon="Info"
    icon=${bbvaInfo()}
    text="Exenta de GMF"
    ></bbva-notification-help>
    </div>

    <div class="divider">
    <bbva-web-divider></bbva-web-divider>
    <bbva-web-button-default>Continuar</bbva-web-button-default>
    </div>
    
      `;
  }  
}


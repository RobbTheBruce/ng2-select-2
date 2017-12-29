# ng2-select-2

Componente angular 2 customizado baseado no select2.

## Instalação

```
npm install ng2-select-2
```

## Implementação

Importe a diretiva dentro do módulo que deseja fazer uso:

```
import { SelectCustomModule } from 'ng2-select-2';
 
@NgModule({
  imports: [
    ....,
    SelectCustomModule
  ],
  ...
})
```

Exemplo de como deve ser usado no projeto.

``` 
<select-custom [dados]="exampleData" [placeholder]="'selecione aqui'"></select-custom>
```

Formato do json para o campo [dados]:
``` 
[
  {label:'234',value:'1232'}
]
``` 

Se for util pra vc, ajude doando no link abaixo:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=772EPN8HX9EKQ)

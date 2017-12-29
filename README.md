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
<select-custom [dados]="exampleData"></select-custom>
```

```html
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="772EPN8HX9EKQ">
<input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!">
<img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
</form>
```

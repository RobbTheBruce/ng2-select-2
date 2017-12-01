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

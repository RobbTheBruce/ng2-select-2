import { Component, Input, Output, OnChanges, SimpleChange, ElementRef, trigger, transition, style, animate, state, forwardRef, SimpleChanges, HostListener, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var $: any;

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectCustomComponent),
    multi: true
};

@Component({
    selector: "select-custom",
    templateUrl: "./select.custom.component.html",
    styleUrls: ["./select.custom.component.css"],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectCustomComponent implements ControlValueAccessor, OnChanges {

    @Input() dados: any;
    @Input() placeholder: string;
    @Input() search: any;
    @Output() selected: EventEmitter<any> = new EventEmitter();
    groups: any = [];
    options: any = [];
    private innerValue: any = '';
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    constructor(private eRef: ElementRef) {
        this.options.open = false;
        this.options.ativa = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (typeof changes.dados !== "undefined") {
            let dados: any = changes.dados.currentValue;
            let groups: any = [];
            if (dados.length > 0) {
                this.options.ativa = false;

                this.options.ativa = true;
            }
        }
    }

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }


    selecionaDado(dado,event) {
        this.value = dado.value;
        this.writeValue(dado.value);
        this.options.open = false;
        this.selected.emit(event);
    }

    getLabel() {

        if (typeof this.innerValue !== "undefined" && this.innerValue != '' && this.innerValue != null && this.options.ativa == true) {
            let dados: any = (this.dados.filter(x => x.value == this.innerValue));
            return dados[0].label;
        } else {
            return this.placeholder;
        }
    }

    @HostListener('document:click', ['$event'])
    @HostListener('document:touchstart', ['$event'])
    handleOutsideClick(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.options.open = false;
        }
    }

}
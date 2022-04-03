/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SIZES, THEMES } from "./utils/types";
import { BUTTON_TYPES } from "./components/button/index";
import { Option } from "./components/select/index";
export namespace Components {
    interface PfButton {
        "block": boolean;
        "class": string;
        "disabled": boolean;
        "loading": boolean;
        "size": SIZES;
        "theme": THEMES;
        "type": BUTTON_TYPES;
    }
    interface PfSelect {
        "block": boolean;
        "disabled": boolean;
        "label": string;
        "options": Array<Option>;
        "size": SIZES;
        "theme": THEMES;
        "value": string;
    }
}
declare global {
    interface HTMLPfButtonElement extends Components.PfButton, HTMLStencilElement {
    }
    var HTMLPfButtonElement: {
        prototype: HTMLPfButtonElement;
        new (): HTMLPfButtonElement;
    };
    interface HTMLPfSelectElement extends Components.PfSelect, HTMLStencilElement {
    }
    var HTMLPfSelectElement: {
        prototype: HTMLPfSelectElement;
        new (): HTMLPfSelectElement;
    };
    interface HTMLElementTagNameMap {
        "pf-button": HTMLPfButtonElement;
        "pf-select": HTMLPfSelectElement;
    }
}
declare namespace LocalJSX {
    interface PfButton {
        "block"?: boolean;
        "class"?: string;
        "disabled"?: boolean;
        "loading"?: boolean;
        "size"?: SIZES;
        "theme"?: THEMES;
        "type"?: BUTTON_TYPES;
    }
    interface PfSelect {
        "block"?: boolean;
        "disabled"?: boolean;
        "label"?: string;
        "onChanged"?: (event: CustomEvent<any>) => void;
        "options"?: Array<Option>;
        "size"?: SIZES;
        "theme"?: THEMES;
        "value"?: string;
    }
    interface IntrinsicElements {
        "pf-button": PfButton;
        "pf-select": PfSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pf-button": LocalJSX.PfButton & JSXBase.HTMLAttributes<HTMLPfButtonElement>;
            "pf-select": LocalJSX.PfSelect & JSXBase.HTMLAttributes<HTMLPfSelectElement>;
        }
    }
}

import { Component, h, Element, Prop, Host, State, Event, EventEmitter, Watch } from '@stencil/core';
import { MODES, SIZES, THEMES } from '../../utils/types';
import { getGlobalStyles } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';

export type BUTTON_TYPES = 'submit' | 'button' | 'reset';
export type Option = {
  value: string;
  label: string;
};

@Component({
  tag: 'pf-select',
  styleUrls: {
    bs4: 'index.scss',
    bs5: 'index.scss',
  },
  shadow: true,
})
export class Select {
  @State() ID: string;
  @Element() el: HTMLElement;
  @Prop() theme: THEMES = 'primary';
  @Prop() size: SIZES = 'default';
  @Prop() label: string = null;
  @Prop() type: string;
  @Prop({ reflect: true }) mode: MODES;
  @Prop() disabled: boolean = false;
  @Prop() block: boolean = false;
  @Prop({ reflect: true, mutable: true }) options: Array<Option> = [];
  @Prop({ reflect: true, mutable: true }) value: string;
  @Event({ eventName: 'changed', bubbles: true, cancelable: true, composed: true }) onChange: EventEmitter<any>;

  @Watch('options')
  watchOptions(newValue, _oldValue) {
    if (!newValue.find(option => option.value == null || option.value == null)) {
      this.options = [{ label: 'None', value: undefined }, ...newValue];
    }
  }

  @Watch('value')
  watchValue(newValue, _oldValue) {
    if (!newValue) {
      this.value = undefined;
    }
  }

  handleOnChange(e) {
    this.value = e.target.value;
    this.onChange.emit(e);
    // this.el.dispatchEvent(new window.Event('changed'));
  }

  componentWillLoad() {
    this.el.shadowRoot.appendChild(getGlobalStyles());
    this.ID = uuidv4();
  }

  render() {
    return (
      <Host style={{ width: this.block ? '100%' : 'inherit' }} disabled={this.disabled}>
        <div class={{ 'form-group': true }}>
          <label
            htmlFor={this.ID}
            class={{
              'select-label': this.mode === 'bs5',
            }}
            style={{ fontWeight: '500' }}
          >
            {this.label}
          </label>
          <select
            id={this.ID}
            name={this.ID}
            class={{
              'form-select': this.mode === 'bs5',
              'form-select-sm': this.mode === 'bs5' && this.size === 'small',
              'form-select-lg': this.mode === 'bs5' && this.size === 'large',
              'form-control': this.mode === 'bs4',
              'form-control-sm': this.mode === 'bs4' && this.size === 'small',
              'form-control-lg': this.mode === 'bs4' && this.size === 'large',
              'custom-select': this.type === 'custom',
            }}
            aria-label=".form-select example"
            onChange={this.handleOnChange.bind(this)}
            disabled={this.disabled}
          >
            {this.options.map((option: Option) => {
              return (
                <option selected={this.value === option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </Host>
    );
  }
}

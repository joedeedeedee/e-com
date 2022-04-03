import { Component, h, Element, Prop, Host, Event, EventEmitter, State } from '@stencil/core';
import { SIZES, THEMES } from '../../utils/types';
import { getGlobalStyles } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';

export type BUTTON_TYPES = 'submit' | 'button' | 'reset';
export type Option = {
  value: string;
  label: string;
};

@Component({
  tag: 'pf-select',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Select {
  @State() ID: string;
  @Element() el: HTMLElement;
  @Prop() theme: THEMES = 'primary';
  @Prop() size: SIZES = 'default';
  @Prop() label: string = null;
  @Prop() disabled: boolean = false;
  @Prop() block: boolean = false;
  @Prop({ reflect: true, mutable: true }) options: Array<Option> = [];
  @Prop({ reflect: true, mutable: true }) value: string;
  @Event() change: EventEmitter<Option>;

  handleOnChange(e) {
    this.change.emit(this.options.find((option: Option) => option.value === e.target.value));
  }

  componentWillLoad() {
    this.el.shadowRoot.appendChild(getGlobalStyles());
    this.ID = uuidv4();
  }

  render() {
    return (
      <Host style={{ width: this.block ? '100%' : 'inherit' }}>
        <div class={{ 'form-group': true }}>
          <label htmlFor={this.ID} class="select-label" style={{ fontWeight: '500' }}>
            {this.label}
          </label>
          <select
            id={this.ID}
            name={this.ID}
            class={{ 'form-select': true, 'form-select-sm': this.size === 'small', 'form-select-lg': this.size === 'large' }}
            aria-label=".form-select example"
            onChange={this.handleOnChange.bind(this)}
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

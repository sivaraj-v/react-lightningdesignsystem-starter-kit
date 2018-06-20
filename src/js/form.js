/* eslint-disable no-console, react/prop-types */
import React from "react";
import Combobox from "@salesforce/design-system-react/components/combobox";
import Icon from "@salesforce/design-system-react/components/icon";
import escapeRegExp from "lodash.escaperegexp";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import Button from "@salesforce/design-system-react/components/button";

const accounts = [
  {
    id: "1",
    label: "AY",
    subTitle: "Account • San Francisco",
    type: "account"
  },
  {
    id: "2",
    label: "EXC",
    subTitle: "Account • San Francisco",
    type: "account"
  }
];
const currency = [
  {
    id: "1",
    label: "Norway",
    subTitle: "Account • San Francisco",
    type: "account"
  }
];



class form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			program: '',
			currency: ''
    };
    // this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }
  handleButtonClicked(event) {
    console.log(this.state);
  }
  render() {
    {
      console.log(this.state);
    }
    return (
      <div className="slds-grid slds-template_bottom-magnet">
        <IconSettings iconPath="/css/icons">
          <div className="slds-col slds-size_4-of-12">
            <div className="slds-form-element">
              <div className="slds-text-heading_small slds-p-around_xx-small">
                React Ligthing demo
              </div>
              <div class="slds-col slds-grid slds-size_1-of-1">
                <div class="slds-col slds-size_1-of-2 slds-p-around_xx-small">
                  <Combobox
                    id="combobox-unique-id"
                    events={{
                      onSelect: (event, data) => {
                        if (this.props.action) {
                          this.props.action("onSelect")(
                            event,
                            ...Object.keys(data).map(key => data[key])
                          );
                        } else if (console) {
                          console.log("onSelect", event, data);
                        }
                        this.setState({
                          ...this.state,
                          program: data.selection[0].label
                        });
                      }
                    }}
                    labels={{
                      label: "Program",
                      placeholder: "Select program"
                    }}
                    options={accounts}
                    selection={this.state.program}
                    value={this.state.inputValue}
                    variant="readonly"
                    required
                  />
                </div>
                <div class="slds-col slds-size_1-of-2 slds-p-around_xx-small">
                  <Combobox
                    id="combobox-unique-id"
                    events={{
                      onSelect: (event, data) => {
                        if (this.props.action) {
                          this.props.action("onSelect")(
                            event,
                            ...Object.keys(data).map(key => data[key])
                          );
                        } else if (console) {
                          console.log("onSelect", event, data);
                        }
                        this.setState({
                          ...this.state,
                          currency: data.selection[0].label
                        });
                      }
                    }}
                    labels={{
                      label: "Currency",
                      placeholder: "Select currency"
                    }}
                    options={currency}
                    selection={this.state.currency}
                    value={this.state.inputValue}
                    variant="readonly"
                    required
                  />
                </div>
              </div>

              <Button
                id="tuesday-alt"
                label="Submit and go to next tab"
                onClick={e => this.handleButtonClicked(e)}
              />
            </div>
          </div>
        </IconSettings>
      </div>
    );
  }
}

form.displayName = "ComboboxExample";

export default form;

/* eslint-disable no-console, react/prop-types */
import React from "react";
import Combobox from "@salesforce/design-system-react/components/combobox";
import Icon from "@salesforce/design-system-react/components/icon";
import comboboxFilterAndLimit from "@salesforce/design-system-react/components/combobox/filter";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import Button from "@salesforce/design-system-react/components/button";

const accounts = [
  {
    id: "1",
    label: "AY",
    subTitle: "Account • San Francisco",
    type: "account",
  },
  {
    id: "2",
    label: "EXC",
    subTitle: "Account • San Francisco",
    type: "account",
  },
];
const currency = [
  {
    id: "1",
    label: "Norway",
    subTitle: "Account • San Francisco",
    type: "account",
  },
];
const brochureYear = [
  {
    id: "1",
    label: "2017",
    subTitle: "Account • San Francisco",
    type: "account",
  },
  {
    id: "2",
    label: "2018",
    subTitle: "Account • San Francisco",
    type: "account",
  },
];
const brochureSeason = [
  {
    id: "1",
    label: "Norway",
    subTitle: "Account • San Francisco",
    type: "account",
  },
  {
    id: "2",
    label: "Other",
    subTitle: "Account • San Francisco",
    type: "account",
  },
];
const destination = [
  {
    id: "1",
    label: "London",
    subTitle: "Destination, London",
    type: "account",
  },
  {
    id: "2",
    label: "UK",
    subTitle: "Destination, UK",
    type: "account",
  },
];
const course = [
  {
    id: "1",
    label: "Course Details 1",
    subTitle: "Destination, London",
    type: "account",
  },
  {
    id: "2",
    label: "Course Details 2",
    subTitle: "Destination, UK",
    type: "account",
  },
];
const accountsWithIconDestination = destination.map(elem =>
  Object.assign(elem, {
    icon: <Icon assistiveText="Account" category="standard" name={elem.type} />,
  }),
);
const accountsWithIconCourse = course.map(elem =>
  Object.assign(elem, {
    icon: <Icon assistiveText="Account" category="standard" name={elem.type} />,
  }),
);

class form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      program: [],
      currency: [],
			destination: [],
			inputValueDestination: [],
			course: [],
			inputValueCourse: [],
			year:[],
			season:[]
    };
  }
  handleButtonClicked(event) {
    console.log(this.state);
  }
  render() {
    return (
      <div className="slds-grid slds-template_bottom-magnet">
        <IconSettings iconPath="/css/icons">
          <div className="slds-col slds-size_4-of-12">
            <div className="slds-form-element">
              <div className="slds-text-heading_small slds-p-around_xx-small">React Ligthing demo</div>
              <div class="slds-col slds-grid slds-size_1-of-1">
                <div class="slds-col slds-size_1-of-2 slds-p-around_xx-small">
                  <Combobox
                    id="combobox-unique-id"
                    events={{
                      onSelect: (event, data) => {
                        if (this.props.action) {
                          this.props.action("onSelect")(event, ...Object.keys(data).map(key => data[key]));
                        } else if (console) {
                          //console.log("onSelect", event, data);
                        }
                        this.setState({
                          ...this.state,
                          program: data.selection,
                        });
                      },
                    }}
                    labels={{
                      label: "Program",
                      placeholder: "Select program",
                    }}
                    options={accounts}
                    selection={this.state.program}
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
                          this.props.action("onSelect")(event, ...Object.keys(data).map(key => data[key]));
                        } else if (console) {
                         // console.log("onSelect", event, data);
                        }
                        this.setState({
                          ...this.state,
                          currency: data.selection,
                        });
                      },
                    }}
                    labels={{
                      label: "Currency",
                      placeholder: "Select currency",
                    }}
                    options={currency}
                    selection={this.state.currency}
                    variant="readonly"
                    required
                  />
                </div>
              </div>
							<div class="slds-col slds-grid slds-size_1-of-1">
                <div class="slds-col slds-size_1-of-2 slds-p-around_xx-small">
                  <Combobox
                    id="combobox-unique-id"
                    events={{
                      onSelect: (event, data) => {
                        if (this.props.action) {
                          this.props.action("onSelect")(event, ...Object.keys(data).map(key => data[key]));
                        } else if (console) {
                          //console.log("onSelect", event, data);
                        }
                        this.setState({
                          ...this.state,
                          year: data.selection,
                        });
                      },
                    }}
                    labels={{
                      label: "Brochure Year",
                      placeholder: "Select year",
                    }}
                    options={brochureYear}
                    selection={this.state.year}
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
                          this.props.action("onSelect")(event, ...Object.keys(data).map(key => data[key]));
                        } else if (console) {
                         // console.log("onSelect", event, data);
                        }
                        this.setState({
                          ...this.state,
                          season: data.selection,
                        });
                      },
                    }}
                    labels={{
                      label: "Brochure Season",
                      placeholder: "Select brochure season",
                    }}
                    options={brochureSeason}
                    selection={this.state.season}
                    variant="readonly"
                    required
                  />
                </div>
              </div>
              <div class="slds-col slds-grid slds-size_1-of-1">
                <div class="slds-col slds-size_1-of-2 slds-p-around_xx-small">
                  <Combobox
										id="destination"
										className="destination"
                    events={{
                      onChange: (event, { value }) => {
                        if (this.props.action) {
                          this.props.action("onChange")(event, value);
                        } else if (console) {
                         // console.log("onChangeDestination", event, value);
                        }
                        this.setState({ inputValueDestination: value });
                      },
                      onRequestRemoveSelectedOption: (event, data) => {
                        this.setState({
                          inputValueDestination: "",
                          destination: data.selection,
                        });
                      },

                      onSelect: (event, data) => {
                        if (this.props.action) {
                          this.props.action("onSelect")(event, ...Object.keys(data).map(key => data[key]));
                        } else if (console) {
                          // console.log("onSelectDestination", event, data);
                        }
                        this.setState({
                          inputValueDestination: "",
                          destination: data.selection,
                        });
                      },
                    }}
                    labels={{
                      label: "Destination",
                      placeholder: "Search your destination",
                    }}
                    required
                    options={comboboxFilterAndLimit({
                      inputValue: this.state.inputValueDestination,
                      options: accountsWithIconDestination,
                      selection: this.state.destination,
                    })}
                    selection={this.state.destination}
                    value={this.state.selectedOption ? this.state.selectedOption.label : this.state.inputValueDestination}
                    variant="inline-listbox"
                  />
                </div>
                <div class="slds-col slds-size_1-of-2 slds-p-around_xx-small">
                  <Combobox
										id="course"
										target = "#target"
                    events={{
                      onChange: (event, { value }) => {
                        if (this.props.action) {
                          this.props.action("onChange")(event, value);
                        } else if (console) {
                         // console.log("onChangeCourse", event);
                        }
                        this.setState({ inputValueCourse: value });
                      },
                      onRequestRemoveSelectedOption: (event, data) => {
                        this.setState({
                          inputValueCourse: "",
                          course: data.selection,
                        });
                      },

                      onSelect: (event, data) => {
                        if (this.props.action) {
                          this.props.action("onSelect")(event, ...Object.keys(data).map(key => data[key]));
                        } else if (console) {
                         // console.log("onSelectCourse", event, data);
                        }
                        this.setState({
                          inputValueCourse: "",
                          course: data.selection,
                        });
                      },
                    }}
                    labels={{
                      label: "Course",
                      placeholder: "Select course",
                    }}
                    required
                    options={comboboxFilterAndLimit({
                      inputValue: this.state.inputValueCourse,
                      options: accountsWithIconCourse,
                      selection: this.state.course,
                    })}
                    selection={this.state.course}
                    value={this.state.selectedOption ? this.state.selectedOption.label : this.state.inputValueCourse}
                    variant="inline-listbox"
                  />
                </div>
              </div>

              <Button id="tuesday-alt" label="Submit and go to next tab" onClick={e => this.handleButtonClicked(e)} />
            </div>
          </div>
        </IconSettings>
      </div>
    );
  }
}

export default form;

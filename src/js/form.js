import React from 'react';
import Alert from '@salesforce/design-system-react/components/alert';
import AlertContainer from '@salesforce/design-system-react/components/alert/container';
import Icon from '@salesforce/design-system-react/components/icon';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
class form extends React.Component {
  render() {
    return (
      <IconSettings iconPath="/assets/icons">
				<AlertContainer>
					<Alert
						icon={<Icon category="utility" name="user" />}
						labels={{
							heading: 'Logged in as John Smith (johnsmith@acme.com).',
							headingLink: 'Log out',
						}}
						onClickHeadingLink={() => {
							console.log('Link clicked.');
						}}
					/>
				</AlertContainer>
			</IconSettings>
      );
  }
}

export default form;
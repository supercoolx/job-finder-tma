import React from 'react';
import { List, Cell, Section } from '@telegram-apps/telegram-ui';

const HomeScreen = () => (
  <div style={{ padding: '20px' }}>
    <h2>Home Screen</h2>
    <List>
    <Section header="Section 1" footer="End of Section">

      <Cell>Welcome to the Home Screen!</Cell>
      <Cell>Navigate using the menu above.</Cell>
      </Section>

    </List>
  </div>
);

export default HomeScreen;

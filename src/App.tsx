import React from 'react';
import styled from 'styled-components';
import ControlPanel from './components/ControlPanel';

const ColorPalette = styled.div`
    --palette-alto: #dddddd;
    --palette-big-stone: #17223b;
    --palette-cloud-burst: #263859;
    --palette-slate-gray: #6b778d;
    --palette-white: #ffffff;
    --palette-malibu: #8bd2f9;
`;
const ColorFunction = styled.div`
    --x-clr-primary: var(--palette-big-stone);
    --x-clr-secondary: var(--palette-cloud-burst);
    --x-clr-font-default: var(--palette-alto);
    --x-clr-font-inactive: var(--palette-slate-gray);
    --x-clr-font-focus: var(--palette-white);
`;

const App: React.FC = () => {
  return (
      <ColorPalette>
          <ColorFunction>
              <ControlPanel />
          </ColorFunction>
      </ColorPalette>
  );
}

export default App;

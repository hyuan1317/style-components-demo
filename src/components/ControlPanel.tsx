import React from 'react';
import styled from 'styled-components';
import { TabItem , TabMenu } from '../global-styled-component/Tab';

const ControlPanel = styled.div`
    --panel-tab-border: var(--x-clr-primary);
    --panel-tab-focus: var(--palette-malibu);
    --panel-tab-inactive: var(--x-clr-font-inactive);
    --panel-background: var(--x-clr-secondary);
    --panel-text: var(--x-clr-font-default);
    --panel-text-focus: var(--x-clr-font-focus);
    --panel-text-inactive: var(--x-clr-font-inactive);

    width: 320px;
    height: 600px;
    background-color: var(--panel-background);
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    box-sizing: border-box;
`;
const PanelHead = styled.header`
    width: 100%;
    flex: 0 0 52px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 100%;
    color: var(--panel-text);
`;

const ControlPanelTabMenu = styled(TabMenu)`
`;
const ControlPanelTabItem = styled(TabItem)`
`;

export default function () {
    return (
        <ControlPanel>
            <PanelHead>
                Control
            </PanelHead>
            <ControlPanelTabMenu medium={true}>
                <ControlPanelTabItem focus={true}>Quick Start</ControlPanelTabItem>
                <ControlPanelTabItem focus={false}>Deep Dive</ControlPanelTabItem>
            </ControlPanelTabMenu>
        </ControlPanel>
    );
}
import styled from 'styled-components';

interface TabMenuProps {
    small?: boolean;
    medium?: boolean;
}
interface TabItemProps {
    focus: boolean;
}
export const TabMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: ${(props: TabMenuProps) => props.small ? '12px' : props.medium ? '14px' : '12px'};
    background-color: var(--clr-background, #333333);
    border-bottom: 2px solid var(--clr-border-default, #555555);
    height: ${(props: TabMenuProps) => props.small ? '24px' : props.medium ? '36px' : '24px'};
    line-height: ${(props: TabMenuProps) => props.small ? '24px' : props.medium ? '36px' : '24px'};
    box-sizing: border-box;
`;

export const TabItem = styled.li`
    margin: 0;
    padding: 0 12px;
    box-sizing: border-box;
    color: ${(props: TabItemProps) => props.focus ? 'var(--clr-border-focus, #eeeeee)' : 'var(--clr-text-default, #999999)'};
    border-bottom: ${(props: TabItemProps) => props.focus
        ? '2px solid var(--clr-border-focus, #ff9717)'
        : '2px solid var(--clr-border-default, #555555)'};
`;
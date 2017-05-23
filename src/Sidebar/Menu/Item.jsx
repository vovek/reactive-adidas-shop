/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  padding: 0.3rem 0;
  padding-right: 20px;
  font-weight: bold;
  line-height: 1.5;
  font-family: avenir-next;
  color: ${props => (props.isActive ? '#fff' : '#3c3c3c')};
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:hover {
    color: #fff;
  }
  &:after {
    content: '';
    position: absolute;
    top: 18px;
    right: 0;
    width: 10px;
    height: 10px;
    border: 3px solid #3c3c3c;
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: rotate(45deg);
    transition-duration: .1s;
  }
  ${props => props.isOpened && `
    color: #fff;
    &:after {
      border-color: #fff;
      transform: rotate(225deg);
    }
  `}
`;

export const Link = styled(NavLink)`
  font-weight: normal;
  font-family: andale-mono;
  text-transform: uppercase;
  color: #3c3c3c;
  &:hover {
    color: #fff;
  }
  &:last-child {
    margin-bottom: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }
  render() {
    return (
      <Wrapper>
        <Button
          onClick={this.handleClick}
          isOpened={this.state.isOpened}
        >
          {this.props.title}
        </Button>
        {this.state.isOpened && this.props.children}
      </Wrapper>
    );
  }
}

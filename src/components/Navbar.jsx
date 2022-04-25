import React from 'react'
import styled from 'styled-components'
import { signInWithPopup, getAuth } from 'firebase/auth'
import { provider } from '../firebase'

export const Navbar = () => {
  const auth = getAuth()

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </Logo>
      <NavMenu>
        <a href='/home'>
          <img src='/images/home-icon.svg' alt='Home' />
          <span>Home</span>
        </a>
        <a href='/search'>
          <img src='/images/search-icon.svg' alt='Search' />
          <span>Search</span>
        </a>
        <a href='/watchlist'>
          <img src='/images/watchlist-icon.svg' alt='Watchlist' />
          <span>Watchlist</span>
        </a>
        <a href='/originals'>
          <img src='/images/original-icon.svg' alt='Originals' />
          <span>Originals</span>
        </a>
        <a href='/movies'>
          <img src='/images/movie-icon.svg' alt='Movies' />
          <span>Movies</span>
        </a>
        <a href='/series'>
          <img src='/images/series-icon.svg' alt='Series' />
          <span>Series</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 0 5px;
      margin-top: 1px;
      font-weight: semibold;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.25, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Login = styled.a`
  font-size: 12px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

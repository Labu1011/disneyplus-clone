import React, { useEffect } from 'react'
import styled from 'styled-components'
import { signInWithPopup, getAuth } from 'firebase/auth'
import { provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../features/user/userSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useSelector(selectUserName)
  const userphoto = useSelector(selectUserPhoto)

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        navigate('/home')
      }
    })
  }, [username])

  const auth = getAuth()

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user)
        })
        .catch((error) => {
          alert(error.message)
        })
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState())
          navigate('/')
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to='/home'>
              <img src='/images/home-icon.svg' alt='Home' />
              <span>Home</span>
            </Link>
            <Link to='/search'>
              <img src='/images/search-icon.svg' alt='Search' />
              <span>Search</span>
            </Link>
            <Link to='/watchlist'>
              <img src='/images/watchlist-icon.svg' alt='Watchlist' />
              <span>Watchlist</span>
            </Link>
            <Link to='/originals'>
              <img src='/images/original-icon.svg' alt='Originals' />
              <span>Originals</span>
            </Link>
            <Link to='/movies'>
              <img src='/images/movie-icon.svg' alt='Movies' />
              <span>Movies</span>
            </Link>
            <Link to='/series'>
              <img src='/images/series-icon.svg' alt='Series' />
              <span>Series</span>
            </Link>
          </NavMenu>

          <SignOut>
            <UserImg
              src={userphoto}
              alt={username}
              referrerpolicy='no-referrer'
            />

            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
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

const UserImg = styled.img`
  height: 100%;
`

const DropDown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`

import styled from 'styled-components';

export const StyledCarousel = styled.section`
  .alice-carousel__dots {
    display: none;
  }
  .alice-carousel__stage-item {
    margin: 0 5px;
  }
  .alice-carousel .animated {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .alice-carousel .animated-out {
    z-index: 1;
  }

  .alice-carousel .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  $clr-light: #e0e4fb !default;
  $clr-base: #465798 !default;
  $clr-accent: darkred !default;

  $transition-time: 0.4s !default;

  $play-btn-color: $clr-base !default;
  $play-btn-size: 32px !default;

  .alice-carousel {
    position: relative;

    width: 100%;
    margin: auto;

    direction: ltr;
  }

  .alice-carousel__wrapper {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    width: 100%;
    height: auto;
  }

  .alice-carousel__stage {
    position: relative;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    white-space: nowrap;

    transform-style: flat;
    -webkit-transform-style: flat;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    &-item {
      position: relative;

      display: inline-block;
      padding: 0;
      margin: 0;

      box-sizing: border-box;
      width: 100%;
      height: 100%;

      vertical-align: top;
      white-space: normal;

      line-height: 0;
      * {
        line-height: initial;
      }
      &.__hidden {
        opacity: 0;
        overflow: hidden;
      }
    }
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: inline-block;

    box-sizing: border-box;
    width: 50%;
    padding: 10px 5px;

    [data-area] {
      &::after {
        position: relative;

        content: attr(data-area);
        text-transform: capitalize;
      }
    }
  }

  .alice-carousel__prev-btn {
    text-align: right;
  }

  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    display: inline-block;

    cursor: pointer;

    padding: 5px;
    margin: 0;

    color: $clr-base;
    &:hover {
      color: $clr-accent;
    }
    &.__inactive {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  .alice-carousel__play-btn {
    position: absolute;
    top: 30px;
    left: 20px;

    display: inline-block;
    &:hover {
      cursor: pointer;
    }
    &-wrapper {
      position: relative;

      width: $play-btn-size;
      height: $play-btn-size;
      padding: 10px;

      border-radius: 50%;
      background-color: #fff;
    }
  }

  .alice-carousel__play-btn-item {
    position: absolute;

    width: $play-btn-size;
    height: $play-btn-size;

    cursor: pointer;

    border: 0;
    outline: none;
    background: transparent;
    &::before,
    &::after {
      position: absolute;
      pointer-events: none;

      display: block;

      width: 0;
      height: 0;

      content: '';
      transition: all $transition-time linear;

      border-width: 8px 0 8px 15px;
      border-style: solid;
      border-color: transparent;
      border-left-color: $play-btn-color;
    }
    &::before {
      left: 5px;

      height: 14px;
    }
    &::after {
      top: 7px;
      left: 18px;
    }
    &.__pause {
      &::before,
      &::after {
        height: 30px;
        border-width: 0 0 0 10px;
      }
      &::after {
        top: 0;
        left: 18px;
      }
    }
  }

  .alice-carousel__dots {
    margin: 30px 3px 5px;
    padding: 0;

    list-style: none;

    text-align: center;

    & > li {
      display: inline-block;
    }

    &-item:not(.__custom) {
      width: 8px;
      height: 8px;

      cursor: pointer;

      border-radius: 50%;
      background-color: $clr-light;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &:hover,
      &.__active {
        background-color: lighten($clr-base, 15%);
      }
    }
  }

  .alice-carousel__slide-info {
    position: absolute;
    top: 20px;
    right: 20px;

    display: inline-block;

    padding: 5px 10px;

    color: $clr-base;
    border-radius: 5px;
    background-color: rgba($clr-light, 0.6);
    &-item {
      vertical-align: middle;

      line-height: 0;
    }
  }
  .alice-carousel {
    margin-top: ${p => p.theme.space['16']};
  }
`;

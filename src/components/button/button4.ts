import { styleModel } from "models/styleModel";

export const button4: styleModel = {
  title: "button4",
  scss: `.button4 {
  position: relative;
  z-index: 2;
  outline: none;
  border: 2px solid #333c5f;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.6em;
  margin: 65px auto;
  width: 150px;
  padding: 0.9rem 0;
  &:hover {
    background: #fff;
    border-color: #333c5f;
    color: #333c5f;
    &::before,
    &::after {
    width: 0;
    background: #333c5f;
    }
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    top: 0;
    width: 50%;
    height: 100%;
    background: #333c5f;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  &::before {
    right: 0;
  }
  &::after {
    left: 0;
  }
}
`,
} as const;

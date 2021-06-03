import { styleModel } from "models/styleModel";

export const button7: styleModel = {
  title: "button7",
  scss: `.button7 {
  position: relative;
  background: #333c5f;
  border-radius: 10px;
  width: 150px;
  margin: 68px auto;
  padding: 0.7rem 0;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border: 1px dashed #fff;
  box-shadow: 0px 0px 0px 5px #333c5f;
  transition: 0.3s;
  &:hover {
    color: #333c5f;
    background: #fff;
    border: 1px dashed #333c5f;
    box-shadow: 0px 0px 0px 5px #fff;
  }
}
`,
} as const;

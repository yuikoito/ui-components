import { styleModel } from "models/styleModel";

export const bubble2: styleModel = {
  title: "bubble2",
  scss: `.bubble2 {
  margin: 70px auto;
  margin-right: 10px;
  position: relative;
  display: inline-block;
  padding: 15px;
  color: #333c5f;
  font-size: 1.5rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
    top: 50%;
    right: -10px;
    margin-left: -10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    transform: translateY(-50%) rotate(-45deg) skew(10deg, 10deg);
  }
}
.bubble2 > p {
  margin: 0;
  padding: 0;
}
`,
} as const;

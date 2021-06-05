import { styleModel } from "models/styleModel";

export const text3: styleModel = {
  title: "text3",
  scss: `.text3 {
  margin: 40px auto;
  font-size: 3.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.text3 > span {
  color: #333c5f;
  animation: text3 2.5s infinite;
  -webkit-animation: text3 2.5s ease infinite;
  @for $i from 1 through 5 {
    &:nth-child(#{$i + 1}) {
      $delay: $i * 0.2 + s;
      animation-delay: $delay;
    }
  }
}
@keyframes text3 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
`,
} as const;
